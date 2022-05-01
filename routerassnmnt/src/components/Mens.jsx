import { useState, useEffect } from 'react'
// import { axios } from "axios";
import { Link } from "react-router-dom";


export const Mens = () => {
  const [mens, setMens] = useState([])
  const getData = async () => {
    const data1 = await fetch('http://localhost:8080/men').then((d) =>
      d.json(),
    )
    setMens(data1)
  }
  useEffect(() => {
    getData()
  }, [])
  // console.log(mens)

  return (
    <div>
          <h1>Mens Products </h1>
    <div className="productgrid">
     
      {mens.map((e) => (
        <Link className="employee_card" key= {e._id} to={`${e._id}`}>
          <img className="menimage" img src={e.image2} />
          <h6 className="ProductName">{e.ProductName}</h6>
          <div className="prize">
            <span className="price">prize:₹{e.Price}&nbsp;&nbsp;&nbsp;</span>
            <span className="strikeoffPrice">
            &nbsp;&nbsp;strikeoffPrice: <del>₹{e.strikeoffPrice}</del>
            </span>
           
          </div>
          <button>Add To Cart</button>
        </Link>
      ))}
    </div>
    </div>

  )
}
