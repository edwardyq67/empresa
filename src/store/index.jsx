import { configureStore } from '@reduxjs/toolkit'
import  isLoading  from './slices/isLoading.slice'
import informacionSlice from './slices/informacion.slice'

export default configureStore({
    reducer: {
        isLoading:isLoading,
        informacionSlice:informacionSlice
    }
})
