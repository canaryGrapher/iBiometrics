// update local25 -> Removed prompt for Passkey creation
// update local26 -> Changed identifier for localStorage
// update local27 -> Add banner after successfull registration
// update local28 -> Added Close button on success Banner
// update local29 -> Added banner after biometric prompt on login page
// update local30 -> Login page success banner content change
// update local31 -> ATM pin prompt added
// update local32 -> File name import error fixed
// update local33 -> Success dialog issue
// update local34 -> Removed redundant files
// update local35 -> Fixed ATM PIN prompt
// update local36 -> Changed font color of ATM prompt to black
// update local37 -> Added SMS prompt

import insertDialog from "./register"
import successDialog from "./success"
import successLoginDialog from "./login-success"
import atmPromptDialog from "./atm-prompt"
import smsDialog from "./sms-prompt"
import gcaPromptDialog from "./gca-prompt"

export { insertDialog, successDialog, successLoginDialog, atmPromptDialog, smsDialog, gcaPromptDialog }