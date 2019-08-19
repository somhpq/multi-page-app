import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Parts from './parts';

let mountItemId = 'parts';

ReactDOM.render(<Parts mountItem={mountItemId} />, document.getElementById(mountItemId));
