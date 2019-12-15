import React, { Component } from 'react';

export default class CountDown extends Component {

    render() {


        return (
            <section className="count-down-section section-padding parallax" data-bg-image="images/countdown-bg.jpg" data-speed="7">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-4">
                            <h2><span>We are waiting for.....</span> The adventure</h2>
                        </div>
                        <div className="col col-md-7 col-md-offset-1">
                            <div className="count-down-clock">
                                <div id="countdown">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}