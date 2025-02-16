// app/api/cors.js
import { NextRequest, NextResponse } from 'next/server';

export function cors(req, res, next) {
    // Specify the exact domain of your deployed website
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