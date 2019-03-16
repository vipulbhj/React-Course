import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actionCreator from '../../store/action';

import './smc.css';
import SocialMediaItemComponent from './SocialMediaItemComponent/SocialMediaItemComponent';

class SocialMediaComponent extends Component {
    componentDidMount() {
        this.props.downloadSMH();
    }
    
    render() {
        let allSocialMediaHandles = this.props.smh;
        return (
            <div className="SocialMediaContainer">
                {
                    allSocialMediaHandles.map((item, index) => {
                        return (
                            <SocialMediaItemComponent key={index} name={item.name} link={item.link} />
                        );
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        smh: state.smh
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        downloadSMH: () => dispatch(actionCreator.downloadSMH())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SocialMediaComponent);