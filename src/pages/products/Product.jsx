import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { ItemTile } from '../../components/item-tile/ItemTile';
import { getData, sortProducts } from '../../redux/actions';
import './product.css'


export const Product = () => {


    const { isLoading, isError, error, data } = useSelector((store) => store);

    const dispatch = useDispatch();

    const handleSortChange = (e)=>{
        let sortType = e.target.value; 
        console.log(e.target.value);
        dispatch(sortProducts(sortType));

    }

    useEffect(() => {
        dispatch(getData());
    }, [])

    console.log(isLoading, isError, error, data)

    return isLoading ? <div className="loading-div"><h1>LOADING DATA...</h1></div> : (
        <>
            <select name="sort-select" className='sort-select' onChange={handleSortChange} >
                <option value="default">Default</option>
                <option value="asc">low-to-high</option>
                <option value="desc">high-to-low</option>

            </select>
            <div className="product-main-div">
                {
                    data.map((ele) =>
                        <Link className= 'product-link-tile' to={`/product/${ele.id}`} key = {ele.id} ><ItemTile  item={ele} /></Link> 
                    )
                }
            </div>
        </>
    )
}