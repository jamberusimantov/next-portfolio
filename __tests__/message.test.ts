import { describe, expect, test } from '@jest/globals';
import { customEmail } from "../pages/api/message"

const emailData = {
    name: "myName",
    email: "myName@domain.com",
    phone: "9876543210",
    subject: "mySubject",
    message: "myMessage",
}

describe('Email', () => {
    test(`contain name <${emailData.name}>`, () => {
        expect(customEmail(emailData).match(/myName/)).not.toEqual(null);
    })
    // test(`contain email <${emailData.email}>`, () => {
    //     expect(customEmail(emailData).match(/myName@domain.com/)).not.toEqual(null);
    // })
    // test(`contain phone <${emailData.phone}>`, () => {
    //     expect(customEmail(emailData).match(/9876543210/)).not.toEqual(null);
    // })
    // test(`contain subject <${emailData.subject}>`, () => {
    //     expect(customEmail(emailData).match(/mySubject/)).not.toEqual(null);
    // })
    // test(`contain message <${emailData.message}>`, () => {
    //     expect(customEmail(emailData).match(/myMessage/)).not.toEqual(null);
    // })
})