import React, {useContext} from 'react';
import { InputGroupText, InputGroupAddon, Input, Form, FormGroup } from 'reactstrap';
import { TrackerContext } from '../../../App'
import "../materials.css";
import { updateUserProfile } from '../../../services/api-helper-userProfile'


const Resume = ({handleURLChange, newURL}) => {
    const sharedStates = useContext(TrackerContext);

    const handleResumeSubmit = e => {
        e.preventDefault();
        const newProfile = {...sharedStates.userProfile};
        newProfile.jobSearchMaterials.resume = newURL;
        updateUserProfile(sharedStates.token, newProfile).then(res => {
            console.log(res)
            if(res === 200){
                sharedStates.setUserProfile(newProfile)
            }
        }).catch(err => {
            console.log("Error updating user profile. ", err)
        })
    };

    return (
            <Form onSubmit={handleResumeSubmit}>
                <FormGroup className="jsmContainer-inputContainer">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Resume</InputGroupText>
                    </InputGroupAddon>
                    <Input type="url"
                           value={sharedStates.userProfile.jobSearchMaterials.resume}
                           onChange={handleURLChange}/>
                    <button className="jsmContainer-button">copy</button>
                </FormGroup>
            </Form>
    );
};

export default Resume;
