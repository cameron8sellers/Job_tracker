import axios from 'axios'


const api = axios.create({
    baseURL: 'https://ga-job-tracker-backend.herokuapp.com/api/'
});

export const validToken = async (token) => {
    const resp =  await api.get('/checkToken', {
        params: {
            token: token
        }});
    return resp.status
};


export const registerNewUser = async (user) => {
    const resp  = await api.post(`/register`, user);
    return resp.data
};

export const authenticateUser = async (user) => {
    const resp = await api.post('/authenticate', user, {
        withCredentials: true,
        maxRedirects: 0,
        validateStatus: function (status) {
            return status <= 302;
        }
    });
    console.log("authenticate user response: ", resp)
    return resp.data
};

export const logUserOut = async (user) => {
    return "Loging user out ..."
};

