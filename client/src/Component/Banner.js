import React, { Component } from 'react';

export default class Banner extends Component {
    render() {

        return (

            <div className="banner">

                <div className="header-w3layouts">


                    <div className="container">
                        <div className="header-bar">
                            <nav className="navbar navbar-default">
                                <div className="navbar-header navbar-left">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                        data-target="#bs-example-navbar-collapse-1">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <h1><a className="navbar-brand" href="index.html">BLI<span>SS</span>FUL</a></h1>
                                </div>

                                <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
                                    <Navbar>
                                        <ul className="nav navbar-nav">
                                            <li className="active"><a href="index.html">Home</a></li>
                                            <li><a href="#about" className="scroll">About</a></li>
                                            <li><a href="#services" className="scroll">Services</a></li>
                                            <li><a href="#blog" className="scroll">Blog</a></li>
                                            <li><a href="#gallery" className="scroll">Gallery</a></li>
                                            <li><a href="#team" className="scroll">Team</a></li>
                                            <li><a href="#contact" className="scroll">Contact</a></li>
                                        </ul>
                                    </Navbar>



                                </div>
                            </nav>
                        </div>

                        <div className="clearfix"> </div>

                    </div>

                </div>
                <div className="container">

                    <div className="slider">
                        <div className="callbacks_container w3l">
                            <ul className="rslides" id="slider">
                                <li>

                                    <div className="slider-info">
                                        <h4>Happy Couples For Ever</h4>
                                        <p>Lorem ipsum dolor sit,</p>

                                    </div>
                                </li>
                                <li>

                                    <div className="slider-info">
                                        <h4>The Best Day In Our Lives </h4>
                                        <p>Quis autem vel eum quivol.</p>
                                    </div>
                                </li>
                            </ul>

                        </div>
                        <div className="clearfix"></div>

                    </div>

                </div>
            </div>
        )
    }
}