import React, { Component } from 'react';

export default class SectionEvent extends Component {
    render() {

        return (

            <section className="events-section section-padding" id="events">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title">
                                <div className="vertical-line"><span><i className="fi flaticon-two"></i></span></div>
                                <h2>Wedding events</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-lg-10 col-lg-offset-1">
                            <div className="event">
                                <div className="img-holder">
                                    <img src={"../../../stylesheets/images/events/img-1.jpg"} alt className="img img-responsive" />
                                </div>
                                <div className="details">
                                    <h3>The reception</h3>
                                    <ul>
                                        <li><i className="fa fa-map-marker"></i> Gedung Achmad Sanusi UPI.</li>
                                        <li><i className="fa fa-clock-o"></i> Dec 28 2019, 11AM - 1PM</li>
                                    </ul>
                                    <p>Universitas Pendidikan Indonesia, Jalan Doktor Setiabudhi No. 229, Gegerkalong, Sukasari, Isola, Kec. Sukasari, Kota Bandung, Jawa Barat 40153. </p>
                                    <a className="see-location-btn popup-gmaps" href={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.2285877828854!2d107.59071564993596!3d-6.863186369030111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e695eca7270b%3A0xd235a025d5fd8b47!2sGedung%20Achmad%20Sanusi%20UPI!5e0!3m2!1sid!2sid!4v1576181642438!5m2!1sid!2sid"}>
                                        See location <i className="fa fa-angle-right"></i>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div> 
            </div>
        </section>

        )
    }
}