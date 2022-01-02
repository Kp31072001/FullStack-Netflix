import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                    <span>HomePage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>News and popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <SearchIcon className='icon'/>
                    <span>KID</span>
                    <NotificationsIcon className='icon'/>
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQGj6BI_3rWvcw/profile-displayphoto-shrink_200_200/0/1623190098921?e=1645056000&v=beta&t=_lMGguXKK23ihYwyHC2XmbIWQPCP-R1xyN4VYuHJ7Wc" alt="" />
                    <div className="profile">
                        <ArrowDropDownIcon className='icon'/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
