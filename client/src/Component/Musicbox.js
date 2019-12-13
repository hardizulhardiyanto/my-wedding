import React, { Component } from 'react';


export default class Musicbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            pause: true,
        }
        this.url = "./stylesheets/Sound/Can t Help Falling In Love With You - Haley Reinhart.mp3";
        this.audio = new Audio(this.url);
    }

    componentDidMount() {
        this.play()
    }

    play = () => {
        this.setState({ play: true, pause: false })
        this.audio.play();
    }

    pause = () => {
        this.setState({ play: false, pause: true })
        this.audio.pause();
    }

    render() {
       
        return (

            <div>
                
                {this.state.play == false ?

                    <div className="music-box">
                        <button onClick={this.play}>
                            <i className="fa fa-music"></i>
                        </button>
                    </div>
                    :
                    <div className="music-box">
                    <button onClick={this.pause}>
                        <i className="fa fa-music"></i>
                    </button>
                </div>
                }


            </div>

        )
    }
}