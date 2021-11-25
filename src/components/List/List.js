import React from "react";
import Cart from "../Cart/Cart";
import './List.css'

const List = (props) => {

    return (

        <p className="list-style">
            {props.teacher.teacher.name}
        </p>
    )
}
export default List;