/**
 * @jest-environment jsdom
 */
import React from "react";
import { describe, expect, test } from '@jest/globals';
import { render, act } from '@testing-library/react';
import CustomLink from '.';


describe('CustomLink', () => {
    test('use jsdom in this test file', () => {
        expect(document.createElement('div')).not.toBeNull();
    });
    test('renders correctly', async () => {
        let el: HTMLElement = document.createElement("div");
        let getText: Function = () => { };
        let getTestId: Function = () => { };
        await act(async () => {
            let { container, getByText, getByTestId } = await render(<CustomLink testid="CustomLink"/>);
            el = container;
            getText = getByText;
            getTestId = getByTestId;
        });
        expect(el).toMatchSnapshot();
        expect(getText("/path/to/somewhere"));
        getTestId("CustomLink").textContent = "/somewhere/to/path";
        expect(getText("/somewhere/to/path"));
    });
});