import { Box, Button as MuiButton, CircularProgress as MuiCircularProgress } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const CircularProgress = styled(MuiCircularProgress)`
	width: 15px !important;
	height: 15px !important;
`;

const SubmitButton = ({ children, isLoading = false, ...props }) => {
	return (
		<MuiButton {...props}>
			{isLoading && (
				<Box mr={1} component="span" display="inherit">
					<CircularProgress color="inherit" />
				</Box>
			)}
			{children}
		</MuiButton>
	);
};

export default SubmitButton;
