import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Header from './Header';
import Sidebar from "./Sidebar";
import {closeSideBar} from '../actions'
import {State} from "../reducers";

interface IProps{
    [key:string]:any
}

const Layout:React.FC<IProps> = ({ children, history,landing }) => {
  const {sidebar} = useSelector((state: State) => state.configStatus);
  const reduxDispatch = useDispatch();

  return (
      <div id="wrapper">
        <Header landing={landing}/>
        {!landing && <Sidebar/>}
        <div className={`content-page ${landing?"landing":""}`}>
           {children}
        </div>
        <div className={`overay-warpper ${sidebar?"open":""}`} onClick={()=>{
            reduxDispatch(closeSideBar());
        }}>
        </div>
      </div>
  );
}
export default Layout;
