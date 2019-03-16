import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreator from '../../store/action';

import './contact.css';


class ContactPage extends Component {    
    handleSaveButton = () => {
        console.log(this.props.formState);
    }

    componentWillUnmount() {
        let val = JSON.stringify(this.props.formState);
        localStorage.setItem("formState", val);
    }

    componentDidMount() {
        let formStateExistsInLocalStorage = localStorage.getItem("formState");

        if(formStateExistsInLocalStorage) {
            console.log("Value inside Local Storage");
            let formStateObject = JSON.parse(formStateExistsInLocalStorage);
            this.props.contactComponentDidMount(formStateObject);
        }
    }

    render() {
        const {formState, handleFormChange} = this.props;
        return (
            <div className="ContactPageContainer">
                <h3> Contact Us </h3>
                <div>
                    <input placeholder="First Name" 
                        type="text"
                        value={formState.firstName}
                        onChange={(e) => handleFormChange(e.target.value, 'firstName')}
                    />
                    <input placeholder="Last Name" 
                        type="text"
                        value={formState.lastName}
                        onChange={(e) => handleFormChange(e.target.value, 'lastName')}
                    />
                    <input placeholder="Email" 
                        type="email"
                        value={formState.email}
                        onChange={(e) => handleFormChange(e.target.value, 'email')}
                    />
                    <input placeholder="Brief Project Idea" 
                        type="text" 
                        className="ProjectIdea"
                        value={formState.projectIdea}
                        onChange={(e) => handleFormChange(e.target.value, 'projectIdea')}
                    />
                    <input placeholder="Project Budget" 
                        type="number"
                        value={formState.budget}
                        onChange={(e) => handleFormChange(e.target.value, 'budget')}
                    />
                    <button onClick={this.handleSaveButton}>Save</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        formState: state.formState   
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFormChange: (value, key) => dispatch(actionCreator.handleFormChange(key, value)),
        contactComponentDidMount: (newFormState) => dispatch(actionCreator.contactComponentDidMount(newFormState))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);