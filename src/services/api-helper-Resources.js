import axios from 'axios'


const api = axios.create({
    baseURL: 'https://ga-job-tracker-backend.herokuapp.com/resource/'
});

export const getResources = async () => {
    const resp =  await api.get('/getAll');
    return resp.data
};

/*======== Format of resourceObj ========================
{
    "{{category}}": [
        {
            "name": "{{ResourceName}}",
            "url": "{{ResourceURL}}"
        }
    ]
}
*/
export const updateResource = async (token, resourceObj) => {
    const resp =  await api.put('/add', resourceObj, {
        params: {
            token: token
        }});
    return resp.data
};

/*======== Format of resourceObj ========================
{
    "{{category}}": [
        {
            "name": "{{ResourceName}}",
            "url": "{{ResourceURL}}"
        }
    ]
}
*/
export const deleteResource = async (token, resourceObj) => {
    const resp =  await api.get('/remove', resourceObj, {
        params: {
            token: token
        }});
    return resp.data
};