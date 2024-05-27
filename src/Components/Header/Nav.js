
import './Nav.css'


export default function Nav() {
    const notification = [
        'زمان رزرو',
        'مهلت ثبت نام ',
        'زمان رزرو تمام شده است',

    ]
    return (
        <div className="nav">
            <div className='nav__wrraper'>
                <a href="" className="app-logo">
                    <img src='svgs/logo.svg' alt="logo" className="app-log__img"></img>

                </a>
                
                    {notification.length > 0  && (<a href="" className="noti-logo">
                        <img src='svgs/alert.svg' className='noti-logo__alert'></img>
                        <span className='noti-logo__count'>{notification.length}</span>
                    </a>)}
                
                <ul className="menu">
                    <li className="menu__item"><a href='#' className="menu__link menu__link--active">Home</a></li>
                    <li className="menu__item"><a href='#' className="menu__link">Destination</a></li>
                    <li className="menu__item"><a href='#' className="menu__link">Near me</a></li>
                    <li className="menu__item"><a href='#' className="menu__link">Events</a></li>
                    <li className="menu__item"><a href='#' className="menu__link">Blog</a></li>
                    <li className="menu__item"><a href='#' className="menu__link">Gallery</a></li>
                    <li className="menu__item"><a href='#' className="menu__link">About</a></li>
                    <li className="menu__item"><a className="menu__link">Contactus</a></li>
                </ul>
            </div>
            <div className='nav-mobile'>
                <ul className="menu-mobile">
                    <li className="menu-mobile__item"><a href='#' className="menu-mobile__link">Home</a></li>
                    <li className="menu-mobile__item"><a href='#' className="menu-mobile__link">Destination</a></li>
                    <li className="menu-mobile__item"><a href='#' className="menu-mobile__link">Near me</a></li>
                    <li className="menu-mobile__item"><a href='#' className="menu-mobile__link">Events</a></li>
                    <li className="menu-mobile__item"><a href='#' className="menu-mobile__link">Blog</a></li>
                    <li className="menu-mobile__item"><a href='#' className="menu-mobile__link">Gallery</a></li>
                    <li className="menu-mobile__item"><a href='#' className="menu-mobile__link">About</a></li>
                    <li className="menu-mobile__item"><a href='#' className="menu-mobile__link">ContactUs</a></li>
                </ul>
                <div className='mobile-links'>
                    <a className='mobile-links__link'>Sign in</a>
                    <a className='mobile-links__link mobile-links__link--border'>Sign up</a>
                </div>

            </div>
            <div className='links'>
                <a className='links__link'>Sign in</a>
                <a className='links__link links__link--border'>Sign up</a>
            </div>
            <div className='btn-mobile'>
                <span className='btn-mobile__line'></span>
            </div>
        </div>

    )
}