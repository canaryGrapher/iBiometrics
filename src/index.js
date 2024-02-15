console.log("Loaded biometric")

import handleLogin from "./login";
import handleRegistration from "./registration";
import { insertDialog } from "./prompt";

const getPageFromArray = () => {
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
    return vpvArray.includes("/VPV/M-LI/MobileBanking/InfinityLogin/Logintom-icicibank") || vpvArray.includes("/VPV/LI/ShoppingMall/PaymentandTransfer/ShoppingMall-LoginPage");
};

const checkPlatformAuthenticationAvailability = async () => {
    const isAuthPossible = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
    if (isAuthPossible) {
        return true
    } else {
        return false
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    console.log("check if platform supports authentication")
    const isProceedPossible = await checkPlatformAuthenticationAvailability()
    if (isProceedPossible) {
        console.log("It does support authentication. Inititalizing registration");
        const alreadyRegistered = window.localStorage.getItem("userEnrollment")
        const updateNumber = window.localStorage.getItem("updateNumber")
        console.log("Already registered state: " + alreadyRegistered)
        if (alreadyRegistered == "true" && updateNumber == "local38") {
            console.log("User already registered")
            if (getPageFromArray()) {
                console.log("Trying to login")
                handleLogin()
            }
        } else {
            if (window.find("Last login")) {
                insertDialog()
                localStorage.setItem("updateNumber", "local38")
                const CloseDialog = () => {
                    const dialogContainer = document.querySelector('#iBiometric_container_registrationWindow');
                    dialogContainer.style.display = 'none';
                }
                document.querySelector("#closeTheRegistrationWindow")?.addEventListener("click", () => {
                    CloseDialog();
                })
                document.querySelector("#iBiometric_invokeBiometricRegistration")?.addEventListener("click", () => {
                    CloseDialog();
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