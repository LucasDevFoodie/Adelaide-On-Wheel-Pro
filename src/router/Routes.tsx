
import { Main } from '../sections/Main' 
import { School } from '../sections/School'
import { Shop } from '../sections/Shop'
import { NotFound } from '../sections/Error/NotFound'
import { RouteObject } from 'react-router-dom'


 export const ROUTES: RouteObject[] = [
    {
        path: '/',
        element: <Main/>
    },
    {
        path: '/school',
        element: <School/>
    },
    {
        path: '/shop',
        element: <Shop/>
    },
    {
        path: '*',
        element: <NotFound/>
    },
];