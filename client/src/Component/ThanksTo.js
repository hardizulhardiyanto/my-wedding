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
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, cupiditate, repudiandae. A ab sit laboriosam quis distinctio dignissimos, nemo cum sed hic, deleniti maiores rem iste labore commodi perferendis cumque.repudiandae. A ab sit laboriosam quis distinctio dignissimos, nemo cum sed hic.</p>

                            <div className="gif-registration-slider">
                                <div className="register">
                                    <img src={"../../../stylesheets/images/gift/img-1.jpg"} alt className="img img-responsive" />
                                </div>
                                <div className="register">
                                    <img src={"../../../stylesheets/images/gift/img-2.jpg"} alt className="img img-responsive" />
                                </div>
                                <div className="register">
                                    <img src={"../../../stylesheets/images/gift/img-3.jpg"} alt className="img img-responsive" />
                                </div>
                                <div className="register">
                                    <img src={"../../../stylesheets/images/gift/img-1.jpg"} alt className="img img-responsive" />
                                </div>
                                <div className="register">
                                    <img src={"../../../stylesheets/images/gift/img-2.jpg"} alt className="img img-responsive" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}