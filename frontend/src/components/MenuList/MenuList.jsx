import React from 'react'
import "./MenuList.css"
import { menu_list } from '../../assets/assets'

function MenuList( {category , setCategory }) {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p1 className="explore-menu-text">Explore From A Wide Vriety Of Dirrent cousiens explore more as you like and choose any one </p1>
        <div className="explore-menu-list">
            {menu_list.map((item,idx)=>{
                return (
                    <div onClick={()=>{setCategory( prev=>prev===item.menu_name ?"All" : item.menu_name)}} key={idx} className='explore-menu-list-item' >
                        <img src={item.menu_image} className = {category===item.menu_name?"active": "" } alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default MenuList
