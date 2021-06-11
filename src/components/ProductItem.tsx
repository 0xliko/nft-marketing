import React, {useEffect, useState} from 'react';
import {IProduct, IProductGroup, IProps} from "../Interface";
import {useDispatch, useSelector, useStore} from "react-redux";
import { useHistory} from 'react-router-dom'
import {State} from "../reducers";
import {MDBIcon, MDBMask, MDBView} from "mdbreact";
import {SET_CURRENT_PRODUCT} from '../reducers/config';
import {TOGGLE_FAVORITE} from "../reducers/favorites";
import {withRouter} from 'react-router-dom';
interface ProductItemProps {
    product:IProduct,
    isFavour:boolean

}
const ProductItem = (props:IProps) => {
    const {product,isFavour,history} = props;
    const reduxDispatch = useDispatch();
   return (

           <div className="product-item" onClick={()=>{
               reduxDispatch({type:SET_CURRENT_PRODUCT,product:product});
               history.push("/product");
           }}>

               <MDBView hover zoom>
                   <img
                       src={product.imgURL}
                       className="img-fluid"
                       alt=""
                   />
                   <MDBMask className="flex-center">
                       <p className="white-text">{product.name}</p>
                   </MDBMask>
               </MDBView>
               <div className="product-name">{product.name}</div>
               <div className="product-favour-count">
                   {
                       <i className={`fa${!isFavour?"r":""} fa-heart mr-1`}
                                     onClick={(e)=>{
                                         e.preventDefault();
                                         e.stopPropagation();
                                         reduxDispatch({type:TOGGLE_FAVORITE,item:product.id+""});
                                     }}
                       />
                   }
                   {product.favourCount}
               </div>
               <div className="product-price">
                  {product.price} ETH
               </div>
           </div>

   )
}
export default withRouter(ProductItem);