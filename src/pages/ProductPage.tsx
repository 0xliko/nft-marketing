import React, {useEffect, useState} from 'react';
import Layout from '../Layout/Layout';
import {IActivity, IProps} from "../Interface";
import {useDispatch, useSelector, useStore} from "react-redux";
import {State} from "../reducers";
import ProductGroup from "../components/ProductGroup";
import {IProductDetail} from "../Interface";
import {withRouter} from 'react-router-dom';
import img1 from '../assets/images/products/recordplayer1.png';
import rotate from '../assets/images/rotate.svg';
import {SET_CURRENT_PRODUCT} from "../reducers/config";
import {MDBBtn, MDBMask, MDBView} from "mdbreact";
import {TOGGLE_FAVORITE} from "../reducers/favorites";
const ProductPage: React.FC<IProps> = (props:IProps) => {


    const reduxDispatch = useDispatch();
    const {history} = props;
    const product:IProductDetail = {
        id:1,
        name:"Vintage Record Player",
        price:0.1,
        favourCount:69,
        imgURL:img1,
        edition: "7/20",
        description:"Record Player Box created by renown independent company Audio Technica. It is a classic example of functionality meets aesthetic. This unique electronic is unique to the Vintage series. Only 20 of them are in existence and are thus hard to come by.",
        series:"Vintage",
        color:"Metal",
        tag:"Electronics",
        author:"dutchtide",
        activities:[
            {
              action:"Sold to",
              author:"@loopify",
              date: new Date("2021/4/29 00:23"),
              priceETH:0.55,
              priceUSD:1494.16
            },
            {
                action:"Listed by",
                author:"@0xDgga5",
                date: new Date("2021/4/28 23:23"),
                priceETH:0.55,
                priceUSD:1494.16
            },
            {
                action:"Transferred to",
                author:"@0xDgga5",
                date: new Date("2021/4/27 01:03"),
                priceETH:0,
                priceUSD:0
            },
            {
                action:"Listed by",
                author:"@0xBffa7",
                date: new Date("2021/4/17 00:23"),
                priceETH:0.45,
                priceUSD:1234.56
            },
            {
                action:"Bought by",
                author:"@0xBffa7",
                date: new Date("2021/4/27 00:00"),
                priceETH:0.1,
                priceUSD:234.16
            }
        ]
    }
    const {favorites} = useSelector((state: State) => state);

    const isFavoriteProduct = ():boolean =>{
        let list = favorites?favorites.split(","):[];
        return list.indexOf(product.id+"") > -1;

    }


    const [isFavor,setIsFavor] = useState(isFavoriteProduct());
    useEffect(()=>{
        setIsFavor(isFavoriteProduct());
    },[favorites]);

    return (
        <Layout landing={true}>
            <div className="container-fluid mtb15 no-fluid pt-4">
               <div className="row">
                    <div className="col-md-5">
                        <div className="product-preview" onClick={()=>{
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
                                    <p className="red-text">{product.name}</p>
                                </MDBMask>
                            </MDBView>
                            <div className="product-favour-count">
                                {
                                    <i className={`fa${!isFavor?"r":""} fa-heart mr-1`}
                                       onClick={(e)=>{
                                           e.preventDefault();
                                           e.stopPropagation();
                                           reduxDispatch({type:TOGGLE_FAVORITE,item:product.id+""});
                                       }}
                                    />
                                }
                                {product.favourCount}
                            </div>
                            <div className="product-rotate">
                              <img src={rotate}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-6 col-sm-8 col-xs-12">
                                 <h3 className="mb-5">{product.name}</h3>
                                 <div className="row mb-2">
                                     <div className="col-6">
                                         <span className="font-small">Current Price</span>
                                         <br/>
                                         <span className="text-primary">{product.price}ETH</span>
                                     </div>
                                     <div className="col-6">
                                         <span className="font-small">Edition</span>
                                         <br/>
                                         <span className="text-primary">{product.edition}</span>
                                     </div>
                                 </div>
                                 <p className="mb-4">{product.description}</p>
                                 <p className="text-primary mb-4">{product.tag}&nbsp;&nbsp;&nbsp;
                                     Series:{product.series}&nbsp;&nbsp;&nbsp;Color:{product.color}</p>
                                <div className="row mb-4">
                                    <div className="col-12">
                                      <MDBBtn color="warning" className="float-left text-dark btn-rounded-30">Buy Item</MDBBtn>
                                      <MDBBtn color="gray" className="float-left text-white btn-rounded-30 bg-card-dark">Test Item</MDBBtn>
                                    </div>
                                </div>

                                <h5 className="mb-3">Activity</h5>
                                <div className="row">
                                    {
                                        product.activities.map((activity:IActivity,key:number)=>{
                                             return <div key="key" className="col-12 bg-card-dark p-2 mb-3">
                                                 <span className="float-left">{activity.action} {activity.author}</span>
                                                 <span className="float-right">{activity.priceETH} ETH</span>
                                                 <br/>
                                                 <span className="float-left">{activity.date.toDateString()}</span>
                                                 <span className="float-right">{activity.priceUSD} USD</span>
                                             </div>
                                        })

                                    }
                                </div>



                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </Layout>

    );
}
export default withRouter(ProductPage);

