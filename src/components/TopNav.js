import React from 'react';
import SearchBar from './SearchBar';
import {Navbar, NavbarBrand} from 'reactstrap';

class TopNav extends React.Component {

    render() {
        return (
            <div>
                <Navbar color="dark" light>
                    <NavbarBrand className="justify-content-center">Bookstore</NavbarBrand>
                    <SearchBar />
                </Navbar>
            </div>
        )
    }
}

export default TopNav;