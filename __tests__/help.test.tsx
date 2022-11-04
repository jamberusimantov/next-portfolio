/**
 * @jest-environment jsdom
 */
 import React, { ReactElement, JSXElementConstructor } from "react";
 import { describe, expect, test } from '@jest/globals';
 import { render, act } from '@testing-library/react';
 import Help from '../pages/help';
 
 
 describe('Page: Help', () => {
    test('use jsdom in this test file', () => {
        expect(document.createElement('div')).not.toBeNull();
    });
    test('renders correctly', async () => {
        let el: HTMLElement = document.createElement("div");
        await act(async () => {
            const getLayout = Help.getLayout ?? (page => page);
            const {container} = await render(getLayout(<Help />));
            el = container;
        });
        expect(el).toMatchSnapshot();
    });
});