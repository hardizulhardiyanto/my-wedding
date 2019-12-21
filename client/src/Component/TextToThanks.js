import React, { Component } from 'react';


export default class TextToThanks extends Component {
    render() {

        return (
            <div>

                <footer className="site-footer">
                    <div className="back-to-top">
                        <a href={"#"} className="back-to-top-btn"><span><i className="fi flaticon-cupid"></i></span></a>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col col-xs-12">
                                <div className="row">
                                    <br />

                                    {/* <span style={{ fontFamily: "Great Vibes", fontSize: "30px", margin: '40rem', left: '10' }}>Drs Sumartono</span>
                                    <span style={{ fontFamily: "Great Vibes", fontSize: "30px" }}>Taty</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        )
    }
}