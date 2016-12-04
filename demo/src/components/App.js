import React from 'react';
import { default as Video, Overlay, Controls } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import pkg from './../../../package.json';
import styles from './App.css';

const videoUrl = 'http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov';

const App = () => (
    <div className={styles.component}>
        <h1 className={styles.copy}>This is a demo for "{pkg.name}".</h1>
        <Video
            className={styles.video}
            controls
            autoPlay
            loop
            muted>
                <source src={videoUrl} type="video/mp4" />
                <Overlay />
                <Controls />
        </Video>
    </div>
);

export default App;
