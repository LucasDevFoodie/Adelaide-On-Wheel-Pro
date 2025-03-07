import { NavLink } from "react-router-dom"
import {ROUTES} from '../../router'
import { MouseEventHandler } from "react"

export const RoutingItem = ({onClick}: {onClick?: MouseEventHandler}) => {
    return (
        <>
        <li onClick={onClick}>
            <NavLink to={ROUTES.Home.path}>{ROUTES.Home.label}</NavLink>
        </li>
         <li onClick={onClick}>
             <NavLink to={ROUTES.School.path}>{ROUTES.School.label}</NavLink>
         </li>
         <li onClick={onClick}>
             <NavLink to={ROUTES.Shop.path}>{ROUTES.Shop.label}</NavLink>
         </li>
        </>
    )
}