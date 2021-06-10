import React, {useEffect, useState} from 'react';
import Layout from '../Layout/Layout';
import {IProps} from "../Interface";
import {useDispatch, useSelector, useStore} from "react-redux";
import {State} from "../reducers";




const Home: React.FC<IProps> = ({}) => {
    const {sidebar} = useSelector((state: State) => state.uiStatus);
    const reduxDispatch = useDispatch();
    return (
        <Layout>
            <div className="container-fluid mtb15 no-fluid">
                Home Page
            </div>
        </Layout>

    );
}
export default Home;
