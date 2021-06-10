import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Header from './Header';
import Sidebar from "./Sidebar";
import {closeSideBar} from '../actions'
import {State} from "../reducers";

interface IProps{
    [key:string]:any
}

const Layout:React.FC<IProps> = ({ children, history }) => {
  const {sidebar} = useSelector((state: State) => state.uiStatus);
  const reduxDispatch = useDispatch();
  return (
      <div id="wrapper">
        <Header/>
        <Sidebar/>
        <div className="content-page">
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
