// this user ID should be autofilled either by the Web app, or be read through window variable
const generateChallenge = (userID) => {
    return Uint8Array.from(window.atob(userID), c => c.charCodeAt(0))
}

var publicKey = {
    // The challenge is produced by the server; see the Security Considerations
    challenge: new Uint8Array([21, 31, 105 /* 29 more random bytes generated by the server */]),

    // Relying Party:
    rp: {
        id: "localhost",
        name: "localhost"
    },

    // User:
    user: {
        id: Uint8Array.from(window.atob("MIIBkzCCATigAwIBAjCCAZMwggE4oAMCAQIwggGTMII="), c => c.charCodeAt(0)),
        name: "alex.mueller@example.com",
        displayName: "Alex Müller",
    },

    // This Relying Party will accept either an ES256 or RS256 credential, but
    // prefers an ES256 credential.
    pubKeyCredParams: [
        {
            type: "public-key",
            alg: -7 // "ES256" as registered in the IANA COSE Algorithms registry
        },
        {
            type: "public-key",
            alg: -257 // Value registered by this specification for "RS256"
        }
    ],

    authenticatorSelection: {
        // Try to use UV if possible. This is also the default.
        userVerification: "preferred"
    },

    timeout: 360000,  // 6 minutes
    excludeCredentials: [
        // Don’t re-register any authenticator that has one of these credentials
        { "id": Uint8Array.from(window.atob("ufJWp8YGlibm1Kd9XQBWN1WAw2jy5In2Xhon9HAqcXE="), c => c.charCodeAt(0)), "type": "public-key" },
        { "id": Uint8Array.from(window.atob("E/e1dhZc++mIsz4f9hb6NifAzJpF1V4mEtRlIPBiWdY="), c => c.charCodeAt(0)), "type": "public-key" }
    ],

    // Make excludeCredentials check backwards compatible with credentials registered with U2F
};

// generating the public key to be sent to the server
// const credentialOptions = (userID) => {
//     return ({
//         // A random challenge that is generated by the server. It is used to mitigate MITM attack
//         // challenge: generateChallenge(userID),
//         challenge: Uint8Array.from(window.atob("jhagf78qwy7"), c => c.charCodeAt(0)),
//         // Information about relying party. rp.name is the only mandatory field. rp.name contains relying party friendly name. rp.icon contains a link to the RP icon that you want the authenticator to display. rp.id contains the relying party identifier
//         rp: {
//             name: 'localhost',
//             id: 'localhost'
//         },

//         // Information about user. id, name and displayName fields are mandatory
//         user: {
//             id: "jhagf78qwy7",
//             name: 'user@example.com',
//             displayName: 'user@example.com'
//         },

//         // A list of signing algorithms the server supports. Right now, FIDO2 servers are mandated to support RS1, RS256, ES256 and ED25519.
//         pubKeyCredParams: [
//             { type: 'public-key', alg: -7 },
//             { type: 'public-key', alg: -257 }
//         ],
//         timeout: 1800000,
//         attestation: 'direct',
//         authenticatorSelection: {
//             authenticatorAttachment: 'platform',
//             userVerification: 'required',
//             requireResidentKey: true
//         },
//         extensions: {
//             credProps: true,
//             minPinLength: true
//         }
//     })
// }

export { publicKey } 