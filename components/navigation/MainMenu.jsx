import React, {createRef} from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const menu = createRef();
const toggleMenu = ()=>{
    menu.current.classList.toggle("test");
}
const MainMenu = props => {
    return (
        <nav ref={menu}>
            <ul>
                <li><Link href='/'><a>Inicio</a></Link></li>
                <li><Link href='/about'><a>Acerca de</a></Link></li>
                <li><Link href='/contact'><a>Contacto</a></Link></li>
            </ul>
            <div onClick={toggleMenu}>
                clickme
            </div>
        </nav>
    )
}

MainMenu.propTypes = {

}

export default MainMenu
