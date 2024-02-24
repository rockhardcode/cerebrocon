import { Component } from "react";
import "./NavbarStyles.css";
// import {Link} from "react-router-dom"
import { Menuitems } from "./Menuitems";
import { Link } from "react-router-dom";

class Navbar extends Component{
    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">CerebroCon</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                        {Menuitems.map((item) => {
                        return  <li key={item.title}><Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link></li> 
                        })}
                </ul>
            </nav>
        )
    }
}
export default Navbar