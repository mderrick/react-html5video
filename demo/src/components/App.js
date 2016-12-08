import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import styles from './App.css';
import pkg from './../../../package.json';
import vttEn from './../../assets/sintel-en.vtt';
import vttEs from './../../assets/sintel-es.vtt';

const sintelTrailer = 'http://media.w3.org/2010/05/sintel/trailer.mp4';

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
    </div>
);

export default App;
