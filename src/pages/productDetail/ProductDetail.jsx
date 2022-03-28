import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './productDetail.css'

export const ProductDetail = () => {

    let {id} = useParams();

    console.log(id);

    const [item, setItem] = useState()

    useEffect(()=>{
        fetch(`https://movie-fake-server.herokuapp.com/products/${id}`).then((res)=>
        res.json()).then((data)=>{
            setItem(data);
        })
    },[])

    console.log(item);
    
    

    return (
        <>
            <div className="product-detail-page">
                <div className="item-detail-page-img">
                    <img src= {item?.image} alt="" width= '100%' />
                </div>

                <div className="item-detail-page-right">
                    <h1>Title : {item?.title}</h1>
                    <h2>Brand : {item?.brand}</h2>
                    <h2>Price : {item?.price}</h2>
                    <h2>Category : {item?.category}</h2>

                </div>

            </div>

        </>
    )
}