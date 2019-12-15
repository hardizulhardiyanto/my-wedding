import React, { Component } from 'react';

export default class Section extends Component {
    render() {

        return (

            <section className="wedding-couple-section section-padding" id="couple">
                <div className="container">
                    <div className="row">

                        <div className="gb bride">                         
                            <div className="details">
                                <div className="details-inner">
                                    <h3>The bride</h3>
                                    <p><i>“Marrying someone who Loves ALLAH, will show you more about your future than anything else you’ll hear or see.”</i></p>
                                    <span className="signature">Resti Gamiarsi</span>
                                    <ul className="social-links">
                                        <li><a href="https://www.instagram.com/rgamiarsi/"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <img src={"../../../stylesheets/images/using/new2.jpg"} alt="" className="img-holder wow fadeInRightSlow" />
                            </div>
                        </div>

                        <div className="col col-xs-12">
                            <div className="gb groom">
                                <div>
                                    <img src={'../../../stylesheets/images/using/new1.jpg'} alt="" className="img-holder wow fadeInLeftSlow" />
                                </div>
                                <div className="details">
                                    <div className="details-inner">
                                        <h3>The groom</h3>
                                        <p><i>“True love doesn’t end at death. If Allah wills it, it’ll continue in Jannah.”</i></p>
                                        <span className="signature">Achmad Zulhardiyanto</span>
                                        <ul className="social-links">
                                            <li><a href="https://www.instagram.com/zulhardiyanto/?hl=id"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
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