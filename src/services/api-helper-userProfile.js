import axios from 'axios'


const api = axios.create({
    baseURL: 'https://ga-job-tracker-backend.herokuapp.com/user/'
});


/*======== Format of userObj ========================
    {
        "jobSearchMaterials": {
            "brandStatement": "",
            "coverLetter": "",
            "resume": "",
            "gitHub": "",
            "linkedIn": "",
            "repl": "",
            "codeSandBox": "",
            "profileSite": ""
        },
        "userId": "{{userName}}",
        "targetCompanies": [
            {
                "name" : "",
                "pointOfContact" : "",
                "icon" : ""
                "jobs" : [
                    {
                        "title" : "",
                        "postingURL" : "",
                        "notes" : ""
                    }
                ]
            },
            {},
            {}
        ],
        "networkingContacts": [
            {
                "name" : "",
                "phone" : "",
                "networkEmail" : "",
                "notes" : "",
                "employer" : ""
            },
            {},
            {}
        ]
    }
 */
export const updateUserProfile = async (token, userObj) => {
    const resp =  await api.put('/update', userObj, {
        params: {
            token: token
        }});
    return resp.status
};