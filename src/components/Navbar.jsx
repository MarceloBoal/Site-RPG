import '../css/Navbar.css'

function Navbar(){

    const url = 'https://placehold.co/80'
    return(
        <nav className='navbar'>
            <div className='logo'>
                <img src={url}  className='imagem-logo'></img>
            </div>

            <ul className='lista-item-menu'>
                <li className='item-menu'><a href='#Home'>Home</a></li>
                <li className='item-menu'><a href='#Home'>Lore</a></li>
                <li className='item-menu'><a href='#Home'>Mapa</a></li>
                <li className='item-menu'><a href='#Home'>Locais</a></li>
                <li className='item-menu'><a href='#Home'>Personagens</a></li>
                <li className='item-menu'><a href='#Home'>Sistema</a></li>
            </ul>

            <div><span className='ping'></span></div>
        </nav>


    )
}

export default Navbar