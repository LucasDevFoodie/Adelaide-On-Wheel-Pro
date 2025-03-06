import { createBrowserRouter, createRoutesFromElements, Route, RouteObject } from "react-router-dom";
import { ROUTES } from './Routes'

export const Router = createBrowserRouter(
        createRoutesFromElements(
            ROUTES.map(({path, element}: RouteObject) => (
                <Route key={path} path={path} element={element} />
            )))
    )
