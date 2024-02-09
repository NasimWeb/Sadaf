import Courses from "./Pages/dashbourd/Courses/Courses"
import Home from "./Pages/dashbourd/Home/Home"
import Users from "./Pages/dashbourd/Users/Users"
import Articles from './Pages/dashbourd/Articles/Articles'
import NotFound from './Pages/dashbourd/NotFound/NotFound'
import Categories from "./Pages/dashbourd/Categories/Categories"
import SingleUser from "./Pages/dashbourd/singleUser/SingleUser"
import SingleArticle from "./Pages/dashbourd/SingleArticle/SingleArticle"
import SingleCategory from "./Pages/dashbourd/SingleCategory/SingleCategory"
import SingleCourse from "./Pages/dashbourd/SingleCourse/SingleCourse"

const routes = [
    {path: '/', element: <Home/> },
    {path: '/courses' , element: <Courses />},
    {path: '/courses/:courseId' , element: <SingleCourse />},
    {path: '/users' , element: <Users />},
    {path: '/users/:userId' , element: <SingleUser />},
    {path: '/articles' , element: <Articles />},
    {path: '/articles/:articelId' , element: <SingleArticle />},
    {path: '/categories' , element: <Categories />},
    {path: '/categories/:categoryId' , element: <SingleCategory />},
    {path: '*' , element: <NotFound />},
]

export default routes