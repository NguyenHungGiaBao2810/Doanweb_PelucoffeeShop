import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyContext from "../contexts/MyContext";

class Menu extends Component {
    static contextType = MyContext; // using this . context to access global state
    render() {
        return (
            <div className="border-bottom">
                <div className="float-left">
                    <ul className="menu">
                        <li className="menu">
                            <Link to="/admin/home"> Home </Link>
                        </li>
                        <li className="menu">
                            <Link to="/admin/category"> Category </Link>
                        </li>
                        <li className="menu">
                            <Link to="/admin/product"> Product </Link>
                        </li>
                        <li className="menu">
                            <Link to="/admin/order">Order</Link>
                        </li>
                        <li className="menu">
                            <Link to="/admin/customer">Customer</Link>
                        </li>
                    </ul>
                </div>
                <div className="float-right">
                    Hello <b>{this.context.username}</b> |
                    <Link to="/admin/home" onClick={() => this.lnkLogoutClick()}>
                        Logout
                    </Link>
                </div>

                <div style={{ display: "inline" }} className="form-switch">
                    <input className="form-check-input" type="checkbox" onChange={(e) => this.ckbChangeMode(e)} />
                    &nbsp; Light / Dark mode
                </div>

                <div className="float-clear" />
            </div>
        );
    }

    // event-handlers
    lnkLogoutClick() {
        this.context.setToken("");
        this.context.setUsername("");
    }

    ckbChangeMode(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute("data-bs-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-bs-theme", "light");
        }
    }
}
export default Menu;
