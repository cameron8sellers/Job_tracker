import React, {useContext} from 'react';
import {InputGroupText, InputGroupAddon, Input, Form, FormGroup } from 'reactstrap';
import { TrackerContext } from '../../../App'
import "../materials.css";
import { updateUserProfile } from '../../../services/api-helper-userProfile'


const Portfolio = ({handleURLChange, handleCopy, newURL}) => {
    const sharedStates = useContext(TrackerContext);

    const handleResumeSubmit = e => {
        e.preventDefault();
        const newProfile = {...sharedStates.userProfile};
        newProfile.jobSearchMaterials.profileSite = newURL;
        updateUserProfile(sharedStates.token, newProfile).then(res => {
            if(res === 200){
                sharedStates.setUserProfile(newProfile)
            }
        }).catch(err => {
            console.log("Error updating user profile. ", err)
        })
    };

    return (
        <div className="jsmContainer-row">
            <Form onSubmit={handleResumeSubmit}>
                <FormGroup className="jsmContainer-inputContainer">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Portfolio</InputGroupText>
                    </InputGroupAddon>
                    <Input type="url"
                           id="profileSiteInput"
                           value={sharedStates.userProfile.jobSearchMaterials.profileSite}
                           onChange={handleURLChange}/>
                </FormGroup>
            </Form>
            <button
                id="profileSite"
                onClick={handleCopy}
                className="jsmContainer-button">copy</button>
        </div>
    );
};

export default Portfolio;
