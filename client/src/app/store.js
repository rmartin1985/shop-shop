import { configureStore } from '@reduxjs/toolkit'
import reducer from '../utils/reducers'

export const store = configureStore(reducer)