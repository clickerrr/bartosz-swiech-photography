import { useContext, useState } from 'react';
import '../../styles/NavStyles.css';
import { NavLink } from 'react-router';

import dropdownIcon from '../../assets/dropdown-svgrepo-com.svg';
import { DirectoriesContext } from '../../App';

const Navbar = () => {
	const [dropDownShowing, setDropDownShowing] = useState(false);

	const directories = useContext(DirectoriesContext);

	const handleDropdown = () => {
		setDropDownShowing((state) => !state);
	};

	return (
		<div className="header-container">
			<NavLink to="/" className="header-element header-title">
				Bartek Swiech Photography
			</NavLink>

			<div className="header-element">
				<div className="dropdown-container" onClick={() => handleDropdown()}>
					<div
						id="dropdown-label"
						className={`border-transparent ${
							dropDownShowing ? 'border-transparent label-clicked' : ''
						}`}
					>
						<span>Catalog</span>
						<img
							id="dropdown-icon"
							className={`${dropDownShowing ? 'flip-icon' : ''}`}
							src={dropdownIcon}
						/>
					</div>
					<div
						id="dropdown"
						className={`dropdown-contents ${
							dropDownShowing ? 'show-dropdown' : 'hide-dropdown'
						}`}
					>
						{directories?.map((directory, index) => {
							const splitTitle = directory.split('_');
							const capTitle = splitTitle.map((word) => {
								return word.charAt(0).toUpperCase() + word.slice(1);
							});
							const newDirectoryName = capTitle.join(' ').split('.')[0];
							return (
								<NavLink
									key={index}
									to={`/${directory.split('.')[0]}`}
									className={({ isActive }) => {
										return isActive ? 'dropdown-item active' : 'dropdown-item';
									}}
								>
									{newDirectoryName}
								</NavLink>
							);
						})}
					</div>
				</div>
			</div>

			<div className="header-element">
				<NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
					Home
				</NavLink>
			</div>
			<div className="header-element">
				<NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
					Contact
				</NavLink>
			</div>
		</div>
	);
};

export default Navbar;
