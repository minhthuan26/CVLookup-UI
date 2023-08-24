import HomePage from "~/Pages/HomePage"
import DefaultLayout from "~/components/Layout/DefaultLayout"
const publicRoutes = [
    {
        path: '/',
        layout: DefaultLayout,
        page: HomePage
    },

]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }