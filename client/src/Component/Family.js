import React, { Component } from 'react';

export default class Family extends Component {
    render() {

        return (
            <div className="container">
                <br />
                <div className="row">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <span style={{ fontFamily: "Great Vibes", fontSize: "22px" }}>Hormat Kami</span>
                    </div>


                    <table style={{ width: "100%" }}>
                        <tr>
                            <th>Mempelai Wanita</th>
                            <th style={{

                                float: "right"
                            }}>Mempelai Pria</th>
                        </tr>
                        <tr>
                            <td style={{ fontFamily: "Great Vibes", fontSize: "16px" }}>Kel. Bpk. M. Soleh P</td>

                            <td style={{ fontFamily: "Great Vibes", float: "right", fontSize: "16px" }}>Kel. Bpk. Sumartono</td>

                        </tr>
                        <tr>
                            <td style={{ fontFamily: "Great Vibes", fontSize: "16px" }}>Ibu Endang Resmala</td>
                            <td style={{ fontFamily: "Great Vibes", float: "right", fontSize: "16px" }}>Ibu Tatty Widhiastuti</td>

                        </tr>

                    </table>
                    <br />
                </div>
            </div>












        )
    }
}