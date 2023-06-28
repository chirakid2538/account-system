import { TextField } from '@mui/material';
import CustomInputTemplate from '~components/common/Form/CustomInputTemplate';

const Input = ({ control, name, defaultValue = '', label, variant = 'outlined', ...props }) => (
	<CustomInputTemplate
		control={control}
		name={name}
		defaultValue={defaultValue}
		render={({ field, formState: { errors } }) => {
			return (
				<TextField
					{...field}
					error={Boolean(errors[field.name])}
					helperText={errors[field.name]?.message || null}
					label={label}
					variant={variant}
					{...props}
				/>
			);
		}}
	/>
);

export default Input;
