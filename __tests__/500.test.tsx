/**
 * @jest-environment jsdom
 */
import React, { ReactElement, JSXElementConstructor } from "react";
import { describe, expect, test } from '@jest/globals';
import { render, act } from '@testing-library/react';
import ServerError from '../pages/500';


describe('Page: Server Error', () => {
    test('use jsdom in this test file', () => {
        expect(document.createElement('div')).not.toBeNull();
    });
    test('renders correctly', async () => {
        let getText: Function = () => { };
        let el: HTMLElement = document.createElement("div");
        await act(async () => {
            const getLayout = ServerError.getLayout ?? (page => page);
            const { container, getByText } = await render(getLayout(<ServerError />));
            el = container;
            getText = getByText;
        });
        expect(el).toMatchSnapshot();
        expect(getText(/Sorry for any inconvenience this may cause/));
    });
});