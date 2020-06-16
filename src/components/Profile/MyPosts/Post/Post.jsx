import React from "react";
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://www.searchpng.com/wp-content/uploads/2018/12/Gamer-715x715.png"
                alt=""/>
            {props.message}
            <div>
                <span>{props.likes}</span>
            </div>
        </div>
    )
}

export default Post;