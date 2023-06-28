import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const LanguageSwitch = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);
	const handleChange = () => setAnchorEl(null);

	return (
		<>
			<Button color="inherit" onClick={handleClick}>
				ไทย
			</Button>
			<Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem onClick={() => handleChange('th')}>ไทย</MenuItem>
				<MenuItem onClick={() => handleChange('en')}>English</MenuItem>
			</Menu>
		</>
	);
};

export default LanguageSwitch;
