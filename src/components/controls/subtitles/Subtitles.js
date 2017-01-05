import React from 'react';
import Icon from './../../icon/Icon';

var Subtitles = React.createClass({

    propTypes: {
        currentLabel: React.PropTypes.string,
        showMenu: React.PropTypes.bool,
        textTracks: React.PropTypes.object,
        setTextTrack: React.PropTypes.func,
        textTrackSelected: React.PropTypes.any,
    },

    showSubtitles: function (key) {
        console.log('show ', key);
        this.props.setTextTrack(key);
    },

    /**
     * As controls receive all props for extensibility, we do a quick
     * check and make sure only the props we care about have changed.
     * @param  {object} nextProps The next props from parent
     * @return {boolean}          Whether we re-render or not
     */
    shouldComponentUpdate(nextProps) {
        return this.props.textTrackSelected !== nextProps.textTrackSelected ||
               this.props.textTracks !== nextProps.textTracks;
    },

    render() {

        if (Object.keys(this.props.textTracks).length) {
            return (
                <div className="video-subtitles video__control">
                    <div className="video-menu-button-popup video-control" title="Subtitles">
                        <div className="video-menu">
                            <ul className="video-menu-content">
                                <li className={'video-menu-item ' + (!this.props.textTrackSelected ? 'video-selected' : '')}
                                    onClick={() => {
                                        this.showSubtitles()
                                    }}>Subtitles off
                                </li>
                                { Object.keys(this.props.textTracks).map((key) => {
                                    return (<li key={'text_' + key}
                                                className={'video-menu-item ' + (this.props.textTrackSelected == key ? 'video-selected' : '')}
                                                onClick={() => {
                                                    this.showSubtitles(key)
                                                }}>{this.props.textTracks[key].label}</li>)
                                })}
                            </ul>
                        </div>
                        <span className="video-control-text">cc</span>
                    </div>

                </div>
            );
        } else {
            return null;
        }
    }
});

export default Subtitles;
