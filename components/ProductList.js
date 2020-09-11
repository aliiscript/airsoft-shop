import dynamic from "next/dynamic";
import { useState } from "react";

const Product = dynamic(() => import("./Product"));

export default function ProductList(props) {
    
    console.log(props.minv);

    return (
        <div className="product-list">
            {props.minv.map((item) => (
                <Product
                    product={item}
                    index={props.minv.indexOf(item)}
                    setHoverStats={props.setHoverStats}
                    setHoverEffect={props.setHoverEffect}
                    setHoverInfo={props.setHoverInfo}
                />
            ))}
        </div>
    );
}
