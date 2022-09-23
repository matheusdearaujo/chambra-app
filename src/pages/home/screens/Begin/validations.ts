import * as yup from "yup";
import messages from "_config/messages";

yup.setLocale(messages);

export const schema = yup.object({
	username: yup.string().required().label("Nome de usuário"),
});
