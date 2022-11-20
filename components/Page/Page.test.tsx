/**
 * @jest-environment jsdom
 */
import React from "react";
import { describe, expect, test } from '@jest/globals';
import { render, act } from '@testing-library/react';
import Page from '.';


describe('Page', () => {
    test('use jsdom in this test file', () => {
        expect(document.createElement('div')).not.toBeNull();
    });
    test('renders correctly', async () => {
        let el: HTMLElement = document.createElement("div");
        let getTitle: Function = () => { };
        await act(async () => {
            let { container, getByTitle } = await render(<Page />);
            el = container;
            getTitle = getByTitle;
        });
        expect(el).toMatchSnapshot();
        expect(getTitle(/Profile/));
        expect(getTitle(/Projects/));
        expect(getTitle(/Contact/));
    });
});