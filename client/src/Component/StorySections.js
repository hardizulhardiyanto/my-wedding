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
                                            <h3>First Meet</h3>
                                            <span className="date">2013</span>
                                            <p style={{ fontFamily:"Great Vibes", fontSize:"30px" }}>“When we first met, I honestly had no idea that you would be so important to me.”</p>
                                        </div>
                                    </div>
                                    <div className="col col-md-6">
                                        <div className="img-holder">
                                            <img src={"../../../stylesheets/images/using/firstMeet.jpg"} alt className="img img-responsive" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-md-6">
                                        <div className="img-holder right-align-text">
                                            <img src={"../../../stylesheets/images/using/firstDate.jpg"} alt className="img img-responsive" />
                                        </div>
                                    </div>
                                    <div className="col col-md-6 text-holder">
                                        <span className="heart">
                                            <i className="fa fa-heart"></i>
                                        </span>
                                        <div className="story-text">
                                            <h3>First Date</h3>
                                            <span className="date">2016</span>
                                            <p style={{ fontFamily:"Great Vibes", fontSize:"30px" }}>“Being in a relationship isn’t about the kissing, the dates or the showing off. It’s about being with someone who makes you happy in a way that no one else can.”</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-md-6 text-holder right-heart">
                                        <span className="heart">
                                            <i className="fa fa-heart"></i>
                                        </span>
                                        <div className="story-text right-align-text">
                                            <h3>Marriage</h3>
                                            <span className="date">Aug 18 2019</span>
                                            <p style={{ fontFamily:"Great Vibes", fontSize:"30px" }}>“A great marriage is not when the perfect couple comes together. It is when an imperfect couple learns to enjoy their differences.”</p>
                                        </div>
                                    </div>
                                    <div className="col col-md-6">
                                        <div className="img-holder right-align-text">
                                            <img src={"../../../stylesheets/images/using/engaged.jpg"} alt className="img img-responsive" />
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