import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import styles from './App.css';
import pkg from './../../../package.json';
import vttEn from './../../assets/sintel-en.vtt';
import vttEs from './../../assets/sintel-es.vtt';

const sintelTrailer = 'https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4';
const bigBuckBunny = 'http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov';
const failingSource = 'https://github.com/mderrick/react-html5video';

const App = () => (
    <div className={styles.component}>
        <h1 className={styles.copy}>This is a demo for "{pkg.name}".</h1>
        <Video className={styles.video}>
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
        <Video
            src={bigBuckBunny}
            className={styles.video}>
        </Video>
        <Video
            src={failingSource}
            className={styles.video}>
        </Video>
        <Video className={styles.video}>
            <source src={failingSource} type="video/mp4" />
            <source src={sintelTrailer} type="video/mp4" />
        </Video>
        <Video className={styles.video}>
            <source src={failingSource} type="video/mp4" />
        </Video>
    </div>
);

export default App;
