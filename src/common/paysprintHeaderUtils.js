const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { env } = require('process');



const getHeaders = () => {
    const jwtKey = env.PAYSPRINT_JWT_KEY;
    // const reqid = generateRandomNumber(8); // Generate a random number with 8 digits
    const jwtToken = getToken();

    const headers = {
        'Content-Type': 'application/json',
        'Token': jwtToken,
        'Accept': 'application/json',
    };

    // Add Authorizedkey header based on environment
    console.log(env.NODE_ENV);
    if (env.NODE_ENV !== 'production') {
        headers['Authorisedkey'] = env.PAYSPRINT_AUTHORISED_KEY;
    }

    return headers;
};

function getRandom() {
    return Math.floor(Math.random() * 1000000000);
}

function getTimestamp() {
    return Math.floor(Date.now() / 1000);
}

function getToken() {
    const random = getRandom();
    const timestamp = getTimestamp();
    const secretKey = Buffer.from(env.PAYSPRINT_JWT_KEY) // Base64 encoding of the secret key

    const token = jwt.sign({
        "iss": "PSPRINT", // Issuer
        "timestamp": timestamp,
        "partnerId":  env.PAYSPRINT_PARTNER_ID,
        "product": "WALLET",
        "reqid": random
    }, secretKey, {
        algorithm: 'HS256',
        header: {
            "typ": "JWT",
            "alg": "HS256"
        }
    });

    return token;
}


// const generateJWTToken = (reqid, jwtKey) => {
//     console.log('JWT Key:', jwtKey); // Log the JWT Key
//     const timestamp = new Date().getTime();
//     const partnerId = env.PAYSPRINT_PARTNER_ID;

//     const map = {
//         timestamp: new Date().getTime(),
//         partnerId: env.PAYSPRINT_PARTNER_ID,
//         reqid: reqid
//     };
//     console.log(map);

//     return generateJWTTokenfromMap(map, jwtKey);
// };

// const generateJWTTokenfromMap = (valueObj, key) => {
//     const claims = {};
//     for (const [key, value] of Object.entries(valueObj)) {
//         claims[key] = value;
//     }
//     const base64Key = Buffer.from(key).toString('base64');
//     return jwt.sign(claims, base64Key, { algorithm: 'HS256' });
// };

module.exports = { getHeaders };
