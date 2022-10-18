import React from "react";
import { describe, expect, test } from '@jest/globals';
import { create } from 'react-test-renderer';
import CustomInput from '../components/CustomInput';


describe('CustomInput', () => {
    test('renders correctly', () => {
        let tree = create(<CustomInput title="Language" />).toJSON();
        if (!tree) return;
        tree = tree instanceof Array ? tree[0] : tree;
        expect(tree).toMatchSnapshot();
    })
})