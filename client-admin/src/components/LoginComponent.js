import axios from "axios";
import React, { Component } from "react";
import MyContext from "../contexts/MyContext";
import "../styles.css";

class Login extends Component {
    static contextType = MyContext; // using this . context to access global state

    constructor(props) {
        super(props);
        this.state = {
            txtUsername: "",
            txtPassword: "",
            showPassword: false, // Thêm state để theo dõi xem mật khẩu có được hiển thị hay không
        };
    }
    render() {
        const { showPassword } = this.state;

        if (this.context.token === "") {
            return (
                <div className="container">
                    <div className="left">
                        <div className="header">
                            <h2>Welcome to Admin's PeluBakery & Coffee</h2>
                            <h4>Please Login</h4>
                        </div>
                        <div className="input">
                            <input
                                type="text"
                                placeholder="User Name"
                                value={this.state.txtUsername}
                                onChange={(e) => this.handleInputChange("txtUsername", e.target.value)}
                                required
                            />
                            <i icon="fa-solid fa-user" />
                        </div>
                        <div className="input">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={this.state.txtPassword}
                                onChange={(e) => this.handleInputChange("txtPassword", e.target.value)}
                                required
                            />
                            <i className="fa-solid fa-lock"></i>
                            <span
                                onClick={this.toggleShowPassword}
                                style={{
                                    marginLeft: "-25px",
                                    position: "absolute",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    cursor: "pointer",
                                }}
                            >
                                {showPassword ? "👁️‍🗨️" : "👁️‍🗨️"}
                            </span>
                        </div>
                        <div className="forget">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                        </div>
                        <div className="btn">
                            <button onClick={(e) => this.btnLoginClick(e)}>Sign in</button>
                        </div>
                    </div>
                    <div className="right">
                        {/* You can replace the following line with your image source */}
                        <img
                            src="https://img.freepik.com/free-vector/christmas-background-design_1282-50.jpg?size=626&ext=jpg"
                            alt="Avatar"
                        />
                    </div>
                </div>
            );
        }
        return <div />;
    }

    // event-handlers
    btnLoginClick(e) {
        e.preventDefault();
        const username = this.state.txtUsername;
        const password = this.state.txtPassword;
        if (username && password) {
            const account = { username: username, password: password };
            this.apiLogin(account);
        } else {
            alert("Please input username and password");
        }
    }

    handleInputChange(name, value) {
        this.setState({
            [name]: value,
        });
    }

    // apis
    apiLogin(account) {
        axios.post("/api/admin/login", account).then((res) => {
            const result = res.data;
            if (result.success === true) {
                this.context.setToken(result.token);
                this.context.setUsername(account.username);
            } else {
                alert(result.message);
            }
        });
    }

    toggleShowPassword = () => {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword,
        }));
    };
}
export default Login;
