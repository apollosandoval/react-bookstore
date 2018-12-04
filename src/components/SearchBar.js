import React from 'react';
import { Button, Form, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const SearchBar = () => {
    return (
        <Form>
            <InputGroup>
                <InputGroupAddon addonType="prepend"><Button>Search</Button></InputGroupAddon>
                <Input />
            </InputGroup>
        </Form>
    )
}

export default SearchBar;