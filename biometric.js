(()=>{"use strict";const e={publicKey:{challenge:new Uint8Array(32),rp:{id:"ribstgnew.icicibank.com",name:"ICICI Bank Limited"},user:{id:new Uint8Array(16),name:"john.doe@example.com",displayName:"John Doe"},authenticatorSelection:{authenticatorAttachment:"platform",residentKey:"required",userVerification:"required"},pubKeyCredParams:[{type:"public-key",alg:-7}]}},n={publicKey:{challenge:new Uint8Array(32),rp:{id:"ribstgnew.icicibank.com",name:"ICICI Bank Limited"},user:{id:new Uint8Array(16),name:"john.doe@example.com",displayName:"John Doe"},authenticatorSelection:{authenticatorAttachment:"platform",residentKey:"required",userVerification:"required"},pubKeyCredParams:[{type:"public-key",alg:-7}]}};var t=new Uint8Array(32);window.crypto.getRandomValues(t);const i=e=>{const n=[];return window.dataLayer.forEach((e=>{if(e.hasOwnProperty("page"))n.push(e.page);else{if(!e.hasOwnProperty("vpv"))return 0;n.push(e.vpv)}})),n.includes(e)};document.addEventListener("DOMContentLoaded",(async()=>{const t=await(async()=>!!await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable())();if(console.log("check if platform supports authentication"),t){console.log("It does support authentication. Inititalizing registration");const t=window.localStorage.getItem("registrationDone");console.log("Already registered state: "+t),"true"==t?i("/VPV/LI/ShoppingMall/PaymentandTransfer/ShoppingMall-LoginPage")&&(console.log("Trying to login"),navigator.credentials.get(n).then((e=>{console.log(e)})).catch((e=>{console.error(e)}))):i("/VPV/LI/ShoppingMall/PaymentandTransfer/ShoppingMall-GCAConfirmation")&&((()=>{console.log("appending dialog"),console.log("Create a style element");var e=document.createElement("style");e.textContent="\n        .iBiometric_container {\n          position: fixed;\n          width: 100vw;\n          height: 100vh;\n          background-color: #000000d3;\n          z-index: 99999;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n        }\n    \n        .iBiometric_dialog {\n          width: 30%;\n          height: fit-content;\n          background-color: #ffffff;\n          margin: auto;\n          padding: 15px;\n          border-radius: 10px;\n        }\n    \n        .iBiometric_dialog>h2 {\n          text-align: center;\n          padding-bottom: 8px;\n        }\n\n        .iBiometric_dialog> .iBiometric_ButtonContainer {\n            color: #000000;\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-end;\n          }\n\n          .iBiometric_closeButton {\n            border: 0;\n            border-radius: 20px;\n            cursor: pointer;\n          }\n    \n        .iBiometric_dialog>.iBiometric_button {\n          text-align: center;\n          padding-top: 10px;\n\n        }\n    \n        .iBiometric_dialog>.iBiometric_button>button {\n          padding: 10px 20px;\n          outline: none;\n          border: 0;\n          background-color: #f37e20;\n          border-radius: 10px;\n          color: #ffffff;\n          cursor: pointer;\n        }\n      ",document.head.appendChild(e),document.body.insertAdjacentHTML("afterbegin",'\n    <div class="iBiometric_container">\n      <div class="iBiometric_dialog">\n        <div class="iBiometric_ButtonContainer">\n            <button class="iBiometric_closeButton" type="button">×</button>\n        </div>\n        <h2>Update</h2>\n        <p>| Reduce the number of times you have to login for payment. Use your screen lock credentials for logging in.</p>\n        <div class="iBiometric_button">\n          <button type="button" id="iBiometric_invokeBiometricRegistration">Enable screen lock login</button>\n        </div>\n      </div>\n    </div>\n  ')})(),document.querySelector(".iBiometric_closeButton")?.addEventListener("click",(()=>{document.querySelector(".iBiometric_container").style.display="none"})),document.querySelector("#iBiometric_invokeBiometricRegistration")?.addEventListener("click",(()=>{document.querySelector(".iBiometric_container").style.display="none",navigator.credentials.create(e).then((e=>{console.log("WebAuthn registration done: ",e),localStorage.setItem("registrationDone","true"),console.log(e)})).catch((e=>{console.error(e)}))})))}else console.log("Registration not possible")}))})();