import { credentialOptions, publicKey } from "../registrationOptions"

const handleLogin = () => {
    // const credentialOptionsData = credentialOptions("asoiughasogsadgj")
    navigator.credentials.get({ publicKey })
        .then((newCredentialInfo) => {
            alert("Server logic -> login")
            // Handle successful WebAuthn registration
            console.log(newCredentialInfo);
        })
        .catch((error) => {
            // Handle WebAuthn registration failure
            console.error(error)
        });
}

export default handleLogin