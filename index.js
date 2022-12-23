"use strict";

// Dependencies
const request = require("request-async")

// Main
async function grab(ip){
    const response = await request(`https://hnisa.vercel.app/api/ip/info?ip=${ip}`)

    return JSON.parse(response.body).data
}

module.exports = grab