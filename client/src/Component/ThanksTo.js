import React, { Component } from 'react';

export default class ThanksTo extends Component {
    render() {

        return (

            <section className="gift-registration-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title">
                                <div className="vertical-line"><span><i className="fi flaticon-two"></i></span></div>
                                <h2>Thanks To</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row content">
                        <div className="col col-lg-10 col-lg-offset-1">
                           
                            <div className="gif-registration-slider">
                                <div className="register">
                                    <img src={"../../../stylesheets/images/using/logo1.jpg"} alt className="img img-responsive" />
                                </div>
                                <div className="register">
                                    <img src={"../../../stylesheets/images/using/logo2.jpg"} alt className="img img-responsive" />
                                </div>
                                <div className="register">
                                    <img src={"../../../stylesheets/images/using/logo3.jpg"} alt className="img img-responsive" />
                                </div>
                                <div className="register">
                                    <img src={"../../../stylesheets/images/using/logo4.jpg"} alt className="img img-responsive" />
                                </div>
                                <div className="register">
                                    <img src={"../../../stylesheets/images/using/logo5.jpg"} alt className="img img-responsive" />
                                </div>
                                <div className="register">
                                    <img src={"../../../stylesheets/images/using/logo6.jpg"} alt className="img img-responsive" />
                                </div>
                                <div className="register">
                                    <img src={"../../../stylesheets/images/using/logo7.jpg"} alt className="img img-responsive" />
                                </div>
                                <div className="register">
                                    <img src={"../../../stylesheets/images/using/logo8.jpg"} alt className="img img-responsive" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}