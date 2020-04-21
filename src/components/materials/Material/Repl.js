import React, {useContext} from 'react';
import { InputGroupText, InputGroupAddon, Input, Form, FormGroup } from 'reactstrap';
import { TrackerContext } from '../../../App'
import "../materials.css";
import { updateUserProfile } from '../../../services/api-helper-userProfile'


const Repl = ({handleURLChange, newURL}) => {
    const sharedStates = useContext(TrackerContext);


    const handleResumeSubmit = e => {
        e.preventDefault();
        const newProfile = {...sharedStates.userProfile};
        newProfile.jobSearchMaterials.repl = newURL;
        updateUserProfile(sharedStates.token, newProfile).then(res => {
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
                    <InputGroupText>Repl.it URL</InputGroupText>
                </InputGroupAddon>
                <Input type="url"
                       value={sharedStates.userProfile.jobSearchMaterials.repl}
                       onChange={handleURLChange}/>
                <button className="jsmContainer-button">copy</button>
            </FormGroup>
        </Form>
    );
};

export default Repl;
