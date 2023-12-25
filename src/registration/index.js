import { credentialOptions, publicKey } from "../registrationOptions"

const handleRegistration = () => {
    navigator.credentials.create({ publicKey })
        .then((newCredentialInfo) => {
            alert("registering credentials inside function")
            // Handle successful WebAuthn registration
            console.log("WebAuthn registration done: ", newCredentialInfo)
            localStorage.setItem("registrationDone", "true")
            console.log(newCredentialInfo);
        })
        .catch((error) => {
            // Handle WebAuthn registration failure
            console.error(error)
        });
}

export default handleRegistration