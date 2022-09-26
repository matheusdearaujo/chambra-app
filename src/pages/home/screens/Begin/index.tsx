import React, { useCallback } from "react";
import { InputNameUserValidation } from "_shared/components";
import { useNavigation } from "@react-navigation/native";
import { MainStackNavigationProps } from "_navigation/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "./validations";

import { BeginContainer, BeginContent, BeginButton } from "./styles";

interface BeginForm {
	username: string;
}

export const Begin: React.FC = () => {
	const { control, handleSubmit } = useForm<BeginForm>({
		resolver: yupResolver(schema),
	});

	const navigation = useNavigation<MainStackNavigationProps<"Begin">>();

	const onSubmit = useCallback((data: BeginForm) => {
		const getColors = () =>
			"#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);

		navigation.navigate("Chat", {
			username: data.username,
			color: getColors(),
		});
	}, []);

	return (
		<BeginContainer>
			<BeginContent>
				<InputNameUserValidation
					name="username"
					control={control}
					mode="outlined"
					label="Nome de Usuário"
					placeholder="Digite um nome de usuário"
				/>
			</BeginContent>
			<BeginButton
				mode="contained"
				labelStyle={{ padding: 6 }}
				onPress={handleSubmit(onSubmit)}
			>
				Entrar
			</BeginButton>
		</BeginContainer>
	);
};
