
import React from 'react'
import { Link } from 'react-router-dom';

import Image01 from '../assets/images/Image__01.png';
import Image02 from '../assets/images/Image__02.png';
import Image03 from '../assets/images/Image__03.png';

import { ReactComponent as UserSVG } from '../assets/icons/icon__user.svg';
import { ReactComponent as LocationsSVG } from '../assets/icons/icon__location.svg';
import { ReactComponent as SquareSVG } from '../assets/icons/icon__square.svg';
import { ReactComponent as CheckSVG } from '../assets/icons/icon__circle--check.svg';

const Home = () => {

    return (
        <>
            <div className="container__section--two">
                <div className="home__content">
                    <div className="home__content--left">
                        <h3 className="home__content--title">Want anything to be easy with <strong>LaslesVPN</strong></h3>
                        <p className="home__content--description">Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
                        <div className="home__content--action">
                            <Link
                                className="btn__two btn__two--primary"
                                to="/"
                            >
                                Get started
                            </Link>
                        </div>
                    </div>
                    <div className="home__content--right">
                        <img src={Image01} alt="Image01" className="home__image01" />
                    </div>
                </div>
            </div>

            <div className="container__section--three">
                <div className="home__content">

                    <div className="home__content--item">
                        <div className="home__content--icon">
                            <UserSVG className="home__icon" />
                        </div>
                        <div className="home__content--description">
                            <p>90+</p>
                            <p>Users</p>
                        </div>
                    </div>

                    <div className="separator-vertical" />
                    
                    <div className="home__content--item">
                        <div className="home__content--icon">
                            <LocationsSVG className="home__icon" />
                        </div>
                        <div className="home__content--description">
                            <p>30+</p>
                            <p>Locations</p>
                        </div>
                    </div>

                    <div className="separator-vertical" />
                    
                    <div className="home__content--item">
                        <div className="home__content--icon">
                            <SquareSVG className="home__icon" />
                        </div>
                        <div className="home__content--description">
                            <p>90+</p>
                            <p>Servers</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container__section--four">
                <div className="home__content">
                    
                    <div className="home__content--left">
                        <img src={Image02} alt="Image02" className="home__image02" />
                    </div>

                    <div className="home__content--right">
                        <div className="home__content--title">
                            <h3>We provide many features you can use</h3>
                        </div>
                        <div className="home__content--description">
                            <p>Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
                        </div>
                        <div className="home__content--checks">

                            <div className="home__content--item">
                                <div className='home__content--icon'>
                                    <CheckSVG className="home__icon" />
                                </div>
                                <div className="home__content--text">
                                    <p>Powerfull online protection.</p>
                                </div>
                            </div>
                            <div className="home__content--item">
                                <div className='home__content--icon'>
                                    <CheckSVG className="home__icon" />
                                </div>
                                <div className="home__content--text">
                                    <p>Internet with borders</p>
                                </div>
                            </div>
                            <div className="home__content--item">
                                <div className='home__content--icon'>
                                    <CheckSVG className="home__icon" />
                                </div>
                                <div className="home__content--text">
                                    <p>Supercharged VPN</p>
                                </div>
                            </div>
                            <div className="home__content--item">
                                <div className='home__content--icon'>
                                    <CheckSVG className="home__icon" />
                                </div>
                                <div className="home__content--text">
                                    <p>No specific time limits</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="container__section--five">
                <div className="home__content">

                    <div className="home__content--firt">
                        <div className="home__content--title">
                            <h3>Choose your plan</h3>
                        </div>
                        <div className="home__content--description">
                            <p>Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
                        </div>
                    </div>

                    <div className="home__content--second">

                        <div className="home__content--plan">

                            <div className="home__content--image">
                                <img src={Image03} alt="Image03" className="home__image03" />
                            </div>
                            <div className="home__content--title">
                                <h4>Free</h4>
                            </div>
                            <div className="home__content--checks">

                                <div className="home__content--item">
                                    <div className='home__content--icon'>
                                        <CheckSVG className="home__icon" />
                                    </div>
                                    <div className="home__content--text">
                                        <p>Unlimited bandwitch</p>
                                    </div>
                                </div>

                                <div className="home__content--item">
                                    <div className='home__content--icon'>
                                        <CheckSVG className="home__icon" />
                                    </div>
                                    <div className="home__content--text">
                                        <p>Encrypted connection</p>
                                    </div>
                                </div>

                                <div className="home__content--item">
                                    <div className='home__content--icon'>
                                        <CheckSVG className="home__icon" />
                                    </div>
                                    <div className="home__content--text">
                                        <p>Yes trafic logs</p>
                                    </div>
                                </div>

                            </div>
                            <div className="home__content--costs">
                                <p>Free</p>
                            </div>
                            <div className="home__content--buy">
                                <Link
                                    className="btn__three btn__three--primary"
                                    to="/"
                                >
                                    Select
                                </Link>
                            </div>

                        </div>

                        <div className="home__content--plan">

                            <div className="home__content--image">
                                <img src={Image03} alt="Image03" className="home__image03" />
                            </div>
                            <div className="home__content--title">
                                <h4>Standard plan</h4>
                            </div>
                            <div className="home__content--checks">

                                <div className="home__content--item">
                                    <div className='home__content--icon'>
                                        <CheckSVG className="home__icon" />
                                    </div>
                                    <div className="home__content--text">
                                        <p>Unlimited bandwitch</p>
                                    </div>
                                </div>

                                <div className="home__content--item">
                                    <div className='home__content--icon'>
                                        <CheckSVG className="home__icon" />
                                    </div>
                                    <div className="home__content--text">
                                        <p>Encrypted connection</p>
                                    </div>
                                </div>

                                <div className="home__content--item">
                                    <div className='home__content--icon'>
                                        <CheckSVG className="home__icon" />
                                    </div>
                                    <div className="home__content--text">
                                        <p>Yes trafic logs</p>
                                    </div>
                                </div>

                                <div className="home__content--item">
                                    <div className='home__content--icon'>
                                        <CheckSVG className="home__icon" />
                                    </div>
                                    <div className="home__content--text">
                                        <p>Works on all devices</p>
                                    </div>
                                </div>

                                <div className="home__content--item">
                                    <div className='home__content--icon'>
                                        <CheckSVG className="home__icon" />
                                    </div>
                                    <div className="home__content--text">
                                        <p>Connect anyware</p>
                                    </div>
                                </div>

                            </div>
                            <div className="home__content--costs">
                                <p>$9 / <span>mo</span></p>
                            </div>
                            <div className="home__content--buy">
                                <Link
                                    className="btn__three btn__three--primary"
                                    to="/"
                                >
                                    Select
                                </Link>
                            </div>

                        </div>

                        <div className="home__content--plan">

                            <div className="home__content--image">
                                <img src={Image03} alt="Image03" className="home__image03" />
                            </div>
                            <div className="home__content--title">
                                <h4>Premium plan</h4>
                            </div>
                            <div className="home__content--checks">

                                <div className="home__content--item">
                                    <div className='home__content--icon'>
                                        <CheckSVG className="home__icon" />
                                    </div>
                                    <div className="home__content--text">
                                        <p>Unlimited bandwitch</p>
                                    </div>
                                </div>

                                <div className="home__content--item">
                                    <div className='home__content--icon'>
                                        <CheckSVG className="home__icon" />
                                    </div>
                                    <div className="home__content--text">
                                        <p>Encrypted connection</p>
                                    </div>
                                </div>

                                <div className="home__content--item">
                                    <div className='home__content--icon'>
                                        <CheckSVG className="home__icon" />
                                    </div>
                                    <div className="home__content--text">
                                        <p>Yes trafic logs</p>
                                    </div>
                                </div>

                                <div className="home__content--item">
                                    <div className='home__content--icon'>
                                        <CheckSVG className="home__icon" />
                                    </div>
                                    <div className="home__content--text">
                                        <p>Works on all devices</p>
                                    </div>
                                </div>

                                <div className="home__content--item">
                                    <div className='home__content--icon'>
                                        <CheckSVG className="home__icon" />
                                    </div>
                                    <div className="home__content--text">
                                        <p>Connect anyware</p>
                                    </div>
                                </div>

                                <div className="home__content--item">
                                    <div className='home__content--icon'>
                                        <CheckSVG className="home__icon" />
                                    </div>
                                    <div className="home__content--text">
                                        <p>Get new features</p>
                                    </div>
                                </div>

                            </div>
                            <div className="home__content--costs">
                                <p>$12 / <span>mo</span></p>
                            </div>
                            <div className="home__content--buy">
                                <Link
                                    className="btn__three btn__three--primary"
                                    to="/"
                                >
                                    Select
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </>
    )

}

export default Home;