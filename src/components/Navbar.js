import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sidebar } from './sidebar';
import '../css/Navbar.css';
// import { IconContext } from 'react-icons';

function Navbar({admin}) {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<div className='navbar'>
				<Link to='#' className='menu-bars'>
					<FaIcons.FaBars onClick={showSidebar}/>
				</Link>
			</div>
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className='nav-menu-items' onClick={showSidebar}>
					<li className='navbar-toggle'>
						<Link to='#' className='menu-bars'>
							<AiIcons.AiOutlineClose />
						</Link>
					</li>
					{/* ----------------- LIST OF PAGES -----------------*/}
					<li className="nav-text">
							<Link to='/browse'>
								<span>BROWSE</span>
							</Link>
					</li>
					<li className="nav-text">
							<Link to='/postCreate'>
								<span>LIST A VEHICLE</span>
							</Link>
					</li>
					<li className="nav-text">
							<Link to='/products'>
								<span>MY CART</span>
							</Link>
					</li>
					<li className="nav-text">
							<Link to='/profile'>
								<span>MY PROFILE</span>
							</Link>
					</li>
					<li className="nav-text">
							<Link to='/login'>
								<span>LOGIN/SIGN UP</span>
							</Link>
					</li>
					
					{/* {Sidebar.map((item, index) => {
						return(
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						)
					})} */}
				</ul>
			</nav>
		</>
	);
}

export default Navbar;