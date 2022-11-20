/**
 * @jest-environment jsdom
 */
import React from "react";
import { describe, expect, test } from '@jest/globals';
import { render, act } from '@testing-library/react';
import Archive from '../pages/archive';


describe('Page: Archive', () => {
    test('use jsdom in this test file', () => {
        expect(document.createElement('div')).not.toBeNull();
    });
    test('renders correctly', async () => {
        let el: HTMLElement = document.createElement("div");
        await act(async () => {
            const getLayout = Archive.getLayout ?? (page => page);
            const {container} = await render(getLayout(<Archive />));
            el = container;
        });
        expect(el).toMatchSnapshot();
    });
});