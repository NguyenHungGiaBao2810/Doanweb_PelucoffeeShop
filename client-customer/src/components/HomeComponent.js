import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newprods: [],
            hotprods: [],
        };
    }
    render() {
        const newprods = this.state.newprods.map((item) => {
            return (
                <div key={item._id} className="inline">
                    <figure>
                        <Link to={"/product/" + item._id}>
                            <img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" />
                        </Link>
                        <figcaption className="text-center">
                            {item.name}
                            <br />
                            Price: {item.price}
                        </figcaption>
                    </figure>
                </div>
            );
        });
        const hotprods = this.state.hotprods.map((item) => {
            return (
                <div key={item._id} className="inline">
                    <figure>
                        <Link to={"/product/" + item._id}>
                            <img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" />
                        </Link>
                        <figcaption className="text-center">
                            {item.name}
                            <br />
                            Price: {item.price}
                        </figcaption>
                    </figure>
                </div>
            );
        });
        return (
            <div>
                <div className="align-center">
                    <img
                        src="https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        width="1000px"
                    />
                </div>

                <div className="align-center">
                    <h2 className="text-center">NEW PRODUCTS</h2>
                    {newprods}
                </div>
                {this.state.hotprods.length > 0 ? (
                    <div className="align-center">
                        <h2 className="text-center">HOT PRODUCTS</h2>
                        {hotprods}
                    </div>
                ) : (
                    <div />
                )}

                <footer class="footer">
                    <div class="container__footer">
                        <div class="footer__row">
                            <div class="footer__column">
                                <p class="footer__desc">Coffee shop & Pelu Bakery</p>
                            </div>

                            <div class="footer__column">
                                <h3 class="footer__heading">Support</h3>
                                <ul class="footer__list">
                                    <li class="footer__item">
                                        <a href="#!" class="footer__link">
                                            Help center
                                        </a>
                                    </li>

                                    <li class="footer__item">
                                        <a href="#!" class="footer__link">
                                            Account information
                                        </a>
                                    </li>

                                    <li class="footer__item">
                                        <a href="#!" class="footer__link">
                                            About
                                        </a>
                                    </li>

                                    <li class="footer__item">
                                        <a href="#!" class="footer__link">
                                            Contact us
                                        </a>
                                    </li>
                                </ul>

                                <h3 class="footer__heading">Support</h3>
                                <ul class="footer__list">
                                    <li class="footer__item">
                                        <a href="#!" class="footer__link">
                                            Help center
                                        </a>
                                    </li>

                                    <li class="footer__item">
                                        <a href="#!" class="footer__link">
                                            Account information
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="footer__column">
                                <h3 class="footer__heading">Support</h3>
                                <ul class="footer__list">
                                    <li class="footer__item">
                                        <a href="#!" class="footer__link">
                                            Help center
                                        </a>
                                    </li>

                                    <li class="footer__item">
                                        <a href="#!" class="footer__link">
                                            Account information
                                        </a>
                                    </li>
                                </ul>

                                <h3 class="footer__heading">Support</h3>
                                <ul class="footer__list">
                                    <li class="footer__item">
                                        <a href="#!" class="footer__link">
                                            Help center
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="footer__column">
                                <h3 class="footer__heading">Stay In Touch</h3>
                                <div class="footer__social">
                                    <a href="#!" class="footer__social-btn">
                                        <svg
                                            width="6"
                                            height="12"
                                            viewBox="0 0 6 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3.98981 11.9358V6.0302H5.76473L6 3.9517H3.98981L3.9928 2.91132C3.9928 2.3692 4.0477 2.07885 4.87783 2.07885H5.98755V0H4.21224C2.07977 0 1.32931 1.00825 1.32931 2.70405V3.95186H0V6.03055H1.32931V11.8521C1.84718 11.9489 2.38257 12 2.93075 12C3.28487 12 3.63863 11.9786 3.98981 11.9358Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>

                                    <a href="#!" class="footer__social-btn">
                                        <svg
                                            width="16"
                                            height="12"
                                            viewBox="0 0 16 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16 1.42062C15.405 1.66154 14.771 1.82123 14.11 1.89877C14.79 1.524 15.309 0.935077 15.553 0.225231C14.919 0.574154 14.219 0.820615 13.473 0.958154C12.871 0.366462 12.013 0 11.077 0C9.261 0 7.799 1.36062 7.799 3.02862C7.799 3.26862 7.821 3.49938 7.875 3.71908C5.148 3.59631 2.735 2.38985 1.114 0.552C0.831 1.00523 0.665 1.524 0.665 2.08246C0.665 3.13108 1.25 4.06062 2.122 4.59877C1.595 4.58954 1.078 4.44831 0.64 4.22585C0.64 4.23508 0.64 4.24708 0.64 4.25908C0.64 5.73046 1.777 6.95262 3.268 7.23415C3.001 7.30154 2.71 7.33385 2.408 7.33385C2.198 7.33385 1.986 7.32277 1.787 7.28215C2.212 8.48123 3.418 9.36277 4.852 9.39138C3.736 10.1972 2.319 10.6828 0.785 10.6828C0.516 10.6828 0.258 10.6717 0 10.6412C1.453 11.5062 3.175 12 5.032 12C11.068 12 14.368 7.38462 14.368 3.384C14.368 3.25015 14.363 3.12092 14.356 2.99262C15.007 2.56615 15.554 2.03354 16 1.42062Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>

                                    <a href="#!" class="footer__social-btn">
                                        <svg
                                            width="13"
                                            height="12"
                                            viewBox="0 0 13 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0 1.39394C0 0.989891 0.146401 0.656558 0.439189 0.393939C0.731978 0.131309 1.11262 0 1.58108 0C2.04119 0 2.41344 0.129285 2.69788 0.387879C2.99066 0.654545 3.13707 1.00201 3.13707 1.4303C3.13707 1.81818 2.99486 2.14141 2.71042 2.4C2.41764 2.66667 2.03282 2.8 1.55598 2.8H1.54344C1.08333 2.8 0.711072 2.66667 0.426641 2.4C0.142209 2.13333 0 1.79798 0 1.39394ZM0.163127 12V3.90303H2.94884V12H0.163127ZM4.49228 12H7.27799V7.47879C7.27799 7.19595 7.31146 6.97777 7.37838 6.82424C7.49549 6.54949 7.67326 6.31716 7.91168 6.12727C8.1501 5.93737 8.44916 5.84242 8.80888 5.84242C9.74582 5.84242 10.2143 6.45252 10.2143 7.67273V12H13V7.35758C13 6.16161 12.7072 5.25455 12.1216 4.63636C11.536 4.01818 10.7622 3.70909 9.80019 3.70909C8.72104 3.70909 7.88031 4.15758 7.27799 5.05455V5.07879H7.26544L7.27799 5.05455V3.90303H4.49228C4.509 4.16161 4.51737 4.96565 4.51737 6.31515C4.51737 7.66464 4.509 9.55959 4.49228 12Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                </div>

                                <h3 class="footer__heading">Subscribe</h3>
                                <p class="footer__desc">
                                    Subscribe our newsletter for the latest update of Pelu Coffee
                                </p>
                            </div>
                        </div>

                        <div class="footer__copyright">
                            <p class="footer__copyright-text">2021 GDN. Copyright and All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
    componentDidMount() {
        this.apiGetNewProducts();
        this.apiGetHotProducts();
    }
    // apis
    apiGetNewProducts() {
        axios.get("/api/customer/products/new").then((res) => {
            const result = res.data;
            this.setState({ newprods: result });
        });
    }
    apiGetHotProducts() {
        axios.get("/api/customer/products/hot").then((res) => {
            const result = res.data;
            this.setState({ hotprods: result });
        });
    }
}
export default Home;
