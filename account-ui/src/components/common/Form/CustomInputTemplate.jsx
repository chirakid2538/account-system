import { Controller } from 'react-hook-form';

const CustomInputTemplate = ({ control, name, render, defaultValue = '' }) => {
	return <Controller name={name} defaultValue={defaultValue} control={control} render={render} />;
};

export default CustomInputTemplate;
