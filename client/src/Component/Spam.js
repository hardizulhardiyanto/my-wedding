import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';




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

                        </div>
                    </div>


                </footer>

                <Container>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <span className="signature">Resti Gamiarsi</span>
                    </div>
                    <Row className="justify-content-md-center">
                        <Col xs lg="2">
                            1 of 3
                        </Col>
                        <Col md="auto">Variable width content</Col>
                        <Col xs lg="2">
                            3 of 3
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}