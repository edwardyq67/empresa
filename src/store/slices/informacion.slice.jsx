import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import axios from 'axios';

export const informacionSlice = createSlice({
    name: 'informacion',
    initialState: [],
    reducers: {
        setInformacion: (state, action) => {
            const Informacion = action.payload;
            return Informacion;
        },
    },
});

export const getInformacion = () => (dispatch) => {
    dispatch(setIsLoading(true));

   
    return axios
        .get('https://api-ropa1-uwg9-dev.fl0.io/portafolio/lenguaje')
        .then((res) => dispatch(setInformacion(res.data)))
        .finally(() => {
           
            setTimeout(() => {
                dispatch(setIsLoading(false));
            },1000);
        });
};

export const { setInformacion } = informacionSlice.actions;

export default informacionSlice.reducer;
