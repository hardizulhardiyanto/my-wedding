import React, { Component } from 'react';

export default class StartHero extends Component {
    render() {

        return (

            <section className="hero">
                <div className="hero-slider hero-slider-s1">
                    <div className="slide-item">
                        <img src={'../../../stylesheets/images/using/new5.jpg'} alt="" className="slider-bg" />
                    </div>

                    <div className="slide-item">
                        <img src={'../../../stylesheets/images/using/new4.jpg'} alt="" className="slider-bg" />
                    </div>
                </div>
                <div className="wedding-announcement">
                    <div className="couple-name-merried-text">
                        <h2 className="wow slideInUp" data-wow-duration="1s">Hardi &amp; Resti</h2>

                        <div className="married-text wow fadeIn" data-wow-delay="1s">
                            <h4 className="">
                                <span className=" wow fadeInUp" data-wow-delay="1.05s">W</span>
                                <span className=" wow fadeInUp" data-wow-delay="1.10s">e</span>
                                <span>&nbsp;</span>
                                <span className=" wow fadeInUp" data-wow-delay="1.15s">i</span>
                                <span className=" wow fadeInUp" data-wow-delay="1.20s">n</span>
                                <span className=" wow fadeInUp" data-wow-delay="1.25s">v</span>
                                <span className=" wow fadeInUp" data-wow-delay="1.30s">i</span>
                                <span className=" wow fadeInUp" data-wow-delay="1.35s">t</span>
                                <span className=" wow fadeInUp" data-wow-delay="1.40s">e</span>
                                <span>&nbsp;</span>
                                <span className=" wow fadeInUp" data-wow-delay="1.45s">y</span>
                                <span className=" wow fadeInUp" data-wow-delay="1.50s">o</span>
                                <span className=" wow fadeInUp" data-wow-delay="1.55s">u</span>
                                <span>&nbsp;</span>
                                <span className=" wow fadeInUp" data-wow-delay="1.60s">t</span>
                                <span className=" wow fadeInUp" data-wow-delay="1.62s">o</span>
                                <span>&nbsp;</span>
                                <span className=" wow fadeInUp" data-wow-delay="1.63s">a</span>
                                <span className=" wow fadeInUp" data-wow-delay="1.64s">t</span>
                                <span className=" wow fadeInUp" data-wow-delay="1.65s">t</span>
                                <span className=" wow fadeInUp" data-wow-delay="1.66s">e</span>
                                <span className=" wow fadeInUp" data-wow-delay="1.67s">n</span>
                                <span className=" wow fadeInUp" data-wow-delay="1.68s">d</span>

                            </h4>
                        </div>
                        {/* <i className="fa fa-heart"></i> */}
                    </div>

                    <div className="save-the-date">
                        <h4>Save the date</h4>
                        <span className="date">28 DEC 2019</span>
                    </div>
                </div>
            </section>

        )
    }
}