import React from "react";
import style from './product.module.css'
import glass from '../../assets/icons/glass.png'
function Product() {

    return <div className={style.container}>
        <div className={style.searchBox}>
            <img className={style.glass} src={glass} alt="" />
            <input type="text" />
        </div>
        <div className={style.listContainer}>
           {new Array(12).fill(1).map((idx) =>
            <ListItem key={idx}/>
           )}
        </div>
    </div>;
}

ListItem.defaultProps = {
    clothesImage: "https://source.unsplash.com/random/?product",
  };

function ListItem({ clothesImage }) {
    return <><img className={style.productImage} src={clothesImage} alt="이미지" /></>
}  

export default Product;