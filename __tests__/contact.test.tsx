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
        let el: HTMLElement = document.createElement("div");
        await act(async () => {
            const getLayout = Contact.getLayout ?? (page => page);
            const {container} = await render(getLayout(<Contact />));
            el = container;
        })
        expect(el).toMatchSnapshot();
    });
});