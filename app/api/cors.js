// import { NextRequest, NextResponse } from 'next/server';

// export function cors(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*'); // Replace '*' with specific domains as needed
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//     // Handle preflight requests
//     if (req.method === 'OPTIONS') {
//         res.status(200).end();
//         return;
//     }

//     next();
// }

// app/api/cors.js
import { NextRequest, NextResponse } from 'next/server';

export function cors(req, res, next) {
    // Specify the exact domain
    res.setHeader('Access-Control-Allow-Origin', 'https://devbasit-web-portfolio.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    next();
}