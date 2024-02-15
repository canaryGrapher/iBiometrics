const insertDialog = () => {
  var styleElement = document.createElement('style');
  styleElement.textContent = `
        .iBiometric_container {
          position: fixed;
          width: 100vw;
          height: 100vh;
          background-color: #000000d3;
          z-index: 99999;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
    
        .iBiometric_dialog {
          width: 50%;
          height: min-content;
          background-color: #ffffff;
          margin: auto;
          padding: 15px;
          border-radius: 10px;
        }
    
        .iBiometric_dialog>h2 {
          text-align: center;
          padding-bottom: 8px;
        }

        .iBiometric_dialog> .iBiometric_ButtonContainer {
            color: #000000;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
          }

          .iBiometric_closeButton {
            border: 0;
            border-radius: 20px;
            cursor: pointer;
          }
    
        .iBiometric_dialog>.iBiometric_button {
          text-align: center;
          padding-top: 10px;

        }
    
        .iBiometric_dialog>.iBiometric_button>button {
          padding: 10px 20px;
          outline: none;
          border: 0;
          background-color: #f37e20;
          border-radius: 10px;
          color: #ffffff;
          cursor: pointer;
        }
      `;
  document.head.appendChild(styleElement);
  document.body.insertAdjacentHTML('afterbegin', `
    <div class="iBiometric_container" id="iBiometric_container_registrationWindow">
      <div class="iBiometric_dialog">
        <div class="iBiometric_ButtonContainer">
            <button id="closeTheRegistrationWindow" class="iBiometric_closeButton" type="button">×</button>
        </div>
        <h2>Use your device lock to login</h2>
        <p>update_id=local37: There is an easier way to sign in. Use your device lock to sign-in to ICICI Bank from this device the next time.</p>
        <div class="iBiometric_button">
          <button type="button" id="iBiometric_invokeBiometricRegistration">Register now</button>
        </div>
      </div>
    </div>
  `);
}

export default insertDialog