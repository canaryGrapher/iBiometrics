import { registrationOptions } from "../invokation_options"
import { successDialog } from "../prompt";

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
            successDialog()
            console.log(newCredentialInfo);
            document.querySelector("#iBiometric_invokeCloseSuccess")?.addEventListener("click", () => {
                const dialogContainer = document.querySelector('#iBiometric_container_for_success_notice');
                dialogContainer.style.display = 'none';
            })
        })
        .catch(error => {
            // Handle WebAuthn registration failure
            // alert("Failure in registration")
            console.error(error)
        });
}

export default handleRegistration