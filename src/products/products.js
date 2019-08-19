import React, {Component} from 'react';
import common from '../common';

class Products extends Component {
    constructor (props){
        super(props);
    }

    render(){
        return (
            <button className='btn btn-sm btn-primary'>{common.echo(this.props.mountItem)}</button>
        );
    }
}

export default Products;