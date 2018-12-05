import React from 'react';
import {
    Form,
    Input,
    InputGroup,
    InputGroupButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class Filter extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         dropdownOpen: false,
    //     }

    //     this.toggleDropDown = this.toggleDropDown.bind(this);
    // }
    state = {
        dropdownOpen: false,
        searchTermValue: undefined
    }
    

    toggleDropDown = () => {
        console.log(this);
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    handleClick = (event) => {
        console.log(event.target.id);
        this.props.onFilter(this.state.searchTermValue, event.target.id);
    }

    handleChange = (event) => {
        this.setState({searchTermValue: event.target.value})
    }

    render() {
        return (
            <Form className="justify-content-end">
                <InputGroup>
                    <Input placeholder="filter..." onChange={ this.handleChange } />
                    <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.dropdownOpen} toggle={ this.toggleDropDown }>
                        <DropdownToggle caret>Filter</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem id="title" onClick={ this.handleClick }>By Title</DropdownItem>
                            <DropdownItem id="author" onClick={ this.handleClick }>By Author</DropdownItem>
                        </DropdownMenu>
                    </InputGroupButtonDropdown>
                </InputGroup>
            </Form>
        )
    }
}

export default Filter;

// () => this.setState({dropdownOpen: !this.state.dropdownOpen})