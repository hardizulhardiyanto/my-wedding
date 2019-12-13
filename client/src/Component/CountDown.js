import React, { Component } from 'react';

export default class CountDown extends Component {

    render() {


        return (
            <section class="count-down-section section-padding parallax" data-bg-image="images/countdown-bg.jpg" data-speed="7">
                <div class="container">
                    <div class="row">
                        <div class="col col-md-4">
                            <h2><span>We are waiting for.....</span> The adventure</h2>
                        </div>
                        <div class="col col-md-7 col-md-offset-1">
                            <div class="count-down-clock">
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