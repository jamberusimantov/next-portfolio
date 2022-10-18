/**
 * @jest-environment jsdom
 */
import React from "react";
import { describe, expect, test } from '@jest/globals';
import { create, act } from 'react-test-renderer';
import CustomLink from '../components/CustomLink';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';


describe('CustomLink', () => {
    // test('renders correctly', async () => {
    //     // const component = create(<CustomLink
    //     //     href="/path/to/somewhere"
    //     // />)
    //     // let tree = component.toJSON();
    //     // tree = tree instanceof Array ? tree[0] : tree;
    //     // act(() => {
    //     //     expect(tree).toMatchSnapshot();
    //     // })
    //     // expect(tree).toMatchSnapshot();
    //     render(<CustomLink href="/path/to/somewhere" />);
    //     await waitFor(() => {
    //         expect(screen.getByTestId("link").innerHTML).toBe("CLICK!!!");
    //     });
    // });
    test('use jsdom in this test file', () => {
        const element = document.createElement('div');
        expect(element).not.toBeNull();
    });
    test('renders correctly', () => {
        render(<CustomLink href="/path/to/somewhere" />);
        expect(screen.getByTestId("link").innerHTML).toBe("CLICK");
    });
})