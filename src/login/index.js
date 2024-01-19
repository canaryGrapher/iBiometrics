import { loginOptions } from "../invokation_options"
import { successLoginDialog } from "../prompt"

const handleLogin = () => {
    // const credentialOptionsData = credentialOptions("asoiughasogsadgj")
    navigator.credentials.get(loginOptions)
        .then((newCredentialInfo) => {
            // alert("Credentials captured. Server to verify and login/redirect")
            // Handle successful WebAuthn registration
            console.log(newCredentialInfo);
            successLoginDialog();
            document.querySelector("#iBiometric_invokeCloseLoginSuccess")?.addEventListener("click", () => {
                const dialogContainer = document.querySelector('#iBiometric_container_for_success_login');
                dialogContainer.style.display = 'none';
            })
        })
        .catch((error) => {
            // Handle WebAuthn registration failure
            console.error(error)
            // alert("Failure in login")
        });
}

export default handleLogin