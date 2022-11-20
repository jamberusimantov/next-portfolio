/**
 * @jest-environment jsdom
 */
import React from "react";
import { describe, expect, test } from '@jest/globals';
import { render, act } from '@testing-library/react';
import ClientError from '../pages/404';


describe('Page: Client Error', () => {
    test('use jsdom in this test file', () => {
        expect(document.createElement('div')).not.toBeNull();
    });
    test('renders correctly', async () => {
        let getText: Function = () => { };
        await act(async () => {
            const getLayout = ClientError.getLayout ?? (page => page);
            const { getByText } = await render(getLayout(<ClientError />));
            getText = getByText;
        });
        expect(getText(/portfoio-simantov.herokuapp.com/));
    });
});