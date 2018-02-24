import React, { Component } from 'react'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import {withRouter} from 'react-router-dom';
import Dustbin from './dropArea';
import Box from './card';

class Container extends Component {
    render() {
        console.log(this.props);
        return (
            <DragDropContextProvider backend={HTML5Backend}>
                <div>
                    <div style={{ overflow: 'hidden', clear: 'both' }}>
                        <Dustbin />
                    </div>
                    <div style={{ overflow: 'hidden', clear: 'both' }}>
                        <Box name={this.props.data.name} url={this.props.data.url} />
                    </div>
                </div>
            </DragDropContextProvider>
        )
    }
}

export default Container;
