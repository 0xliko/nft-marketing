import React, {useEffect, useState} from 'react';
import {IProduct, IProductGroup, IProps} from "../Interface";
import {useDispatch, useSelector, useStore} from "react-redux";
import {State} from "../reducers";
import ProductItem from "./ProductItem";

interface ProductGroupProps {
    group:IProductGroup
}
const ProductGroup = ({group}:ProductGroupProps) => {
    const {favorites} = useSelector((state: State) => state);

    const favoriteListFromStoreValue = (storeValue:string):string[] =>{
        let list = favorites?favorites.split(","):[];
        return list;
    }

    const initState = favoriteListFromStoreValue(favorites);
    const [favoriteList, setFavoriteList] = useState<string[]>(initState);
    useEffect(()=>{
        setFavoriteList(favoriteListFromStoreValue(favorites));
    },[favorites]);

    return (
       <>
           <h5>{group.name}</h5>
           <div className="row mb-2">
           {
              group.items.map((item:IProduct,key:number)=>{
                  let isFavour = favoriteList.indexOf(item.id+"") > -1;
                  return <div key={key} className="col-6 col-sm-6 col-md-3">
                             <ProductItem isFavour={isFavour}  product={item}/>
                         </div>
              })
           }
           </div>
       </>
   )
}
export default ProductGroup;