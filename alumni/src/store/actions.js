// action - customization reducer


import axios from 'axios';

export const SET_MENU = '@customization/SET_MENU';
export const MENU_TOGGLE = '@customization/MENU_TOGGLE';
export const MENU_OPEN = '@customization/MENU_OPEN';
export const SET_FONT_FAMILY = '@customization/SET_FONT_FAMILY';
export const SET_BORDER_RADIUS = '@customization/SET_BORDER_RADIUS';
export const TOGGLE_FILTER_DIALOG = 'TOGGLE_FILTER_DIALOG';
export const OPEN_FILTER_DIALOG = 'OPEN_FILTER_DIALOG';
export const CLOSE_FILTER_DIALOG = 'CLOSE_FILTER_DIALOG';


export const postUser = (data) => {
    return (dispatch) => {
      axios.post('http://localhost:5000/api/user/addUser', JSON.stringify(data))
        .then((response) => {
          dispatch({type: 'POST_SUCCESS', payload: response.data});
        })
        .catch((error) => {
          dispatch({type: 'POST_ERROR', payload: error});
        });
    }
  }


  export const LoginAPI = () => {
    return async (dispatch) => {
      try {
        const res = await axios.get('/login');
        setData(res.data);
        dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
      } catch (err) {
        dispatch({ type: 'GET_DATA_ERROR', payload: err });
      }
    };
  };