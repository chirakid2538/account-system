import { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CustomInputTemplate from '~components/common/Form/CustomInputTemplate';

const InputPassword = ({
	control,
	name,
	defaultValue = '',
	label,
	variant = 'outlined',
	...props
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword((prevState) => !prevState);
	const handleMouseDownPassword = (event) => event.preventDefault();

	return (
		<CustomInputTemplate
			control={control}
			name={name}
			defaultValue={defaultValue}
			render={({ field, formState: { errors } }) => {
				return (
					<TextField
						{...field}
						type={showPassword ? 'text' : 'password'}
						error={Boolean(errors[field.name])}
						helperText={errors[field.name]?.message || null}
						label={label}
						variant={variant}
						autoComplete="off"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
										size="large">
										{showPassword ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							),
						}}
						{...props}
					/>
				);
			}}
		/>
	);
};

export default InputPassword;
