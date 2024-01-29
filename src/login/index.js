import { loginOptions } from "../invokation_options"
import { successLoginDialog, atmPromptDialog } from "../prompt"

const handleLogin = () => {
    // const credentialOptionsData = credentialOptions("asoiughasogsadgj")
    navigator.credentials.get(loginOptions)
        .then((newCredentialInfo) => {
            // alert("Credentials captured. Server to verify and login/redirect")
            // Handle successful WebAuthn registration
            console.log(newCredentialInfo);
            atmPromptDialog();
            document.querySelector("#iBiometric_atmPIN")?.addEventListener("click", () => {
                const dialogContainerPIN = document.querySelector('#iBiometric_container_for_success_login');
                dialogContainerPIN.style.display = 'none';
                successLoginDialog();
                document.querySelector("#iBiometric_invokeCloseLoginSuccess")?.addEventListener("click", () => {
                    const dialogContainerSuccess = document.querySelector('#iBiometric_container_for_atmPIN_prompt');
                    dialogContainerSuccess.style.display = 'none';
                })
            })
        })
        .catch((error) => {
            // Handle WebAuthn registration failure
            console.error(error)
            // alert("Failure in login")
        });
}

export default handleLogin