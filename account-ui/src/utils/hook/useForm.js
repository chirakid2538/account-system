import { useState } from 'react';
import { useForm as hookUseForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

const useForm = ({ schema = null, submiting = false } = {}, options = {}) => {
	const [isSubmiting, setIsSubmiting] = useState(submiting);
	const form = hookUseForm({
		...(schema ? { resolver: joiResolver(schema) } : {}),
		...options,
	});
	return { ...form, isSubmiting, setIsSubmiting };
};

export default useForm;
