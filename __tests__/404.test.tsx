/**
 * @jest-environment jsdom
 */
import React, { ReactElement, JSXElementConstructor } from "react";
import { describe, expect, test } from '@jest/globals';
import { render, act } from '@testing-library/react';
import ClientError from '../pages/404';


describe('Page: Client Error', () => {
    test('use jsdom in this test file', () => {
        expect(document.createElement('div')).not.toBeNull();
    });
    test('renders correctly', async () => {
        let getText: Function = () => { };
        let el: HTMLElement = document.createElement("div");
        await act(async () => {
            const getLayout = ClientError.getLayout ?? (page => page);
            const { container, getByText } = await render(getLayout(<ClientError />));
            el = container;
            getText = getByText;
        });
        expect(el).toMatchSnapshot();
        expect(getText(/https:\/\/portfoio-simantov.herokuapp.com/));
    });
});