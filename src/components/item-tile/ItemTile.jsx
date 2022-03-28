import './itemTile.css'


export const ItemTile = ({item}) =>{

    return (
        <>
            <div className="item-tile-div">
                <div className="tile-image-div">
                    <img src= {item.image} alt=""  width='100%'/>
                </div>
                <div className="item-detail-div">
                    <h3 className="item title">
                        Title : {item.title}
                    </h3>
                    <p className="item-brand">
                       Brand : {item.brand}
                    </p>
                    <p className='item-price'>
                        Price : {item.price}
                    </p>
                    <p className="item-category">
                        Category : {item.category}
                    </p>
                </div>
            </div>
        </>
    )
}