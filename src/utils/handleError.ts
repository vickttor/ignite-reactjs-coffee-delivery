import { toast } from "react-toastify";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

// Handle error
export function handleError (err: any, customMessage?: string) {
	if (err instanceof ZodError) {
	
		if(customMessage) {
			toast.info(customMessage);
		}else{
			toast.info(fromZodError(err, {maxIssuesInMessage: 1, prefix: "Erro de Validação", issueSeparator: " | " }) as any);
		}
  
		console.log(err);		
	} else {
		const errorCameFromAPI = err.response?.data?.messages && err.response?.data?.messages?.length >= 1;

		if (errorCameFromAPI) {
			toast.info(err.response.data.messages[0]); // Api error message
		}else{
			toast.error(err.message); // http server error message;
		}	
	}

	return err;
}