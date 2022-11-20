/**
 * @jest-environment jsdom
 */
import fetchMock, { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

import React from "react";
import { describe, expect, test } from '@jest/globals';
import { render, act } from '@testing-library/react';
import ContactByEmail from '../pages/contactByEmail';

describe('Page: Contact By Email', () => {
    // clean-up past mocks
    beforeEach(() => {
        fetchMock.resetMocks()
    });
    test('use jsdom in this test file', () => {
        expect(document.createElement('div')).not.toBeNull();
    });
    test('renders correctly', async () => {
        let findText: Function = () => { };
        let getTitle: Function = () => { };
        // mock response
        fetchMock.mockResponseOnce(JSON.stringify({
            success: true,
            data: {
                envelope: {},
                messageId: "messageId",
                accepted: ["accepted1,accepted2"],
                rejected: [],
                pending: [],
                response: "response XYZ"
            },
            message: "message was sent successfully",
        }))
        await act(async () => {
            const getLayout = ContactByEmail.getLayout ?? (page => page);
            const { getByTitle, findByText } = await render(getLayout(<ContactByEmail />));
            getTitle = getByTitle;
            findText = findByText;
        });
        // set form data
        getTitle(/Subject/).setAttribute("value", "business");
        getTitle(/Message/).setAttribute("value", "Hi, I would like to have business with you...");
        getTitle(/Name/).setAttribute("value", "Jack Banks");
        getTitle(/Email/).setAttribute("value", "user@domain.com");
        getTitle(/Phone/).setAttribute("value", "+972501234567");
        // verify form data before submit
        expect(getTitle(/Subject/).getAttribute("value")).toMatch(/business/);
        expect(getTitle(/Message/).getAttribute("value")).toMatch(/Hi, I would like to have business with you.../);
        expect(getTitle(/Name/).getAttribute("value")).toMatch(/Jack Banks/);
        expect(getTitle(/Email/).getAttribute("value")).toMatch(/user@domain.com/);
        expect(getTitle(/Phone/).getAttribute("value")).toMatch("+972501234567");
        // submit
        getTitle(/Submit/).click();
        expect(findText(/success/));
    });
});