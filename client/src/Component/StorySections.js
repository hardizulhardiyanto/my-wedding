import React, { Component } from 'react';

export default class StorySections extends Component {
    render() {

        return (

            <section className="story-section section-padding" id="story">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title">
                                <div className="vertical-line"><span><i className="fi flaticon-two"></i></span></div>
                                <h2>Our love story</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="story-timeline">
                                <div className="row">
                                    <div className="col col-md-6">
                                        <div className="story-text right-align-text">
                                            <h3>First meet</h3>
                                            <span className="date">Jan 12 2017</span>
                                            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, </p>
                                        </div>
                                    </div>
                                    <div className="col col-md-6">
                                        <div className="img-holder">
                                            <img src={"../../../stylesheets/images/story/img-1.jpg"} alt className="img img-responsive" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-md-6">
                                        <div className="img-holder right-align-text story-slider">
                                            <img src={"../../../stylesheets/images/story/img-2.jpg"} alt className="img img-responsive" />
                                            <img src={"../../../stylesheets/images/story/img-3.jpg"} alt className="img img-responsive" />
                                        </div>
                                    </div>
                                    <div className="col col-md-6 text-holder">
                                        <span className="heart">
                                            <i className="fa fa-heart"></i>
                                        </span>
                                        <div className="story-text">
                                            <h3>First date</h3>
                                            <span className="date">Feb 14 2017</span>
                                            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-md-6 text-holder right-heart">
                                        <span className="heart">
                                            <i className="fa fa-heart"></i>
                                        </span>
                                        <div className="story-text right-align-text">
                                            <h3>Proposal</h3>
                                            <span className="date">Apr 14 2017</span>
                                            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, </p>
                                        </div>
                                    </div>
                                    <div className="col col-md-6">
                                        <div className="img-holder right-align-text story-slider">
                                            <img src={"../../../stylesheets/images/story/img-7.jpg"} alt className="img img-responsive" />
                                            <img src={"../../../stylesheets/images/story/img-5.jpg"} alt className="img img-responsive" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-md-6">
                                        <div className="img-holder video-holder">
                                            <img src={"../../../stylesheets/images/story/img-8.jpg"} alt className="img img-responsive" />
                                            <a href="https://www.youtube.com/embed/XSGBVzeBUbk?autoplay=1" data-type="iframe" className="video-play-btn">
                                                <i className="fa fa-play"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col col-md-6 text-holder">
                                        <span className="heart">
                                            <i className="fa fa-heart"></i>
                                        </span>
                                        <div className="story-text">
                                            <h3>Enagagement</h3>
                                            <span className="date">Jul 14 2017</span>
                                            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}