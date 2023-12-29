import { registrationOptions } from "../invokation_options"

function arrayBufferToBase64(buffer) {
    const binary = new Uint8Array(buffer);
    return btoa(String.fromCharCode.apply(null, binary));
}

const handleRegistration = () => {
    navigator.credentials.create(registrationOptions)
        .then((newCredentialInfo) => {
            // Handle successful WebAuthn registration
            console.log("WebAuthn registration done: ", newCredentialInfo)
            localStorage.setItem("userEnrollment", "true")
            localStorage.setItem("publicKey", arrayBufferToBase64(newCredentialInfo.rawId))
            console.log(newCredentialInfo);
            // alert("Registration done, data to be sent to server!")
        })
        .catch(error => {
            // Handle WebAuthn registration failure
            // alert("Failure in registration")
            console.error(error)
        });
}

export default handleRegistration