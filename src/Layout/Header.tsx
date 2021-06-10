import React, {Component, useState, useEffect, EffectCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {openSideBar} from '../actions'
import {IConnector} from "../Interface";
import wallet from '../assets/images/wallet.svg';

import ClassNames from "classnames";
import {IProps} from "../Interface";
import {MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import {useWeb3React} from "@web3-react/core";
import metaMaskIcon from '../assets/images/metamask.svg';
import walletConnectIcon from '../assets/images/walletconnect.svg';
import {MetaMask,WalletConnect} from "../connector";
import {Toaster,Position,Intent} from '@blueprintjs/core';
import BigNumber from 'bignumber.js';
import {getUserBalance} from '../services/accountService';
const toaster = Toaster.create({
    className: "recipe-toaster",
    position: "top-right"
});
const connectors:IConnector[] = [
    {
        name:"Meta Mask",
        connector:MetaMask,
        icon:metaMaskIcon
    },
    {
        name:"Wallet Connect",
        connector:WalletConnect,
        icon:walletConnectIcon
    }
]

const Header: React.FC<IProps> = ({}) => {
    const {active, chainId, account,activate,deactivate,library,connector} = useWeb3React();
    const [modalOpened,setModalOpened] = useState(false);
    const [activatingConnector, setActivatingConnector] = useState();
    const [userBalance, setUserBalance] = useState<BigNumber>(new BigNumber(0))
    const reduxDispatch = useDispatch();

    useEffect(async ()=>{
        if(active){
            const balance = await getUserBalance({
                library,
                account
            })
            setUserBalance(balance);
        }
    },[active,chainId])
    const connectWallet = ()=>{

        if(active){

        } else {
            setModalOpened(true);
        }


    }
    const connectToWallet = async (connectorInfo:IConnector)=>{
        setActivatingConnector(connectorInfo.connector);
        const walletConnect = connectors[1].connector;
        if(connectorInfo.connector != walletConnect ){
            await walletConnect?.close();
        }
        activate(connectorInfo.connector,(err)=>{
            setActivatingConnector(undefined);
            console.log(err);
            if(err.name == "NoEthereumProviderError"){

                toaster.show({intent: Intent.DANGER, timeout:500000,message:"Please install MetaMask extension!"});;
                return;
            } else {

            }


        }).then(()=>{

            setActivatingConnector(undefined);
            setModalOpened(false);
        })
    }

    return (
      <div className="navbar-custom">
         <div className="header-container">
             <div className="menu-container float-right pl-lg-2 pl-md-1">
                <a className="text-white-1 float-left sidebar-toggle"
                   onClick={()=>{
                      reduxDispatch(openSideBar());
                   }}>
                    <i className="fa fa-align-justify"></i>
                </a>
                <a className={ClassNames("link",{active:location.pathname=="/"})} href="/">Marketplace</a>
                <a className={ClassNames("link",{active:location.pathname=="/home"})} href="/home">Home</a>
                <a className={ClassNames("link",{active:location.pathname=="/about"})} href="/about">About</a>
                <a className={"favorite"}>
                    <i className="fa fa-heart"></i>

                </a>
                <MDBBtn onClick={connectWallet} color="gray" tag="a" className="connect-wallet">
                     <img src={wallet}/>
                    <span>{!active?"Connect Wallet":userBalance.toFixed(3)+" ETH"}</span></MDBBtn>
              </div>
              <div className="float-right search-box-container">
                 <div className="col-12 search-box">
                     <i className="fa fa-search"></i>
                     <input type="text"/>
                 </div>
              </div>
         </div>
         <MDBModal size="sm" isOpen={modalOpened} toggle={()=>{setModalOpened(!modalOpened)}} centered={true}>
              <MDBModalHeader toggle={()=>{setModalOpened(!modalOpened)}}>Select Wallet Provider</MDBModalHeader>
              <MDBModalBody>
                  {
                      connectors.map((connectorInfo:IConnector,key:number)=>{
                          const connected = connectorInfo.connector == connector;
                          const activating = connectorInfo.connector == activatingConnector;
                          return <MDBBtn key={key} rounded color="gray" tag="a" outline={true} className={`provider-button ${connected?"connected":""}`}
                                  onClick={()=>{connectToWallet(connectorInfo)}}>
                                                          <img src={connectorInfo.icon} className="mr-2"/>
                                                          <span>
                                                              {connectorInfo.name}
                                                              {connected && (<><br/>{userBalance.toFixed(3)}</>)}
                                                              {activating && (<> ...</>)}
                                                          </span>
                                  </MDBBtn>
                      })
                  }
              </MDBModalBody>
              <MDBModalFooter>
                  {active && <MDBBtn tag="a" color="gray">Disconnect</MDBBtn>}
              </MDBModalFooter>
          </MDBModal>
      </div>
    );

}
export default Header;
