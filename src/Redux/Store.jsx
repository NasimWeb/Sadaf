import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './store/users'
import coursesReducer from './store/courses'
import articleReducer from './store/articles'
import categoriesReducer from'./store/categories'


const store = configureStore({
    reducer: {
        users : usersReducer,
        courses : coursesReducer,
        articles : articleReducer,
        Categories : categoriesReducer,
    }

})

export default store