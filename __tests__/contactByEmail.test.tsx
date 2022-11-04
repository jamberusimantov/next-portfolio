/**
 * @jest-environment jsdom
 */
import React, { ReactElement, JSXElementConstructor } from "react";
import { describe, expect, test } from '@jest/globals';
import { render, act } from '@testing-library/react';
import ContactByEmail from '../pages/contactByEmail';


describe('Page: Contact By Email', () => {
    test('use jsdom in this test file', () => {
        expect(document.createElement('div')).not.toBeNull();
    });
    test('renders correctly', async () => {
        let el: HTMLElement = document.createElement("div");
        await act(async () => {
            const getLayout = ContactByEmail.getLayout ?? (page => page);
            const {container} = await render(getLayout(<ContactByEmail />));
            el = container;
        });
        expect(el).toMatchSnapshot();
    });
});