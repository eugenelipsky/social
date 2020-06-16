import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <div>{props.profile.fullName}</div>
                <img
                    src={props.profile.photos.large}
                    alt=""/>
                <div>{props.profile.aboutMe}</div>
                <div>Ищу работу: {props.profile.lookingForAJob ? '👍' : '👎'}</div>
                <div>Описание: {props.profile.lookingForAJobDescription}</div>
                <h4>Контакты:</h4>
                <div>
                    <ul>
                        <li>Facebook: {props.profile.contacts.facebook ? props.profile.contacts.facebook : 'Не указано'}</li>
                        <li>Website: {props.profile.contacts.website ? props.profile.contacts.website : 'Не указано'}</li>
                        <li>VK: {props.profile.contacts.vk ? props.profile.contacts.vk : 'Не указано'}</li>
                        <li>Twitter: {props.profile.contacts.twitter ? props.profile.contacts.twitter : 'Не указано'}</li>
                        <li>Instagram: {props.profile.contacts.instagram ? props.profile.contacts.instagram : 'Не указано'}</li>
                        <li>Youtube: {props.profile.contacts.youtube ? props.profile.contacts.youtube : 'Не указано'}</li>
                        <li>Github: {props.profile.contacts.github ? props.profile.contacts.github : 'Не указано'}</li>
                        <li>Main: {props.profile.contacts.mainLink ? props.profile.contacts.mainLink : 'Не указано'}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;