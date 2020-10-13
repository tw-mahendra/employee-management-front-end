import React, {Component} from 'react';

class HeaderComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md  navbar-dark bg-dark">
                        <div><a href="https://javaguides.net" className="navbar-brand">Employee Management</a></div>
                    </nav>
                </header>

            </div>
        );
    }
}

export default HeaderComponent;