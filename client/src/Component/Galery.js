import React, { Component } from 'react';



export default class Galery extends Component {




    render() {
        var mql = window.matchMedia("screen and (min-width: 800px)")

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

                            {mql.matches ?
                                <div className="gallery-filters">
                                    <ul>
                                        <li><a data-filter="*" href="#" className="current">All</a></li>
                                        <li><a data-filter=".wedding" href="#">Wedding</a></li>
                                        <li><a data-filter=".ceremony" href="#">Prewedding</a></li>
                                    </ul>
                                </div>
                                :
                                <div className="gallery-filters">
                                    <ul>
                                        <li><a data-filter="*" href="#" className="current">All</a></li>

                                    </ul>
                                </div>

                            }

                            {mql.matches ?
                                <div className="gallery-container gallery-fancybox masonry-gallery forSlider">


                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal1.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                            <img src={"../../../stylesheets/images/using/galeri/gal1.jpeg"} alt className="img img-responsive" />
                                        </a>
                                    </div>

                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal2.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                            <img src={"../../../stylesheets/images/using/galeri/gal2.jpeg"} alt className="img img-responsive" />
                                        </a>
                                    </div>

                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal7.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                            <img src={"../../../stylesheets/images/using/galeri/gal7.jpeg"} alt className="img img-responsive" />
                                        </a>
                                    </div>


                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal6.jpeg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal6.jpeg"} alt className="img img-responsive" />
                                        </a>
                                    </div>

                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal3.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                            <img src={"../../../stylesheets/images/using/galeri/gal3.jpeg"} alt className="img img-responsive" />
                                        </a>
                                    </div>

                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal5.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                            <img src={"../../../stylesheets/images/using/galeri/gal5.jpeg"} alt className="img img-responsive" />
                                        </a>
                                    </div>


                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal9.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                            <img src={"../../../stylesheets/images/using/galeri/gal9.jpeg"} alt className="img img-responsive" />
                                        </a>
                                    </div>

                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal8.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                            <img src={"../../../stylesheets/images/using/galeri/gal8.jpeg"} alt className="img img-responsive" />
                                        </a>
                                    </div>

                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal4.jpeg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal4.jpeg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal10.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal10.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal11.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal11.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal12.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal12.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal13.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal13.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal14.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal14.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal15.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal15.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal16.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal16.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal17.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal17.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal18.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal18.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal19.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal19.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal20.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal20.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal21.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal21.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal22.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal22.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal23.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal23.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>

                                    {/*  */}
                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal241.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal241.JPG"} alt className="img img-responsive" />
                                        </a>
                                    </div>

                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal244.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal244.JPG"} alt className="img img-responsive" />
                                        </a>
                                    </div>


                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal243.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal243.JPG"} alt className="img img-responsive" />
                                        </a>
                                    </div>

                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal245.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal245.JPG"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal246.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal246.JPG"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal247.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal247.JPG"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal242.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal242.JPG"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal248.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal248.JPG"} alt className="img img-responsive" />
                                        </a>
                                    </div>



                                </div>
                                :
                                <div className="gif-registration-slider gallery-fancybox">


                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal1.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                            <img src={"../../../stylesheets/images/using/galeri/gal1.jpeg"} alt className="img img-responsive" />
                                        </a>
                                    </div>

                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal2.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                            <img src={"../../../stylesheets/images/using/galeri/gal2.jpeg"} alt className="img img-responsive" />
                                        </a>
                                    </div>

                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal7.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                            <img src={"../../../stylesheets/images/using/galeri/gal7.jpeg"} alt className="img img-responsive" />
                                        </a>
                                    </div>


                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal6.jpeg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal6.jpeg"} alt className="img img-responsive" />
                                        </a>
                                    </div>

                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal3.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                            <img src={"../../../stylesheets/images/using/galeri/gal3.jpeg"} alt className="img img-responsive" />
                                        </a>
                                    </div>

                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal5.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                            <img src={"../../../stylesheets/images/using/galeri/gal5.jpeg"} alt className="img img-responsive" />
                                        </a>
                                    </div>


                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal9.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                            <img src={"../../../stylesheets/images/using/galeri/gal9.jpeg"} alt className="img img-responsive" />
                                        </a>
                                    </div>

                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal8.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                            <img src={"../../../stylesheets/images/using/galeri/gal8.jpeg"} alt className="img img-responsive" />
                                        </a>
                                    </div>

                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal4.jpeg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal4.jpeg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal10.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal10.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal11.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal11.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal12.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal12.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal13.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal13.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal14.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal14.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal15.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal15.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal16.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal16.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal17.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal17.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal18.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal18.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal19.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal19.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal20.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal20.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal21.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal21.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal22.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal22.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid wedding">
                                        <a href={"../../../stylesheets/images/using/galeri/gal23.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal23.jpg"} alt className="img img-responsive" />
                                        </a>
                                    </div>

                                    {/*  */}
                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal241.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal241.JPG"} alt className="img img-responsive" />
                                        </a>
                                    </div>

                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal244.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal244.JPG"} alt className="img img-responsive" />
                                        </a>
                                    </div>


                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal243.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal243.JPG"} alt className="img img-responsive" />
                                        </a>
                                    </div>

                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal245.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal245.JPG"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal246.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal246.JPG"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal247.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal247.JPG"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal242.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal242.JPG"} alt className="img img-responsive" />
                                        </a>
                                    </div>
                                    <div className="grid ceremony">
                                        <a href={"../../../stylesheets/images/using/galeri/gal248.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                            <img src={"../../../stylesheets/images/using/galeri/gal248.JPG"} alt className="img img-responsive" />
                                        </a>
                                    </div>



                                </div>
                            }

                            {/* <div className="gallery-container gallery-fancybox masonry-gallery forSlider">


                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/using/galeri/gal1.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                        <img src={"../../../stylesheets/images/using/galeri/gal1.jpeg"} alt className="img img-responsive" />
                                    </a>
                                </div>

                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/using/galeri/gal2.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                        <img src={"../../../stylesheets/images/using/galeri/gal2.jpeg"} alt className="img img-responsive" />
                                    </a>
                                </div>

                                <div className="grid ceremony">
                                    <a href={"../../../stylesheets/images/using/galeri/gal7.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                        <img src={"../../../stylesheets/images/using/galeri/gal7.jpeg"} alt className="img img-responsive" />
                                    </a>
                                </div>


                                <div className="grid ceremony">
                                    <a href={"../../../stylesheets/images/using/galeri/gal6.jpeg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal6.jpeg"} alt className="img img-responsive" />
                                    </a>
                                </div>

                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/using/galeri/gal3.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                        <img src={"../../../stylesheets/images/using/galeri/gal3.jpeg"} alt className="img img-responsive" />
                                    </a>
                                </div>

                                <div className="grid ceremony">
                                    <a href={"../../../stylesheets/images/using/galeri/gal5.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                        <img src={"../../../stylesheets/images/using/galeri/gal5.jpeg"} alt className="img img-responsive" />
                                    </a>
                                </div>


                                <div className="grid ceremony">
                                    <a href={"../../../stylesheets/images/using/galeri/gal9.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                        <img src={"../../../stylesheets/images/using/galeri/gal9.jpeg"} alt className="img img-responsive" />
                                    </a>
                                </div>

                                <div className="grid ceremony">
                                    <a href={"../../../stylesheets/images/using/galeri/gal8.jpeg"} className="fancybox" data-fancybox-group="gall-1">

                                        <img src={"../../../stylesheets/images/using/galeri/gal8.jpeg"} alt className="img img-responsive" />
                                    </a>
                                </div>

                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/using/galeri/gal4.jpeg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal4.jpeg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/using/galeri/gal10.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal10.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/using/galeri/gal11.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal11.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/using/galeri/gal12.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal12.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/using/galeri/gal13.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal13.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/using/galeri/gal14.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal14.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/using/galeri/gal15.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal15.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/using/galeri/gal16.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal16.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/using/galeri/gal17.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal17.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/using/galeri/gal18.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal18.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/using/galeri/gal19.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal19.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/using/galeri/gal20.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal20.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/using/galeri/gal21.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal21.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/using/galeri/gal22.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal22.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid wedding">
                                    <a href={"../../../stylesheets/images/using/galeri/gal23.jpg"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal23.jpg"} alt className="img img-responsive" />
                                    </a>
                                </div>


                                <div className="grid ceremony">
                                    <a href={"../../../stylesheets/images/using/galeri/gal241.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal241.JPG"} alt className="img img-responsive" />
                                    </a>
                                </div>

                                <div className="grid ceremony">
                                    <a href={"../../../stylesheets/images/using/galeri/gal244.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal244.JPG"} alt className="img img-responsive" />
                                    </a>
                                </div>


                                <div className="grid ceremony">
                                    <a href={"../../../stylesheets/images/using/galeri/gal243.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal243.JPG"} alt className="img img-responsive" />
                                    </a>
                                </div>

                                <div className="grid ceremony">
                                    <a href={"../../../stylesheets/images/using/galeri/gal245.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal245.JPG"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid ceremony">
                                    <a href={"../../../stylesheets/images/using/galeri/gal246.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal246.JPG"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid ceremony">
                                    <a href={"../../../stylesheets/images/using/galeri/gal247.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal247.JPG"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid ceremony">
                                    <a href={"../../../stylesheets/images/using/galeri/gal242.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal242.JPG"} alt className="img img-responsive" />
                                    </a>
                                </div>
                                <div className="grid ceremony">
                                    <a href={"../../../stylesheets/images/using/galeri/gal248.JPG"} className="fancybox" data-fancybox-group="gall-1">
                                        <img src={"../../../stylesheets/images/using/galeri/gal248.JPG"} alt className="img img-responsive" />
                                    </a>
                                </div>



                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}