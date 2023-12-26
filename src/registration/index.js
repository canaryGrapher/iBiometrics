import { registrationOptions } from "../invokation_options"

const handleRegistration = () => {
    navigator.credentials.create()
        .then((newCredentialInfo) => {
            // Handle successful WebAuthn registration
            console.log("WebAuthn registration done: ", newCredentialInfo)
            localStorage.setItem("registrationDone", "true")
            console.log(newCredentialInfo);
            alert("Registration done, data to be sent to server!")
        })
        .catch(error => {
            // Handle WebAuthn registration failure
            alert(error)
            console.error(error)
        });
}

export default handleRegistration