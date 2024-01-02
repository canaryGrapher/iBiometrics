// update local25 -> removed prompt for Passkey creation
// update local26 -> changed identifier for localStorage
// update local27 -> add banner after successfull registration

const successDialog = () => {
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
        `;
    document.head.appendChild(styleElement);
    document.body.insertAdjacentHTML('afterbegin', `
      <div class="iBiometric_container">
        <div class="iBiometric_dialog">
          <div class="iBiometric_ButtonContainer">
              <button class="iBiometric_closeButton" type="button">×</button>
          </div>
          <h2>Success</h2>
          <p>update_id=local27: You have successfully registered your biometrics. You can use them for login from next time.</p>
        </div>
      </div>
    `);
}

export default successDialog