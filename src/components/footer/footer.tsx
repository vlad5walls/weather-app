import React from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarDay, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer>
            <div className={'switch'}>
                    <NavLink exact to={'/'} className={'link'}>
                        <FontAwesomeIcon className={'footerIcon'} icon={faCalendarDay}/>
                    </NavLink>
                    <NavLink exact to={'/week'} className={'link'}>
                        <FontAwesomeIcon className={'footerIcon'} icon={faCalendarAlt}/>
                    </NavLink>
            </div>
            <span>fivewalls.com.ua 2020</span>
        </footer>
    );
}
