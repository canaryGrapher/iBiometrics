(()=>{"use strict";const e={challenge:new Uint8Array([21,31,105]),rp:{id:"ribstgnew.icicibank.com",name:"ICICI Bank Limited"},user:{id:Uint8Array.from(window.atob("MICICIBankDataAjJohnDoewggE4oAMCAQIwggGTMII="),(e=>e.charCodeAt(0))),name:"john_doe@icicibank.com",displayName:"John Doe"},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],authenticatorSelection:{authenticatorAttachment:"platform"},timeout:36e4},n={challenge:new Uint8Array([21,31,105]),timeout:36e4,rpId:"ribstgnew.icicibank.com",authenticatorSelection:{userVerification:"preferred"}};var t=new Uint8Array(32);window.crypto.getRandomValues(t);const i=e=>{const n=[];return window.dataLayer.forEach((e=>{if(e.hasOwnProperty("page"))n.push(e.page);else{if(!e.hasOwnProperty("vpv"))return 0;n.push(e.vpv)}})),n.includes(e)};document.addEventListener("DOMContentLoaded",(async()=>{const t=await(async()=>!!await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable())();if(console.log("check if platform supports authentication"),t){console.log("It does support authentication. Inititalizing registration");const t=window.localStorage.getItem("registrationDone");console.log("Already registered state: "+t),"true"==t?i("/VPV/LI/ShoppingMall/PaymentandTransfer/ShoppingMall-LoginPage")&&(console.log("Trying to login"),navigator.credentials.get({loginOptions:n}).then((e=>{alert("Credentials captured. Server to verify and login/redirect"),console.log(e)})).catch((e=>{console.error(e)}))):i("/VPV/LI/ShoppingMall/PaymentandTransfer/ShoppingMall-GCAConfirmation")&&((()=>{console.log("appending dialog"),console.log("Create a style element");var e=document.createElement("style");e.textContent="\n        .iBiometric_container {\n          position: fixed;\n          width: 100vw;\n          height: 100vh;\n          background-color: #000000d3;\n          z-index: 99999;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n        }\n    \n        .iBiometric_dialog {\n          width: 30%;\n          min-height: 30%;\n          height: fit-content;\n          background-color: #ffffff;\n          margin: auto;\n          padding: 20px;\n          border-radius: 10px;\n        }\n    \n        .iBiometric_dialog>h2 {\n          text-align: center;\n          padding-bottom: 8px;\n        }\n\n        .iBiometric_dialog> .iBiometric_ButtonContainer {\n            color: #000000;\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-end;\n          }\n\n          .iBiometric_closeButton {\n            border: 0;\n            border-radius: 20px;\n            cursor: pointer;\n          }\n    \n        .iBiometric_dialog>.iBiometric_button {\n          text-align: center;\n          padding-top: 10px;\n\n        }\n    \n        .iBiometric_dialog>.iBiometric_button>button {\n          padding: 10px 20px;\n          outline: none;\n          border: 0;\n          background-color: #f37e20;\n          border-radius: 10px;\n          color: #ffffff;\n          cursor: pointer;\n        }\n      ",document.head.appendChild(e),document.body.insertAdjacentHTML("afterbegin",'\n    <div class="iBiometric_container">\n      <div class="iBiometric_dialog">\n        <div class="iBiometric_ButtonContainer">\n            <button class="iBiometric_closeButton" type="button">×</button>\n        </div>\n        <h2>Update</h2>\n        <p>Reduce the number of times you have to login for payment. Use your screen lock credentials for logging in.</p>\n        <div class="iBiometric_button">\n          <button type="button" id="iBiometric_invokeBiometricRegistration">Enable screen lock login</button>\n        </div>\n      </div>\n    </div>\n  ')})(),document.querySelector(".iBiometric_closeButton")?.addEventListener("click",(()=>{document.querySelector(".iBiometric_container").style.display="none"})),document.querySelector("#iBiometric_invokeBiometricRegistration")?.addEventListener("click",(()=>{document.querySelector(".iBiometric_container").style.display="none",navigator.credentials.create({registrationOptions:e}).then((e=>{console.log("WebAuthn registration done: ",e),localStorage.setItem("registrationDone","true"),console.log(e),alert("Registration done, data to be sent to server!")})).catch((e=>{console.error(e)}))})))}else alert("Registration not possible")}))})();