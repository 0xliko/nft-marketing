import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import React from 'react';
export interface IProps{
    [key:string]:any
}
export interface ISubCategory{
    id:number,
    name:string
}
export interface ICategory{
    name:string,
    icon:string,
    subcategories:ISubCategory[]
}
export interface IProduct{
   id:number,
   name:string,
   favoriteCount:number,
   price:number
}
export interface IConnector{
    name:string,
    connector: InjectedConnector | WalletConnectConnector,
    icon:string
}
export interface IProduct{
    id:number,
    name:string,
    price:number,
    favourCount:number,
    imgURL:any
}
export interface IActivity{
    author:string,
    action:string,
    priceETH:number,
    priceUSD:number,
    date: Date
}
export interface IProductDetail{
    id:number,
    name:string,
    price:number,
    favourCount:number,
    imgURL:any,
    edition:string,
    description:string,
    series:string,
    tag:string,
    color:string,
    activities:IActivity[],
    author:string
}
export interface IProductGroup{
    name:string,
    items:IProduct[]
}


