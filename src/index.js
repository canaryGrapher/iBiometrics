import handleLogin from "./login";
import handleRegistration from "./registration";
import { insertDialog } from "./prompt";

// this challenge should be generated by the server
var challenge = new Uint8Array(32);
window.crypto.getRandomValues(challenge);

const getPageFromArray = (searchVPV) => {
    const vpvArray = [];
    window.dataLayer.forEach(item => {
        // eslint-disable-next-line no-prototype-builtins
        if (item.hasOwnProperty('page')) {
            vpvArray.push(item.page);
            // eslint-disable-next-line no-prototype-builtins
        } else if (item.hasOwnProperty('vpv')) {
            vpvArray.push(item.vpv);
        } else {
            return 0
        };
    });
    return vpvArray.includes(searchVPV);
};

const checkPlatformAuthenticationAvailability = async () => {
    const isAuthPossible = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
    if (isAuthPossible) {
        return true
    } else {
        return false
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const isProceedPossible = await checkPlatformAuthenticationAvailability()
    console.log("check if platform supports authentication")
    if (isProceedPossible) {
        console.log("It does support authentication. Inititalizing registration");
        const alreadyRegistered = window.localStorage.getItem("userEnrollment")
        console.log("Already registered state: " + alreadyRegistered)
        if (alreadyRegistered == "true") {
            if (getPageFromArray("/VPV/M-LI/MobileBanking/InfinityLogin/Logintom-icicibank")) {
                console.log("Trying to login")
                handleLogin()
            }
        } else {
            if (window.find("Last login")) {
                insertDialog()
                document.querySelector(".iBiometric_closeButton")?.addEventListener("click", () => {
                    const dialogContainer = document.querySelector('.iBiometric_container');
                    dialogContainer.style.display = 'none';
                })
                document.querySelector("#iBiometric_invokeBiometricRegistration")?.addEventListener("click", () => {
                    const dialogContainer = document.querySelector('.iBiometric_container');
                    dialogContainer.style.display = 'none';
                    handleRegistration()
                })
            }
        }
    }
    else {
        // alert('Registration not possible')
        console.log('Registration not possible')
    }
})