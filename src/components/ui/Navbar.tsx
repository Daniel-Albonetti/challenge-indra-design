
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as LogoSVG } from '../../assets/icons/logo__LaslesVPN.svg';

const Navbar = () => {

    return (
        <div className="container__section--one">
            <header className="header__content">

                <div className="header__content--left">
                    <Link
                        className="header__brand"
                        to="/"
                    >
                        <LogoSVG className="header__logo" />
                        <span>Lasles<strong>VPN</strong></span>
                    </Link>

                    <nav className="header__nav--content">

                        <NavLink
                            to=""
                            className={({ isActive }) => isActive ? "active-link" : "link"}
                        >
                            Features
                        </NavLink>

                        <NavLink
                            to=""
                            className={({ isActive }) => isActive ? "active-link" : "link"}
                        >
                            Pricing
                        </NavLink>

                        <NavLink
                            to=""
                            className={({ isActive }) => isActive ? "active-link" : "link"}
                        >
                            Testimonial
                        </NavLink>

                        <NavLink
                            to=""
                            className={({ isActive }) => isActive ? "active-link" : "link"}
                        >
                            Help
                        </NavLink>

                    </nav>
                </div>

                <div className="header__content--right">
                    <div className="header__login--content">
                        <Link
                            className="btn__one"
                            to="/"
                        >
                            Sign In
                        </Link>

                        <Link
                            className="btn__one btn__one--border"
                            to="/"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>

            </header>
        </div>
    )

}

export default Navbar