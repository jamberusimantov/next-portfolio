/**
 * @jest-environment jsdom
 */
import React from "react";
import { describe, expect, test } from '@jest/globals';
import { render, act } from '@testing-library/react';
import Help from '../pages/help';


describe('Page: Help', () => {
    test('use jsdom in this test file', () => {
        expect(document.createElement('div')).not.toBeNull();
    });
    test('renders correctly', async () => {
        let getText: Function = () => { };
        await act(async () => {
            const getLayout = Help.getLayout ?? (page => page);
            const { getAllByText } = await render(getLayout(<Help />));
            getText = getAllByText;
        });
        expect(getText(/portfoio-simantov.herokuapp.com/)).toHaveLength(4);
    });
});