import { Link } from "react-router-dom"
import './header.css'
export const Header = () => {







    return (
        <>
            <header className="main-header">
                <nav className="main-nav">
                    <ul className="header-nav-list">
                        <li><Link  className="nav-list-link"  to={'/'} >Home</Link></li>
                        <li><Link  className="nav-list-link" to={'/products'} >Product</Link></li>
                        <li><Link  className="nav-list-link" to={'/about'} >About</Link></li>
                    </ul>
                </nav>
                <div className="header-id">
                   <i> <p className  ="user-name" >Nikhil</p></i>
                    <img className="profile-pic" src = {require('../../assets/profile/profile.jpg')} alt="" />
                </div>
            </header>
        </>
    )
}