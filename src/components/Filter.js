import React from 'react';
import { Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const Filter = () => {

    return (
        // <Form inline>
        //     <Input type="text" name="keyword" />
        //     <Input type="select" name="select">
        //         <option>By Title</option>
        //         <option>By Author</option>
        //     </Input>
        // </Form>
        <div>
            <InputGroup>
                <Input placeholder="filter..."/>
                <InputGroupAddon addonType="prepend">
                    <Input type="select">
                        <option>By Title</option>
                        <option>By Author</option>
                    </Input>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}

export default Filter;