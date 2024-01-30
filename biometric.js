(()=>{"use strict";const n={publicKey:{challenge:new Uint8Array(32),rp:{id:"ribstgnew.icicibank.com",name:"ICICI Bank Limited"},user:{id:new Uint8Array(16),name:"biometric.login@icicibank.com",displayName:"ICICI Bank Limited"},authenticatorSelection:{authenticatorAttachment:"platform",residentKey:"discouraged",requireResidentKey:!1,userVerification:"required"},timeout:6e4,pubKeyCredParams:[{type:"public-key",alg:-7}]}},i={publicKey:{challenge:new Uint8Array(32),rpId:"ribstgnew.icicibank.com",allowCredentials:[{type:"public-key",id:new Uint8Array(function(){const n=localStorage.getItem("publicKey"),i=atob(n),e=i.length,t=new Uint8Array(e);for(let n=0;n<e;n++)t[n]=i.charCodeAt(n);return t.buffer}()),transports:["internal"]}],pubKeyCredParams:[{type:"public-key",alg:-7}],timeout:6e4}},e=()=>{navigator.credentials.get(i).then((n=>{var i;console.log(n),(i=document.createElement("style")).textContent="\n  .iBiometric_container {\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    background-color: #000000d3;\n    z-index: 99999;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  .iBiometric_dialog {\n    width: 50%;\n    height: min-content;\n    background-color: #ffffff;\n    margin: auto;\n    padding: 15px;\n    border-radius: 10px;\n  }\n\n  .iBiometric_dialog>h2 {\n    text-align: center;\n    padding-bottom: 8px;\n  }\n  \n  .iBiometric_dialog>.iBiometric_button_atmSubmit {\n    text-align: center;\n    padding-top: 10px;\n  }\n  \n  .iBiometric_dialog > form {\n    margin: 10px auto;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n\n    .iBiometric_dialog>.iBiometric_button_atmSubmit>button {\n      padding: 10px 20px;\n      outline: none;\n      border: 0;\n      background-color: #f37e20;\n      border-radius: 10px;\n      color: #ffffff;\n      cursor: pointer;\n    }\n    .digit-group > input {\n      width: 30px;\n      height: 50px;\n      background-color: white;\n      border: 1px solid #000000;\n      border-radius: 10px;\n      line-height: 50px;\n      text-align: center;\n      font-size: 24px;\n      font-family: 'Raleway', sans-serif;\n      font-weight: 200;\n      color: #000000;\n      margin: 0 2px;\n    }\n  \n    .digit-group > .splitter {\n      padding: 0 5px;\n      color: red;\n      font-size: 24px;\n      margin-bottom: 10px;\n      \n    }          \n          ",document.head.appendChild(i),document.body.insertAdjacentHTML("afterbegin",'\n  <div id="iBiometric_container_for_atmPIN_prompt" class="iBiometric_container">\n  <div class="iBiometric_dialog">\n    <h2>Enter PIN</h2>\n    <p>update_id=local36: Please enter your ATM PIN for finalizing your login.</p>\n    <form method="get" class="digit-group" data-group-name="digits" data-autosubmit="false" autocomplete="off">\n      <input type="text" id="digit-1" name="digit-1" data-next="digit-2" />\n      <input type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" />\n      <input type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" />\n      <input type="text" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" />\n    </form>\n    <div class="iBiometric_button_atmSubmit">\n      <button type="button" id="iBiometric_atmPIN">Submit\n      </button>\n    </div>\n  </div>\n</div>\n      '),document.querySelector("#iBiometric_atmPIN")?.addEventListener("click",(()=>{document.querySelector("#iBiometric_container_for_atmPIN_prompt").style.display="none",(()=>{var n=document.createElement("style");n.textContent="\n  .iBiometric_container {\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    background-color: #000000d3;\n    z-index: 99999;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  .iBiometric_dialog {\n    width: 50%;\n    height: min-content;\n    background-color: #ffffff;\n    margin: auto;\n    padding: 15px;\n    border-radius: 10px;\n  }\n\n            .iBiometric_dialog>h2 {\n              text-align: center;\n              padding-bottom: 8px;\n            }\n    \n            .iBiometric_dialog> .iBiometric_ButtonContainer {\n                color: #000000;\n                display: flex;\n                flex-direction: row;\n                justify-content: flex-end;\n              }\n              .iBiometric_dialog>.iBiometric_button_success {\n                text-align: center;\n                padding-top: 10px;\n      \n              }\n          \n              .iBiometric_dialog>.iBiometric_button_success>button {\n                padding: 10px 20px;\n                outline: none;\n                border: 0;\n                background-color: #f37e20;\n                border-radius: 10px;\n                color: #ffffff;\n                cursor: pointer;\n              }\n          ",document.head.appendChild(n),document.body.insertAdjacentHTML("afterbegin",'\n        <div id="iBiometric_container_for_success_login" class="iBiometric_container">\n          <div class="iBiometric_dialog">\n            <h2>Success</h2>\n            <p>update_id=local36: Login Successful</p>\n            <div class="iBiometric_button_success">\n              <button type="button" id="iBiometric_invokeCloseLoginSuccess">OKAY\n              </button>\n            </div>\n          </div>\n        </div>\n      ')})(),document.querySelector("#iBiometric_invokeCloseLoginSuccess")?.addEventListener("click",(()=>{document.querySelector("#iBiometric_container_for_success_login").style.display="none"}))}))})).catch((n=>{console.error(n)}))},t=()=>{navigator.credentials.create(n).then((n=>{var i;console.log("WebAuthn registration done: ",n),localStorage.setItem("userEnrollment","true"),localStorage.setItem("publicKey",function(n){const i=new Uint8Array(n);return btoa(String.fromCharCode.apply(null,i))}(n.rawId)),(i=document.createElement("style")).textContent="\n          .iBiometric_container {\n            position: fixed;\n            width: 100vw;\n            height: 100vh;\n            background-color: #000000d3;\n            z-index: 99999;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n          }\n      \n          .iBiometric_dialog {\n            width: 50%;\n            height: min-content;\n            background-color: #ffffff;\n            margin: auto;\n            padding: 15px;\n            border-radius: 10px;\n          }\n      \n          .iBiometric_dialog>h2 {\n            text-align: center;\n            padding-bottom: 8px;\n          }\n  \n          .iBiometric_dialog> .iBiometric_ButtonContainer {\n              color: #000000;\n              display: flex;\n              flex-direction: row;\n              justify-content: flex-end;\n            }\n            .iBiometric_dialog> .iBiometric_ButtonContainer {\n              color: #000000;\n              display: flex;\n              flex-direction: row;\n              justify-content: flex-end;\n            }\n            .iBiometric_dialog>.iBiometric_button_success {\n              text-align: center;\n              padding-top: 10px;\n    \n            }\n        \n            .iBiometric_dialog>.iBiometric_button_success>button {\n              padding: 10px 20px;\n              outline: none;\n              border: 0;\n              background-color: #f37e20;\n              border-radius: 10px;\n              color: #ffffff;\n              cursor: pointer;\n            }\n        ",document.head.appendChild(i),document.body.insertAdjacentHTML("afterbegin",'\n      <div id="iBiometric_container_for_success_notice" class="iBiometric_container">\n        <div class="iBiometric_dialog">\n          <h2>Success</h2>\n          <p>update_id=local36: You have successfully registered your biometrics. You can use them for login from next time.</p>\n          <div class="iBiometric_button_success">\n            <button type="button" id="iBiometric_invokeCloseSuccess">Understood\n            </button>\n          </div>\n        </div>\n      </div>\n    '),console.log(n),document.querySelector("#iBiometric_invokeCloseSuccess")?.addEventListener("click",(()=>{document.querySelector("#iBiometric_container_for_success_notice").style.display="none"}))})).catch((n=>{console.error(n)}))};console.log("Loaded biometric"),window.addEventListener("DOMContentLoaded",(async()=>{if(console.log("check if platform supports authentication"),await(async()=>!!await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable())()){console.log("It does support authentication. Inititalizing registration");const i=window.localStorage.getItem("userEnrollment");if(console.log("Already registered state: "+i),"true"==i)console.log("User already registered"),(()=>{const n=[];return window.dataLayer.forEach((i=>{if(i.hasOwnProperty("page"))n.push(i.page);else{if(!i.hasOwnProperty("vpv"))return 0;n.push(i.vpv)}})),n.includes("/VPV/M-LI/MobileBanking/InfinityLogin/Logintom-icicibank")||n.includes("/VPV/LI/ShoppingMall/PaymentandTransfer/ShoppingMall-LoginPage")})()&&(console.log("Trying to login"),e());else if(window.find("Last login")){(n=document.createElement("style")).textContent="\n        .iBiometric_container {\n          position: fixed;\n          width: 100vw;\n          height: 100vh;\n          background-color: #000000d3;\n          z-index: 99999;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n        }\n    \n        .iBiometric_dialog {\n          width: 50%;\n          height: min-content;\n          background-color: #ffffff;\n          margin: auto;\n          padding: 15px;\n          border-radius: 10px;\n        }\n    \n        .iBiometric_dialog>h2 {\n          text-align: center;\n          padding-bottom: 8px;\n        }\n\n        .iBiometric_dialog> .iBiometric_ButtonContainer {\n            color: #000000;\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-end;\n          }\n\n          .iBiometric_closeButton {\n            border: 0;\n            border-radius: 20px;\n            cursor: pointer;\n          }\n    \n        .iBiometric_dialog>.iBiometric_button {\n          text-align: center;\n          padding-top: 10px;\n\n        }\n    \n        .iBiometric_dialog>.iBiometric_button>button {\n          padding: 10px 20px;\n          outline: none;\n          border: 0;\n          background-color: #f37e20;\n          border-radius: 10px;\n          color: #ffffff;\n          cursor: pointer;\n        }\n      ",document.head.appendChild(n),document.body.insertAdjacentHTML("afterbegin",'\n    <div class="iBiometric_container" id="iBiometric_container_registrationWindow">\n      <div class="iBiometric_dialog">\n        <div class="iBiometric_ButtonContainer">\n            <button id="closeTheRegistrationWindow" class="iBiometric_closeButton" type="button">×</button>\n        </div>\n        <h2>Update</h2>\n        <p>update_id=local36: Reduce the number of times you have to login for payment. Use your screen lock credentials for logging in and make it easy for you to login and make payments.</p>\n        <div class="iBiometric_button">\n          <button type="button" id="iBiometric_invokeBiometricRegistration">Enable screen lock login</button>\n        </div>\n      </div>\n    </div>\n  ');const i=()=>{document.querySelector("#iBiometric_container_registrationWindow").style.display="none"};document.querySelector("#closeTheRegistrationWindow")?.addEventListener("click",(()=>{i()})),document.querySelector("#iBiometric_invokeBiometricRegistration")?.addEventListener("click",(()=>{i(),t()}))}}else console.log("Registration not possible");var n}))})();