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
            loading,
            copy
        } = this.props;
        const iconProps = {
            className: styles.icon,
            height: 40,
            width: 40,
            fill: '#fff',
            'aria-hidden': true,
        };
        if (error) {
            return (
                <button className={styles.inner}>
                    <span className={styles.srOnly}>{copy.error}</span>
                    <Report {...iconProps} />
                </button>
            );
        } else if (loading) {
            return (
                <button className={styles.inner}>
                    <span className={styles.srOnly}>{copy.loading}</span>
                    <Spin {...iconProps} />
                </button>
            );
        } else if (paused) {
            return (
                <button className={styles.inner}>
                    <span className={styles.srOnly}>{copy.paused}</span>
                    <PlayArrow {...iconProps} />
                </button>
            );
        }
    }

    render () {
        const { className, onClick } = this.props;
        return (
            <div
                className={[styles.component, className].join(' ')}
                onClick={onClick}
            >
                {this.renderContent()}
            </div>
        );
    }
}
