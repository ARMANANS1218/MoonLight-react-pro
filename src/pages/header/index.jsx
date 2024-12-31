import React, {useEffect, useRef} from 'react';
import './style.scss'
import mountainBehind from '../../assets/image/mountains_behind.png'
import mountainFront from '../../assets/image/mountains_front.png'
import stars from '../../assets/image/stars.png'
import moon from '../../assets/image/moon.png'

const Header = () => {
    const _moon = useRef(null)
    const _stars = useRef(null)
    const _front = useRef(null)
    const _behind = useRef(null)
    const _text = useRef(null)
    const _btn = useRef(null)
    const _header = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", function () {
            let value = window.scrollY;
            _stars.current.style.left = value * 0.25 + 'px';
            _moon.current.style.top = value * 1.05 + 'px';
            _behind.current.style.top = value * 0.3 + 'px';
            _front.current.style.top = value * 0 + 'px';
            _text.current.style.marginRight = value * 3.5 + 'px';
            _text.current.style.marginTop = value * 0.9 + 'px';
            _btn.current.style.marginTop = value * 1.1 + 'px';
            _header.current.style.top = value * 0.5 + 'px'
        })
    }, [])

    return (
        <div className='L-header'>
            <div
                ref={_header}
                className="L-header-container G-container G-flex G-justify-between">
                <p className='L-header-logo' href="#">Moonlight</p>
                <ul className='L-header-list G-flex '>
                    <li><a href="#" className='L-link-active'>Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className='L-header-backgrounds'>
                <div className="L-header-background-image L-star"
                     ref={_stars}
                     style={{backgroundImage: `url('${stars}')`}}
                />
                <div className="L-header-background-image L-moon"
                     ref={_moon}
                     style={{backgroundImage: `url('${moon}')`}}
                />
                <div
                    ref={_text}
                    className='L-header-title'>
                    <p>Moonlight</p>
                </div>
                <div
                    ref={_btn}
                    className='L-header-btn'>
                    <button>Explore</button>
                </div>
                <div
                    ref={_behind}
                    className="L-header-background-image L-mountain-behind"
                    style={{backgroundImage: `url('${mountainBehind}')`}}
                />
                <div
                    ref={_front}
                    className="L-header-background-image L-mountain-front"
                    style={{backgroundImage: `url('${mountainFront}')`}}
                />
            </div>
        </div>
    );
};

export default Header;
