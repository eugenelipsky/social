import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    let state = props.state;

    return <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        </div>

        <div className={s.friendsBlock}>
            <h2 className={s.friendTitle}>
                Friends
            </h2>
            <div className={s.friendsList}>
                {state.sidebar.friends.map(friend => {
                    return (
                        <div className={s.friendsItem} key={friend.id}>
                            <img className={s.friendsItemAvatar}
                                 src={friend.avatarUrl}
                                 alt=""/>
                            <div className={s.friendsItemName}>
                                {friend.name}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </nav>
}

export default Navbar;