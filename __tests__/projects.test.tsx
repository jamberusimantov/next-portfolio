/**
 * @jest-environment jsdom
 */
import React from "react";
import { describe, expect, test } from '@jest/globals';
import { render, act } from '@testing-library/react';
import Projects from '../pages/projects';


describe('Page: Projects', () => {
    test('use jsdom in this test file', () => {
        expect(document.createElement('div')).not.toBeNull();
    });
    test('renders correctly', async () => {
        let el: HTMLElement = document.createElement("div");
        await act(async () => {
            const getLayout = Projects.getLayout ?? (page => page);
            const {container} = await render(getLayout(<Projects />));
            el = container;
        });
        expect(el).toMatchSnapshot();
    });
});