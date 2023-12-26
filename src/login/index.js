import { loginOptions } from "../invokation_options"

const handleLogin = () => {
    // const credentialOptionsData = credentialOptions("asoiughasogsadgj")
    navigator.credentials.get({ loginOptions })
        .then((newCredentialInfo) => {
            alert("Credentials captured. Server to verify and login/redirect")
            // Handle successful WebAuthn registration
            console.log(newCredentialInfo);
        })
        .catch((error) => {
            // Handle WebAuthn registration failure
            console.error(error)
        });
}

export default handleLogin