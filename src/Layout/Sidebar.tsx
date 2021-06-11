import React, {Component, useState, useEffect, useCallback} from 'react';
import {useSelector, useDispatch,useStore} from 'react-redux'
import {State} from '../reducers'

import ClassNames from 'classnames';

import furniture from '../assets/images/furniture.svg';
import building from '../assets/images/building.svg';
import atmosphere from '../assets/images/atmosphere.svg';
import lighting from '../assets/images/lighting.svg';
import surface from '../assets/images/surface.svg';
import {IProps, ICategory, ISubCategory} from "../Interface";
import {TOGGLE_SELECTED_SUBCATEGORY,REMOVE_ALL_SELECTED_SUBCATEGORY} from '../reducers/selectedSubCategories';
import {MDBBtn, MDBIcon, MDBInput} from 'mdbreact';
import {filter} from "minimatch";


const icons: IProps = {
    "furniture": furniture,
    "building": building,
    "atmosphere": atmosphere,
    "lighting": lighting,
    "surface": surface
}

const Sidebar: React.FC<IProps> = ({}) => {

    const categries: ICategory[] = [
        {
            name: "Forniture",
            icon: "furniture",
            subcategories: [
                {id: 101, name: "Tables"},
                {id: 102, name: "Beds"}
            ]
        },
        {
            name: "Building Blocks",
            icon: "building",
            subcategories: [
                {id: 201, name: "Wallpapers"},
                {id: 202, name: "Windows"},
                {id: 203, name: "Flooring"},
                {id: 204, name: "Support"}
            ]
        },
        {
            name: "Lighting",
            icon: "lighting",
            subcategories: [
                {id: 301, name: "Lamp"},
                {id: 302, name: "Windows"},
                {id: 303, name: "Flooring"},
                {id: 304, name: "Support"}
            ]
        },
        {
            name: "Surfaces",
            icon: "surface",
            subcategories: [
                {id: 401, name: "Carten"},
                {id: 402, name: "Windows"},
                {id: 403, name: "Flooring"},
                {id: 404, name: "Support"}
            ]
        }
    ];
    const [openedCategory, setOpenedCategory] = useState<string>("");

    const {selectedSubCategories} = useSelector((state: State) => state);

    const filterListFromStoreValue = (storeValue:string):IProps =>{
        let list = selectedSubCategories?selectedSubCategories.split(","):[];
        var checkList:IProps = {};
        list.map(item=>{
            checkList[item] = true;
        })
        return checkList;
    }

    const initState = filterListFromStoreValue(selectedSubCategories);
    const [filterList, setFilterList] = useState<IProps>(initState);
    const {sidebar} = useSelector((state: State) => state.configStatus);

    const reduxDispatch = useDispatch();
    const toggleSelectedSubCategory = (id: number) => {
        reduxDispatch({type:TOGGLE_SELECTED_SUBCATEGORY,item:id+""});
    }
    const store = useStore();

    useEffect(()=>{
        setFilterList(filterListFromStoreValue(selectedSubCategories));
    },[selectedSubCategories])





    return (

        <div className={`left-side-menu ${sidebar?"open":""}`}>
            <div className="logo-box">
                TIDE ESTATES
            </div>
            <ul className="side-menu">
                {
                    categries.map((category: ICategory, index: number) => {
                        return <li key={index}>

                            <MDBBtn color="gray" tag="a" onClick={() => {
                                if (category.name == openedCategory) {setOpenedCategory("");return}
                                else setOpenedCategory(category.name);
                            }
                            }
                            >
                                <img src={icons[category.icon]}/>
                                {category.name}
                                <MDBBtn color="gray" className="float-right" tag="span" size="sm"  gradient="blue">
                                  <i className={`float-right fa fa-${openedCategory ==category.name? "angle-down" : "angle-right"}`}></i>
                                </MDBBtn>

                            </MDBBtn>
                            <ul className={ClassNames("animated nav-second-level",
                                {
                                    "open": category.name == openedCategory,
                                    "sliceDown": category.name == openedCategory,
                                    "sliceUp": category.name != openedCategory
                                })}>
                                {
                                    category.subcategories.map((item: ISubCategory, key: number) => {

                                        return <li key={key}>
                                            <input className="float-left mr-2" type="checkbox"
                                                   checked={!!filterList[item.id+""]}
                                                   onChange={() => toggleSelectedSubCategory(item.id)}/>
                                            <span className="float-left">{item.name}</span>
                                        </li>
                                    })
                                }
                            </ul>

                        </li>
                    })
                }
                <div>
                    {


                        categries.map((category: ICategory, index: number) => {

                            return <React.Fragment key={index}>
                                {
                                    category.subcategories.map((item: ISubCategory, key: number) => {
                                        let isChecked = filterList[item.id+""];
                                        return isChecked && (
                                            <a className="btn btn-sm btn-outline-primary" key={key}
                                            onClick={()=>toggleSelectedSubCategory(item.id)}>
                                                <i className="fa fa-times float-left"/>
                                                <span className="float-left">{item.name}</span>
                                            </a>)
                                    })
                                }
                            </React.Fragment>
                        })
                    }
                </div>
                <a className="reset-filter" onClick={()=>{
                    reduxDispatch({type:REMOVE_ALL_SELECTED_SUBCATEGORY});
                }}>Reset Filter</a>
            </ul>


        </div>
    );
}
export default Sidebar;


