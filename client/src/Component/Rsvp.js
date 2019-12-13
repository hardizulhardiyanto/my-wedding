import React, { Component } from 'react';

export default class Rsvp extends Component {
    render() {

        return (

            <section className="rsvp-section section-padding parallax" data-bg-image={"../../../stylesheets/images/rsvp-bg.jpg"} data-speed="7" id="rsvp">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title-white">
                                <div className="vertical-line"><span><i className="fi flaticon-two"></i></span></div>
                                <h2>Join our party</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row content">
                        <div className="col col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <p>Please reserve before December 16th, 2017.</p>
                            <form id="rsvp-form" className="form validate-rsvp-form row" method="post">
                                <div className="col col-sm-6">
                                    <input type="text" name="name" className="form-control" placeholder="Your Name*" />
                                </div>
                                <div className="col col-sm-6">
                                    <input type="email" name="email" className="form-control" placeholder="Your Email*" />
                                </div>
                                <div className="col col-sm-6">
                                    <select className="form-control" name="guest" >
                                        <option disabled selected>Number Of Guest*</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                                <div className="col col-sm-6">
                                    <select className="form-control" name="events" >
                                        <option disabled selected>I Am Attending*</option>
                                        <option>Al events</option>
                                        <option>Wedding ceremony</option>
                                        <option>Reception party</option>
                                    </select>
                                </div>
                                <div className="col col-sm-12">
                                    <textarea className="form-control" name="notes" placeholder="Your Message*"></textarea>
                                </div>
                                <div className="col col-sm-12 submit-btn">
                                    <button type="submit" className="submit">Send Invitation</button>
                                    <span id="loader"><i className="fa fa-refresh fa-spin fa-3x fa-fw"></i></span>
                                </div>
                                <div className="col col-md-12 success-error-message">
                                    <div id="success">Thank you</div>
                                    <div id="error"> Error occurred while sending email. Please try again later. </div>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </section>

        )
    }
}