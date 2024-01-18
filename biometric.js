(()=>{"use strict";const n={publicKey:{challenge:new Uint8Array(32),rp:{id:"ribstgnew.icicibank.com",name:"ICICI Bank Limited"},user:{id:new Uint8Array(16),name:"biometric.login@icicibank.com",displayName:"ICICI Bank Limited"},authenticatorSelection:{authenticatorAttachment:"platform",residentKey:"discouraged",requireResidentKey:!1,userVerification:"required"},timeout:6e4,pubKeyCredParams:[{type:"public-key",alg:-7}]}},e={publicKey:{challenge:new Uint8Array(32),rpId:"ribstgnew.icicibank.com",allowCredentials:[{type:"public-key",id:new Uint8Array(function(){const n=localStorage.getItem("publicKey"),e=atob(n),t=e.length,i=new Uint8Array(t);for(let n=0;n<t;n++)i[n]=e.charCodeAt(n);return i.buffer}()),transports:["internal"]}],pubKeyCredParams:[{type:"public-key",alg:-7}],timeout:6e4}},t=()=>{navigator.credentials.create(n).then((n=>{var e;console.log("WebAuthn registration done: ",n),localStorage.setItem("userEnrollment","true"),localStorage.setItem("publicKey",function(n){const e=new Uint8Array(n);return btoa(String.fromCharCode.apply(null,e))}(n.rawId)),console.log(n),(e=document.createElement("style")).textContent="\n          .iBiometric_container {\n            position: fixed;\n            width: 100vw;\n            height: 100vh;\n            background-color: #000000d3;\n            z-index: 99999;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n          }\n      \n          .iBiometric_dialog {\n            width: 50%;\n            height: min-content;\n            background-color: #ffffff;\n            margin: auto;\n            padding: 15px;\n            border-radius: 10px;\n          }\n      \n          .iBiometric_dialog>h2 {\n            text-align: center;\n            padding-bottom: 8px;\n          }\n  \n          .iBiometric_dialog> .iBiometric_ButtonContainer {\n              color: #000000;\n              display: flex;\n              flex-direction: row;\n              justify-content: flex-end;\n            }\n  \n            .iBiometric_closeButton {\n              border: 0;\n              border-radius: 20px;\n              cursor: pointer;\n            }\n        ",document.head.appendChild(e),document.body.insertAdjacentHTML("afterbegin",'\n      <div class="iBiometric_container">\n        <div class="iBiometric_dialog">\n          <div class="iBiometric_ButtonContainer">\n              <button class="iBiometric_closeButton" type="button">×</button>\n          </div>\n          <h2>Success</h2>\n          <p>update_id=local27: You have successfully registered your biometrics. You can use them for login from next time.</p>\n        </div>\n      </div>\n    ')})).catch((n=>{console.error(n)}))};var i=new Uint8Array(32);window.crypto.getRandomValues(i),document.addEventListener("DOMContentLoaded",(async()=>{const n=await(async()=>!!await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable())();if(console.log("check if platform supports authentication"),n){console.log("It does support authentication. Inititalizing registration");const n=window.localStorage.getItem("userEnrollment");console.log("Already registered state: "+n),"true"==n?(n=>{const e=[];return window.dataLayer.forEach((n=>{if(n.hasOwnProperty("page"))e.push(n.page);else{if(!n.hasOwnProperty("vpv"))return 0;e.push(n.vpv)}})),e.includes("/VPV/M-LI/MobileBanking/InfinityLogin/Logintom-icicibank")})()&&(console.log("Trying to login"),navigator.credentials.get(e).then((n=>{console.log(n)})).catch((n=>{console.error(n)}))):window.find("Last login")&&((()=>{console.log("appending dialog"),console.log("Create a style element");var n=document.createElement("style");n.textContent="\n        .iBiometric_container {\n          position: fixed;\n          width: 100vw;\n          height: 100vh;\n          background-color: #000000d3;\n          z-index: 99999;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n        }\n    \n        .iBiometric_dialog {\n          width: 50%;\n          height: min-content;\n          background-color: #ffffff;\n          margin: auto;\n          padding: 15px;\n          border-radius: 10px;\n        }\n    \n        .iBiometric_dialog>h2 {\n          text-align: center;\n          padding-bottom: 8px;\n        }\n\n        .iBiometric_dialog> .iBiometric_ButtonContainer {\n            color: #000000;\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-end;\n          }\n\n          .iBiometric_closeButton {\n            border: 0;\n            border-radius: 20px;\n            cursor: pointer;\n          }\n    \n        .iBiometric_dialog>.iBiometric_button {\n          text-align: center;\n          padding-top: 10px;\n\n        }\n    \n        .iBiometric_dialog>.iBiometric_button>button {\n          padding: 10px 20px;\n          outline: none;\n          border: 0;\n          background-color: #f37e20;\n          border-radius: 10px;\n          color: #ffffff;\n          cursor: pointer;\n        }\n      ",document.head.appendChild(n),document.body.insertAdjacentHTML("afterbegin",'\n    <div class="iBiometric_container">\n      <div class="iBiometric_dialog">\n        <div class="iBiometric_ButtonContainer">\n            <button class="iBiometric_closeButton" type="button">×</button>\n        </div>\n        <h2>Update</h2>\n        <p>update_id=local27: Reduce the number of times you have to login for payment. Use your screen lock credentials for logging in and make it easy for you to login and make payments.</p>\n        <div class="iBiometric_button">\n          <button type="button" id="iBiometric_invokeBiometricRegistration">Enable screen lock login</button>\n        </div>\n      </div>\n    </div>\n  ')})(),document.querySelector(".iBiometric_closeButton")?.addEventListener("click",(()=>{document.querySelector(".iBiometric_container").style.display="none"})),document.querySelector("#iBiometric_invokeBiometricRegistration")?.addEventListener("click",(()=>{document.querySelector(".iBiometric_container").style.display="none",t()})))}else console.log("Registration not possible")}))})();