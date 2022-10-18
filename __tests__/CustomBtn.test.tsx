import React from "react";
import { describe, expect, test } from '@jest/globals';
import { create } from 'react-test-renderer';
import CustomBtn from '../components/CustomBtn';


describe('CustomBtn', () => {
    test('renders correctly', () => {
        let tree = create(<CustomBtn text="JAVA" status="response submit" />).toJSON();
        if (!tree) return;
        tree = tree instanceof Array ? tree[0] : tree;
        expect(tree).toMatchSnapshot();
    })
})