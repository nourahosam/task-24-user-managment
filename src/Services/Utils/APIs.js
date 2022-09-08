import axios from 'axios';

const fetchUsersAPI = async () => {
    var response = {};
    console.log("FEtch usrs api")
    await axios.get('https://dummyapi.io/data/v1/user',
        { headers: { "app-id": '6315d3d6206ab66b231df9bd' } })
        .then((res) => {
            console.log("fetchUsersAPI", res.data);
            response = res.data;
        })
        .catch((error) => console.log("Axios Error", error));
    return response;
}
const addUserAPI = async (payload) => {
    var response = {};
    console.log("Axios Payload", payload)
    await axios.post('https://dummyapi.io/data/v1/user/create', payload,
        { headers: { "app-id": '6315d3d6206ab66b231df9bd' } })
        .then((res) => {
            console.log("addUsersAPIIIIIIIIIIIIIIIIIIIIIIIIIIIIII", res.data);
            response = res.data;
        });
    return response;
}

const deleteUsersAPI = async (payload) => {
    var response = {};
    await axios.delete(`https://dummyapi.io/data/v1/user/${payload}`,
        { headers: { "app-id": '6315d3d6206ab66b231df9bd' } })
        .then((res) => {
            console.log("DELETEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEAPI", res);
            response = res;
        });
    return response;
}

const updateUserAPI = async (payload) => {
    var response = {};
    await axios.put(`https://dummyapi.io/data/v1/user/${payload}`, 
    {headers: {"app-id": '6315d3d6206ab66b231df9bd'}})
    .then((res) => {
        console.log('UPDATE RESPONSE API', res);
        response = res;
    })
}

export default { fetchUsersAPI, addUserAPI, deleteUsersAPI, updateUserAPI };