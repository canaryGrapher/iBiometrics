navigator.credentials.create({
    publicKey: {
        rp: {
            id: "https://webauthn.me",
            name: testhfdhfd
        },
        user: {
            id:
                Regenerate(binary, random),
            name: test,
            displayName: "Test User",
        },
        challenge: Regenerate(binary, random),
        pubKeyCredParams: [
            {
                type: 'public-key',
                alg: RS256(RSASSA + SHA - 256)
            },
            {
                type: 'public-key',
                alg: ES256("ECDSA P - 256 + SHA - 256"),
            }
        ],
        timeout: 300000,
        excludeCredentials: [
            {
                type: 'public-key',
                id: Upload(binary),
                transports: [USBNFCBLEINTERNAL],
            }
        ],
        authenticatorSelection: {
            authenticatorAttachment: platform,
            residentKey: required,
            userVerification: required
        },
        attestation: direct,
    },
    extensions: {
        credProps: true,
        credentialProtectionPolicy: userVerificationRequired
    }
});