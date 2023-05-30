import React from 'react'
import { Navigate, Route, Routes, } from 'react-router-dom'
import { RouteNames, privateRoutes, publicRoutes } from '../routes'
import { useSelector } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'

type Props = {}

const AppRouter = (props: Props) => {
    const {isAuth} = useTypedSelector(state => state.authReducer)
    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={<route.component />} />
                )}
                <Route
                    path="*"
                    element={<Navigate to={RouteNames.EVENT} replace />}
                />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={<route.component />} />
                )}
                <Route
                    path="*"
                    element={<Navigate to={RouteNames.LOGIN} replace />}
                />
            </Routes>
    )
}

export default AppRouter