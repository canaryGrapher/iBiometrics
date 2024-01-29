// update local25 -> removed prompt for Passkey creation
// update local26 -> changed identifier for localStorage
// update local27 -> add banner after successfull registration
// update local28 -> added Close button on success Banner
// update local29 -> added banner after biometric prompt on login page
// update local30 -> login page success banner content change
// update local31 -> ATM pin prompt added

import insertDialog from "./register"
import successDialog from "./success"
import successLoginDialog from "./login-success"
import atmPromptDialog from "./atmPrompt"

export { insertDialog, successDialog, successLoginDialog, atmPromptDialog }