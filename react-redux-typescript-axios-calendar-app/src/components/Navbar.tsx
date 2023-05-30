import { Layout, Menu, Row } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../routes'
import { useTypedSelector } from '../hooks/useTypedSelector'

type Props = {}

const Navbar: React.FC = (props: Props) => {
    const navigate = useNavigate()
    const {isAuth} = useTypedSelector(state => state.authReducer)
  return (
    <Layout.Header style={{alignItems: 'center', display: "flex"}}>
        <Row justify="end">
            {isAuth ? 
            <Menu theme="dark"
                 selectable={false}>
                <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key={1}>Выйти</Menu.Item>
            </Menu>
            :
            <Menu theme="dark"
                 selectable={false}>
                <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key={1}>Логин</Menu.Item>
            </Menu>}
        </Row>
    </Layout.Header>
  )
}

export default Navbar