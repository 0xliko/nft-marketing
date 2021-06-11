import React, {useEffect, useState} from 'react';
import Layout from '../Layout/Layout';
import {IProps} from "../Interface";
import {useDispatch, useSelector, useStore} from "react-redux";
import {State} from "../reducers";
import ProductGroup from "../components/ProductGroup";
import {IProductGroup} from "../Interface";
import img1 from '../assets/images/products/recordplayer1.png';
import img2 from '../assets/images/products/product2.png';
import plant from '../assets/images/products/plant.png';
import sign from '../assets/images/products/sign.png';


const Home: React.FC<IProps> = (props) => {
    console.log(props)

    const reduxDispatch = useDispatch();

    const trendingGroup:IProductGroup = {
        name:"TRENDING",
        items:[
            {
                id:1,
                name:"Vintage Record Player",
                price:0.1,
                favourCount:69,
                imgURL:img1
            },
            {
                id:2,
                name:"Record Player Box",
                price:0.1,
                favourCount:80,
                imgURL:img2
            },
            {
                id:3,
                name:"Tiny Palm",
                price:0.1,
                favourCount:420,
                imgURL:plant
            },
            {
                id:4,
                name:"Sign",
                price:0.1,
                favourCount:69,
                imgURL:sign
            }
        ]
    };

    const recentGroup:IProductGroup   = {
        name:"RECENTLY ADDED",
        items:[
            {
                id:1,
                name:"Vintage Record Player",
                price:0.1,
                favourCount:69,
                imgURL:img1
            },
            {
                id:2,
                name:"Record Player Box",
                price:0.1,
                favourCount:80,
                imgURL:img2
            },
            {
                id:3,
                name:"Tiny Palm",
                price:0.1,
                favourCount:420,
                imgURL:plant
            },
            {
                id:4,
                name:"Sign",
                price:0.1,
                favourCount:69,
                imgURL:sign
            }
        ]
    };

    const favourGroup:IProductGroup   = {
        name:"MOST FAVORITED",
        items:[
            {
                id:1,
                name:"Vintage Record Player",
                price:0.1,
                favourCount:69,
                imgURL:img1
            },
            {
                id:2,
                name:"Record Player Box",
                price:0.1,
                favourCount:80,
                imgURL:img2
            },
            {
                id:3,
                name:"Tiny Palm",
                price:0.1,
                favourCount:420,
                imgURL:plant
            },
            {
                id:4,
                name:"Sign",
                price:0.1,
                favourCount:69,
                imgURL:sign
            }
        ]
    };

    return (
        <Layout>
            <div className="container-fluid mtb15 no-fluid pt-4">
               <ProductGroup group={trendingGroup}/>
               <ProductGroup group={recentGroup}/>
               <ProductGroup group={favourGroup}/>
            </div>
        </Layout>

    );
}
export default Home;
