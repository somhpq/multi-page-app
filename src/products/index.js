import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Products from './products';

let mountItemId = 'products';

ReactDOM.render(<Products mountItem={mountItemId} />, document.getElementById(mountItemId));