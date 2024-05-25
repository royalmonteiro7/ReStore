// import { createStore } from 'redux'
// import counterReducer from './counterReducer'

// export function configureStore() {
//     return createStore(counterReducer)
// }

import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "../../features/contact/counterSlice"
import { useDispatch, useSelector } from "react-redux"
import { basketSlice } from "../../features/basket/basketSlice"
import { catalogSlice } from "../../features/catalog/catalogSlice"
import { accountSlice } from "../../features/account/accountSlice"

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        basket: basketSlice.reducer,
        catalog: catalogSlice.reducer,
        account: accountSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()