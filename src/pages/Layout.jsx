import React from 'react'
import { ColContainer, LayoutContainer } from '../components/Container'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <LayoutContainer 
        leftChild={
            <ColContainer>
                <h2>hello</h2>
                <Link to={'/dashboard'}>Dashboar</Link>
                <Link to={'/dashboard/space'}>Space</Link>  
                <Link to={'/dashboard/history'}>History</Link>
            </ColContainer>
        }   

        rightChild={
            <div><h2>Hey this is layout container</h2> <Outlet/> </div>
        }
        classNameHead='layout-mainstyle-container'
        classNameLeft='left-menu-dash'
        classNameRight='right-main-canva'

        />
    )
}

export default Layout