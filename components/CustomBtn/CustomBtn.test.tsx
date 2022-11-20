/**
 * @jest-environment jsdom
 */
import React from "react";
import { describe, expect, test } from '@jest/globals';
import { render, act } from '@testing-library/react';
import CustomBtn from '.';


describe('CustomBtn', () => {
    test('use jsdom in this test file', () => {
        expect(document.createElement('div')).not.toBeNull();
    });
    test('renders correctly', async () => {
        let el: HTMLElement = document.createElement("div");
        let getText: Function = () => { };
        let getTestId: Function = () => { };
        await act(async () => {
            let { container, getByTestId, getByText } = await render(<CustomBtn
                text="Click Here"
                testid="CustomBtn"
                status="response submit"
                handleClick={(e) => {
                    const btn = e.target as HTMLButtonElement;
                    if (!btn.firstChild) return;
                    btn.firstChild.textContent = "Clicked";
                }}
            />);
            el = container;
            getText = getByText;
            getTestId = getByTestId;
        });
        expect(el).toMatchSnapshot();
        expect(getText(/Click Here/));
        getTestId("CustomBtn").click();
        expect(getText(/Clicked/));
    });
});