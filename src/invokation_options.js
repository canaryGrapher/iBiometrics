

// Function to convert Base64-encoded string to ArrayBuffer
function base64ToArrayBuffer() {
    const base64String = localStorage.getItem("publicKey")
    const binaryString = atob(base64String);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

const registrationOptions = {
    publicKey: {
        challenge: new Uint8Array(32), // Replace with actual challenge
        rp: {
            id: "ribstgnew.icicibank.com",
            name: "ICICI Bank Limited"
        },
        user: {
            id: new Uint8Array(16), // Optional
            name: "john.doe@example.com",
            displayName: "John Doe"
        },
        authenticatorSelection: {
            // only stick to device specific authentication like Windows Hello / TouchID / FingerPrint authentication
            authenticatorAttachment: 'platform', // Corrected property name
            residentKey: 'required',
            userVerification: 'required'
        },
        pubKeyCredParams: [{ type: "public-key", alg: -7 }]
    }
};

const loginOptions = {
    publicKey: {
        challenge: new Uint8Array(32), // Replace with actual challenge
        rpId: "ribstgnew.icicibank.com",
        allowCredentials: [{
            type: 'public-key',
            id: new Uint8Array(base64ToArrayBuffer()), // Optional
        }],
        authenticatorSelection: {
            // only stick to device specific authentication like Windows Hello / TouchID / FingerPrint authentication
            authenticatorAttachment: 'platform', // Corrected property name
            residentKey: 'required',
            userVerification: 'required'
        },
        pubKeyCredParams: [{ type: "public-key", alg: -7 }]
    }
};

export { registrationOptions, loginOptions }