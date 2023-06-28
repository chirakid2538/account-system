import React from 'react';
import Joi from 'joi';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { SubmitButton } from '~components/common/Button';
import { InputPassword, Input } from '~components/common/Form';
import useForm from '~utils/hook/useForm';

const ContainerContent = styled(Container)`
	border: 1px solid rgb(238, 238, 238);
	border-radius: 10px;
	@media (max-width: 600px) {
		border: none;
	}
`;

const LogoName = styled.img`
	width: 150px;
`;

const signUpSchema = Joi.object({
	displayName: Joi.string().required(),
	email: Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: ['com'] } })
		.required(),
	password: Joi.string().min(6).required(),
});

const SignUpPage = () => {
	const { control, handleSubmit, ...etc } = useForm({ schema: signUpSchema });

	const onSubmit = (v) => {
		console.log(v);
	};
	return (
		<Grid
			minHeight="100vh"
			container
			direction="column"
			justifyContent="center"
			alignItems="center">
			<ContainerContent maxWidth="sm">
				<Box textAlign="center" paddingBottom={3} paddingTop={7}>
					<LogoName
						src="https://www.keepmemo.co/assets/images/logo-name.svg"
						loading="lazy"
					/>
					<Box marginY={2}>
						<Typography variant="h5" component="h2">
							สมัครสมาชิก
						</Typography>
						<Typography omponent="p">สมัครสมาชิก ผู้ใช้งาน และ รหัสผ่าน</Typography>
					</Box>
				</Box>

				<form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
					<Input
						control={control}
						name="displayName"
						label="ชื่อ"
						fullWidth
						margin="normal"
					/>
					<Input
						control={control}
						name="email"
						label="อีเมลล์"
						fullWidth
						margin="normal"
					/>
					<InputPassword
						control={control}
						name="password"
						label="รหัสผ่าน"
						fullWidth
						margin="normal"
					/>

					<Box paddingTop={5} paddingBottom={7}>
						<Grid
							container
							direction="row"
							justifyContent="space-between"
							alignItems="center">
							<Button>ลงชื่อเข้าใช้แทน</Button>
							<SubmitButton variant="contained" type="submit">
								สมัครสมาชิก
							</SubmitButton>
						</Grid>
					</Box>
				</form>
			</ContainerContent>
		</Grid>
	);
};

export default SignUpPage;
