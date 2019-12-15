import React, { Component } from 'react';

export default class TextToThanks extends Component {
    render() {

        return (
            <footer className="site-footer">
                <div className="back-to-top">
                    <a href={"#"} className="back-to-top-btn"><span><i className="fi flaticon-cupid"></i></span></a>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <h2>Forever and Always Our Love</h2>
                            
                            <span style={{ fontFamily:"Great Vibes", fontSize:"30px" }}>Achmad Zulhardiyanto</span>
                            
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}