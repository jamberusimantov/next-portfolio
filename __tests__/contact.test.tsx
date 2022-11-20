/**
 * @jest-environment jsdom
 */
import React from "react";
import { describe, expect, test } from '@jest/globals';
import { render, act } from '@testing-library/react';
import Contact from "../pages/contact";


describe('Page: Contact', () => {
    test('use jsdom in this test file', () => {
        expect(document.createElement('div')).not.toBeNull();
    });
    test('renders correctly', async () => {
        let getText: Function = () => { };
        await act(async () => {
            const getLayout = Contact.getLayout ?? (page => page);
            const {getByText} = await render(getLayout(<Contact />));
            getText = getByText;
        })
        expect(getText(/חייג 052-8405624/));
        expect(getText(/שלח דוא"ל/));
        expect(getText(/שלח וואטסאפ/));
        expect(getText(/סימן טוב ג'מברו בלינקדאין/));
    });
});