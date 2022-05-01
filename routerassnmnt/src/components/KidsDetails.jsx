import React from 'react'
import { useState, useEffect } from 'react'
// import { axios } from "axios";
import { useParams } from 'react-router-dom'

const KidDetails = () => {
  const { id } = useParams()
  const [mens, setMens] = useState({})
  const getData = async () => {
    const data1 = await fetch(`http://52.43.72.73:5000/kid`)
    let data2 = await data1.json()
    //   setMens(data2)
    console.log("data2" ,data2)
    const detailData = data2.filter((e) => {
      return e._id === id
    })
    console.log(detailData)
    setMens(detailData[0])
  }
  useEffect(() => {
    getData()
  }, [])
  console.log(mens)
  return (
    <div>
      <h1>Kids Product Details</h1>
      <div className="maindiv">
        {/* <div> */}
          <div>
            <img src={mens.image1} alt="" />
            <img src={mens.image2} alt="" />
          </div>
        {/* </div> */}
        <div className="leftdiv">
          <div>BrandName:{mens.BrandName}</div>
          <div>ProductName:{mens.ProductName}</div>
          <div>Price:₹{mens.Price}</div>
          <div>StrikeoffPrice:<del>₹{mens.strikeoffPrice}</del></div>
          <div>Offer:{mens.offer}</div>
          <div>CountryOrigin:{mens.countryOrigin}</div>
          <div>Sleeves:{mens.Sleeves}</div>
          <div>Fit:{mens.Fit}</div>
          <div>Neckline:{mens.Neckline}</div>
          <div>Pattern:{mens.Pattern}</div>
          <div>Fabric:{mens.Fabric}</div>
          <div>Occasion:{mens.Occasion}</div>
          <div>Collar:{mens.Collar}</div>
        </div>
      </div>
    </div>
  )
}

export default KidDetails
