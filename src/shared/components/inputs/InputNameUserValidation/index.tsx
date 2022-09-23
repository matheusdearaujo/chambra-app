import React from "react";
import { useController } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { HelperText } from "react-native-paper";

import { Input, InputProps } from "_shared/components/inputs/Input";
import { HooksFormValidationProps } from "_shared/components/types";

type InputNameUserValidationProps = HooksFormValidationProps &
	Omit<InputProps, "defaultValue">;

export const InputNameUserValidation: React.FC<
	InputNameUserValidationProps
> = ({ name, control, shouldUnregister = false, defaultValue, ...props }) => {
	const {
		field,
		formState: { errors },
		fieldState: { invalid },
	} = useController({
		name,
		control,
		shouldUnregister,
		defaultValue,
	});

	return (
		<>
			<Input
				value={field.value}
				error={invalid}
				onChangeText={field.onChange}
				{...props}
			/>
			<ErrorMessage
				errors={errors}
				name={name}
				render={({ message }) => (
					<HelperText type="error" visible padding="none">
						{message}
					</HelperText>
				)}
			/>
		</>
	);
};
