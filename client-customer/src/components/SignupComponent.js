import axios from "axios";
import React, { Component } from "react";
import "../styles.css";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: "",
            txtPassword: "",
            txtName: "",
            txtPhone: "",
            txtEmail: "",
            showPassword: false, // Thêm state để theo dõi xem mật khẩu có được hiển thị hay không
        };
    }
    render() {
        const { showPassword } = this.state;

        return (
            <div className="container">
                <div className="left">
                    <div className="header">
                        <h2>Welcome to PeluBakery & Coffee</h2>
                        <h4>Please Registration</h4>
                    </div>

                    <div className="input">
                        <input
                            type="text"
                            placeholder="UserName"
                            value={this.state.txtUsername}
                            onChange={(e) => this.setState({ txtUsername: e.target.value })}
                            required
                        />
                        <i icon="fa-solid fa-user" />
                    </div>

                    <div className="input">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={this.state.txtPassword}
                            onChange={(e) => this.setState({ txtPassword: e.target.value })}
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

                    <div className="input">
                        <input
                            type="text"
                            placeholder="Name"
                            value={this.state.txtName}
                            onChange={(e) => this.setState({ txtName: e.target.value })}
                            required
                        />
                    </div>

                    <div className="input">
                        <input
                            type="tel"
                            placeholder="Phone"
                            value={this.state.txtPhone}
                            onChange={(e) => this.setState({ txtPhone: e.target.value })}
                            required
                        />
                    </div>

                    <div className="input">
                        <input
                            type="email"
                            placeholder="Email"
                            value={this.state.txtEmail}
                            onChange={(e) => this.setState({ txtEmail: e.target.value })}
                            required
                        />
                    </div>

                    <div className="btn">
                        <button onClick={(e) => this.btnSignupClick(e)}>Sign Up</button>
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
    // event-handlers
    btnSignupClick(e) {
        e.preventDefault();
        const username = this.state.txtUsername;
        const password = this.state.txtPassword;
        const name = this.state.txtName;
        const phone = this.state.txtPhone;
        const email = this.state.txtEmail;
        if (username && password && name && phone && email) {
            const account = { username: username, password: password, name: name, phone: phone, email: email };
            this.apiSignup(account);
        } else {
            alert("Please input username and password and name and phone and email");
        }
    }

    // apis
    apiSignup(account) {
        axios.post("/api/customer/signup", account).then((res) => {
            const result = res.data;
            alert(result.message);
        });
    }

    toggleShowPassword = () => {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword,
        }));
    };
}
export default Signup;
