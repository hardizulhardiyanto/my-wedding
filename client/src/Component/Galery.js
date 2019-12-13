import React, { Component } from 'react';

export default class Galery extends Component {
    render() {

        return (

            <section className="gallery-section section-padding" id="gallery">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title">
                                <div className="vertical-line"><span><i className="fi flaticon-two"></i></span></div>
                                <h2>Our gallery</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-filters">
                                <ul>
                                    <li><a data-filter="*" href="#" className="current">All</a></li>
                                    <li><a data-filter=".wedding" href="#">Wedding</a></li>
                                    <li><a data-filter=".ceremony" href="#">Ceremony</a></li>
                                    <li><a data-filter=".party" href="#">Party</a></li>
                                </ul>
                            </div>

                            <div className="gallery-container gallery-fancybox masonry-gallery">
                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/gallery/img-1.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/gallery/img-1.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid wedding ceremony">
                                    <a href={"../../../stylesheets/images/gallery/img-2.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/gallery/img-2.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid ceremony eudcation">
                                    <a href={"../../../stylesheets/images/gallery/img-3.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/gallery/img-3.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid wedding party">
                                    <a href={"../../../stylesheets/images/gallery/img-4.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/gallery/img-4.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid ceremony">
                                    <a href={"../../../stylesheets/images/gallery/img-5.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/gallery/img-5.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid party">
                                    <a href={"../../../stylesheets/images/gallery/img-6.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/gallery/img-6.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/gallery/img-7.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/gallery/img-7.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid ceremony">
                                    <a href={"https://www.youtube.com/embed/XSGBVzeBUbk?autoplay=1"} data-type="iframe" className="video-play-btn">
                                        <img src={"../../../stylesheets/images/gallery/img-8.jpg"} alt className="img img-responsive" />
                                        <i className="fa fa-play"></i>
                                    </a>

                                </div>
                                <div className="grid ceremony">
                                    <a href={"../../../stylesheets/images/gallery/img-9.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/gallery/img-9.jpg"} alt className="img img-responsive" />
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