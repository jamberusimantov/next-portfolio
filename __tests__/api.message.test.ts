import { describe, expect, test } from '@jest/globals';
import { customEmail } from "../pages/api/message"


const emailData = {
    name: "myName",
    email: "myName@domain.com",
    phone: "9876543210",
    subject: "mySubject",
    message: "myMessage",
}

describe('customEmail', () => {
    test("custom email contains data", () => {
        expect(customEmail(emailData).match(/myName/)).not.toEqual(null);
        expect(customEmail(emailData).match(/myName@domain.com/)).not.toEqual(null);
        expect(customEmail(emailData).match(/9876543210/)).not.toEqual(null);
        expect(customEmail(emailData).match(/mySubject/)).not.toEqual(null);
        expect(customEmail(emailData).match(/myMessage/)).not.toEqual(null);
    })
})