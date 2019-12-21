import React, { Component } from 'react';

export default class Musicbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            pause: true,
        }
        this.url = "./stylesheets/Sound/Bruno Mars - Marry You HD.mp3";
        this.audio = new Audio(this.url);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
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
                        <button onClick={this.play} style={{ border: "2px solid green" }}>
                            <i className="fa fa-music"></i>
                        </button>
                    </div>
                    :
                    <div className="music-box">
                        <button onClick={this.pause} style={{ border: "2px solid red" }}>
                            <i className="fa fa-music"></i>
                        </button>
                    </div>
                }

            </div>

        )
    }
}