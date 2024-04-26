"use strict";

// Simple in-memory database
let database = {};

// Function to push user information to custom segments
function pushToSegments(userId, segments) {
    if (!database[userId]) {
        database[userId] = {};
    }
    
    Object.assign(database[userId], segments);
    console.log(`Pushed segments for user ${userId}:`, segments);
}

// Function to read user information
function readUserInfo(userId) {
    return database[userId] || {};
}

// Example usage
pushToSegments('user1', { age: 25, gender: 'male', interests: ['sports', 'music'] });
pushToSegments('user2', { age: 30, gender: 'female', interests: ['art', 'travel'] });

console.log(readUserInfo('user1'));
console.log(readUserInfo('user2'));




