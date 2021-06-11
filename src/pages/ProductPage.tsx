import React, {useEffect, useState} from 'react';
import Layout from '../Layout/Layout';
import {IProps} from "../Interface";
import {useDispatch, useSelector, useStore} from "react-redux";
import {State} from "../reducers";
import ProductGroup from "../components/ProductGroup";
import {IProductGroup} from "../Interface";

const ProductPage: React.FC<IProps> = ({}) => {


    const reduxDispatch = useDispatch();


    return (
        <Layout landing={true}>
            <div className="container-fluid mtb15 no-fluid pt-4">
               Product
            </div>
        </Layout>

    );
}
export default ProductPage;
