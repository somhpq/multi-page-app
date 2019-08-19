import React, {Component} from 'react';
import common from '../common';
import {Button as B_Button} from 'react-bootstrap';

class Parts extends Component{
    constructor(props) {
        super (props);
    };

    render() {
        return (
            <B_Button size='sm' variant='light'>{common.echo(this.props.mountItem)}</B_Button>
        );
    };
}

export default Parts;