import { Home } from '../pages/Home' 
import { School } from '../pages/School'
import { Shop } from '../pages/Shop'
import { NotFound } from '../pages/Status/NotFound'
import { RouteObject } from 'react-router-dom'

export const ROUTES = {
    Home: {
        path: '/',
        element: <Home />,
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
};

 export const RoutesParams: RouteObject[] = Object.entries(ROUTES).map(([,value]) => {
    return {
        path: value.path,
        element: value.element
    }
 });