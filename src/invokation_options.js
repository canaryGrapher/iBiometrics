const registrationOptions = {
    publicKey: {
        challenge: new Uint8Array(32), // Replace with actual challenge
        rp: {
            id: "ribstgnew.icicibank.com",
            name: "ICICI Bank Limited"
        },
        user: {
            id: new Uint8Array([12, 13, 14, 15]),
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
        rp: {
            id: "ribstgnew.icicibank.com",
            name: "ICICI Bank Limited"
        },
        user: {
            id: new Uint8Array(16), // Optional
            name: "john.doe@example.com",
            displayName: "John Doe"
        },
        allowCredentials: [{
            type: 'public-key',
            id: new Uint8Array([12, 13, 14, 15]), // Optional
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