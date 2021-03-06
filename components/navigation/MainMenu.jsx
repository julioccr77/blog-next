import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const MainMenu = props => {
    return (
        <nav>
            <ul>
                <li><Link href='/'><a>Inicio</a></Link></li>
                <li><Link href='/about'><a>Acerca de</a></Link></li>
                <li><Link href='/contact'><a>Contacto</a></Link></li>
            </ul>
        </nav>
    )
}

MainMenu.propTypes = {

}

export default MainMenu
