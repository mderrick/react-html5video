import React, { Component } from 'react';
import styles from './Overlay.css';
import PlayArrow from './../Icon/play_arrow.svg';
import Spin from './../Icon/spin.svg';
import Report from './../Icon/report.svg';

export default class Overlay extends Component {
    renderContent () {
        const {
            error,
            paused,
            loading
        } = this.props;
        const iconProps = {
            className: styles.icon,
            height: 40,
            width: 40,
            fill: '#fff'
        };
        if (error) {
            return (
                <span className={styles.inner}>
                    <Report {...iconProps} />
                </span>
            );
        } else if (loading) {
            return (
                <span className={styles.inner}>
                    <Spin {...iconProps} />
                </span>
            );
        } else if (paused) {
            return (
                <span className={styles.inner}>
                    <PlayArrow {...iconProps} />
                </span>
            );
        }
    }

    render () {
        const { className, onClick } = this.props;
        return (
            <div className={[
                styles.component,
                className
            ].join(' ')}
            onClick={onClick}>
                { this.renderContent() }
            </div>
        );
    }
}
