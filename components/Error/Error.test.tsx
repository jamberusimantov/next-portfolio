/**
 * @jest-environment jsdom
 */
import React from "react";
import { describe, expect, test } from '@jest/globals';
import { render, act } from '@testing-library/react';
import Error from '.';


describe('Error', () => {
    test('use jsdom in this test file', () => {
        expect(document.createElement('div')).not.toBeNull();
    });
    test('renders correctly', async () => {
        let el: HTMLElement = document.createElement("div");
        let getText: Function = () => { };
        await act(async () => {
            let { container, getByText } = await render(<Error pageName="pageNotFound" />);
            el = container;
            getText = getByText;
        });
        expect(el).toMatchSnapshot();
        expect(getText("Oops"));
    });
});