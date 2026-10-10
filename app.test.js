
const test = require('node:test');
const assert = require('node:assert/strict');
const { greet } = require('./app');

test('greets a user by name', () => {
    assert.equal(greet('Dave'), 'Hello, Dave!');
});

test('greets another user correctly', () => {
    assert.equal(greet('Jenkins'), 'Hello, Jenkins!');
});

test('greets the default user', () => {
    assert.equal(greet(), 'Hello, davyy!');
});