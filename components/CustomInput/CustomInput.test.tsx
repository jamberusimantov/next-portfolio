/**
 * @jest-environment jsdom
 */
import React from "react";
import { describe, expect, test } from '@jest/globals';
import { render, act } from '@testing-library/react';
import CustomInput from '.';


describe('CustomInput', () => {
    test('use jsdom in this test file', () => {
        expect(document.createElement('div')).not.toBeNull();
    });
    test('renders correctly', async () => {
        let el: HTMLElement = document.createElement("div");
        let getTestId: Function = () => { };
        await act(async () => {
            let { container, getByTestId } = await render(<CustomInput
                title="Language"
                testid="CustomInput"
                value="English"
                handleChange={(e) => { }}
            />);
            el = container;
            getTestId = getByTestId;
        });
        expect(el).toMatchSnapshot();
        expect(getTestId(/CustomInput/).getAttribute("value")).toMatch("English");
        getTestId(/CustomInput/).setAttribute("value", "Hebrew");
        expect(getTestId(/CustomInput/).getAttribute("value")).toMatch("Hebrew");
    });
});