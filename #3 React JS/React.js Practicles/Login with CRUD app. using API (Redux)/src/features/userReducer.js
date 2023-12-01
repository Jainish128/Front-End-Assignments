import axios from "axios";


const All_Data = 'All_Data';
// const Single_User = 'Single_User';

const objectInit = {
    alluser: []
    // singleuser: {},
    // demoName: 'Jainish Patel'
};


const userReducer = (state = objectInit, action) => {
    switch (action.type) 
    {
        case 'All_Data':
            return { ...state, alluser: action.payload }; 
    }
    return state;
};

export default userReducer;




// For All Users Data GET : 
const getData = (data) => ({ type:All_Data, payload:data });

export const usersFetch = () => {
    return function (dispatch) {
        axios.get(`http://localhost:3000/user`)
        .then((resp) => dispatch(getData(resp.data)))
    }
};

// export const usersFetch = () => async (dispatch) => {
//     try {
//         const resp = await axios.get(`http://localhost:3000/user`);
//         dispatch({ type: 'All_Data', payload: resp.data });
//     }
//     catch (error) {
//         console.error('Error in Getting Users : ', error);
//     }
// };



// Insert/POST Data to JSON-Server || Add Data
export const insert = (api, object) => {
    return function () {
        axios.post(api, object)
        .then( (resp) => console.log(resp) )
    }
};