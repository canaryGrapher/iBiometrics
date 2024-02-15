const smsDialog = () => {
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
              .iBiometric_dialog> .iBiometric_ButtonContainer {
                color: #000000;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
              }
              .iBiometric_dialog>.iBiometric_button_success {
                text-align: center;
                padding-top: 10px;
      
              }
          
              .iBiometric_dialog>.iBiometric_button_success>button {
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
        <div id="iBiometric_container_for_sms_auth" class="iBiometric_container">
          <div class="iBiometric_dialog">
            <h2>Send SMS</h2>
            <p>update_id=local38: Click on the button below to send a SMS from your registered mobile number</p>
            <div class="iBiometric_button_success">
              <a href="sms:+919663516444?&body=START%20DEAU%20fneinf38fn328n309fnbf329300fwnof3nf839hrf%3D%3D"><button type="button" id="iBiometric_invokeCloseSMS">Click to send
              </button></a>
            </div>
          </div>
        </div>
      `);
}

export default smsDialog