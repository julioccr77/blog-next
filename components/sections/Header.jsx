import React from 'react'
import PropTypes from 'prop-types'
import MainMenu from '../navigation/MainMenu'

const Header = props => {
    return (
        <header>
            <div className='logo'>
                <img src='https://ed.team/static/images/logo.svg' alt='EDlogo'></img>
            </div>
            <MainMenu></MainMenu>
        </header>
        
    )
}

Header.propTypes = {

}

export default Header
