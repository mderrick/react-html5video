import React, { Component } from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import styles from './App.css';
import 'reset-css/reset.css';
import vttEn from './../../assets/sintel-en.vtt';
import vttEs from './../../assets/sintel-es.vtt';
import bigBuckBunnyPoster from './../../assets/poster-big-buck-bunny.png';
import sintelTrailerPoster from './../../assets/poster-sintel-trailer.png';

const sintelTrailer = 'https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4';
const bigBuckBunny = 'http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov';

class App extends Component {
    render () {
        return (
            <div className={styles.component}>
                <header className={styles.header}>
                    <h1 className={styles.title}>React HTML5 Video</h1>
                    <a className={styles.link}
                        href="https://github.com/mderrick/react-html5video">
                        View on GitHub &raquo;
                    </a>
                </header>
                <ul className={styles.videoList}>
                    <li className={styles.videoListItem}>
                        <Video
                            autoPlay
                            ref="video1"
                            onPlay={() => {
                                this.refs.video2.videoEl.pause();
                            }}
                            className={styles.video}
                            poster={sintelTrailerPoster}>
                            <source src={sintelTrailer} type="video/mp4" />
                            <track
                                label="English"
                                kind="subtitles"
                                srcLang="en"
                                src={vttEn}
                                default />
                            <track
                                label="Español"
                                kind="subtitles"
                                srcLang="es"
                                src={vttEs} />
                        </Video>
                    </li>
                    <li className={styles.videoListItem}>
                        <Video
                            ref="video2"
                            onPlay={() => {
                                this.refs.video1.videoEl.pause();
                            }}
                            src={bigBuckBunny}
                            className={styles.video}
                            poster={bigBuckBunnyPoster}>
                        </Video>
                    </li>
                </ul>
            </div>
        );
    }
}

export default App;
