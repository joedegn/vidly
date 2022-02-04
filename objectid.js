/*
 *_id: 61f313a80f8e83e9d482c800
 *
 *12 bytes
 *  4 bytes: timestamp
 *      can sort by ID to sort by time :D
 *      3 bytes: machine identifier
 *      2 bytes: process identifier
 *      3 bytes: counter
 *
 *1 byte = 8 bits 256
 *3 bytes ~ 16Milly
 *
 *Driver -> MongoDB
 */

const mongoose = require('mongoose');

const id = new mongoose.Types.ObjectId();
const isValid = mongoose.Types.ObjectId.isValid('1234');
console.log(isValid);
console.log(id.getTimestamp());