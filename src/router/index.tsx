import { Main } from '../sections/Main' 
import { School } from '../sections/School'
import { Shop } from '../sections/Shop'
import { NotFound } from '../sections/Status/NotFound'
import { RouteObject } from 'react-router-dom'

export const ROUTES = {
    Home: {
        path: '/',
        element: <Main />,
        label: 'Home',
    },
    School: {
        path: '/school',
        element: <School />,
        label: 'School'
    },
    Shop: {
        path: '/shop',
        element: <Shop />,
        label: 'Shop'
    },
    NotFound: {
        path: '*',
        element: <NotFound />,
    }
}




 export const RoutesParams: RouteObject[] = Object.entries(ROUTES).map(([,value]) => {
    return {
        path: value.path,
        element: value.element
    }
 }) 
 
 