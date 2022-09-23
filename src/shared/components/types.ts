import { Control, UseControllerProps } from "react-hook-form";

export interface HooksFormValidationProps
	extends Omit<UseControllerProps, "control"> {
	control: Control<any>;
	name: string;
	shouldUnregister?: boolean;
	defaultValue?: any;
}
