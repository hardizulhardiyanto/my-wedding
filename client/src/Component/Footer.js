import React, { Component } from 'react';

export default class Footer extends Component {
    render() {

        return (
            <footer style={{ backgroundColor: "black" }}>
                <div className="footer-copyright text-center py-3" style={{ marginT:3 }}>
                    <text style={{ color: "white" }}>© 2019 Copyright:</text>
                    <a href={"https://www.linkedin.com/in/achmad-zulhardiyanto-a7641312b"}>  Zulhardiyanto's.com</a>
                </div>
            </footer>

        )
    }
}