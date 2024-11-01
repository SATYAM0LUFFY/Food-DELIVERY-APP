import React from 'react'
import "./Home.css"
import { useState } from 'react'

import Header from '../../components/Header/Header'
import MenuList from '../../components/MenuList/MenuList'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'



const Home = () => {

  const [category ,setCategory] = useState("All");
  return (
    <div>
      
      <MenuList category ={category} setCategory = {setCategory}/>
      <FoodDisplay category = {category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
