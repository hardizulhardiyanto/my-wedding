import React, { Component } from 'react';

export default class Section extends Component {
    render() {

        return (

            <section className="wedding-couple-section section-padding" id="couple">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="gb groom">
                                <div>
                                    <img src={'../../../stylesheets/images/using/new1.jpg'} alt="" className="img-holder wow fadeInLeftSlow" />
                                </div>
                                <div className="details">
                                    <div className="details-inner">
                                        <h3>The groom</h3>
                                        <p>Hi I am suntina , dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                        <span className="signature">Achmad Zulhardiyanto</span>
                                        <ul className="social-links">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="gb bride">
                                <div className="details">
                                    <div className="details-inner">
                                        <h3>The Bridge</h3>
                                        <p>Hi I am suntina , dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                        <span className="signature">Resti Gamiarsi</span>
                                        <ul className="social-links">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <img src={"../../../stylesheets/images/using/new2.jpg"} alt="" className="img-holder wow fadeInRightSlow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}