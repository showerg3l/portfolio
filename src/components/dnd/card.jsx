import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import { ItemTypes } from './constants'
import { Link, withRouter } from 'react-router-dom';


function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}


const boxSource = {
    beginDrag(props) {
        return {
            name: props.name,
            url: props.url,
        }
    },

    endDrag(props, monitor) {
        const item = monitor.getItem()
        const dropResult = monitor.getDropResult()

        if (dropResult) {
            console.log('test');
            console.log(props);
            window.location.href += ('/'+props.url);
        }
    },
}

const propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }
    
    render() {
        const { isDragging, connectDragSource } = this.props
        const { name } = this.props;
        const { url } = this.props;
        const opacity = isDragging ? 0.4 : 1
        const active = this.state.active ? 'active' : null;
        return (
            <div>
                {connectDragSource(<div className={'project-card ' + active} style={{ opacity }}>{name} will go to /{url}</div>)}
            </div>
        )
    }
}

Box.propTypes = propTypes;


export default withRouter(DragSource(ItemTypes.BOX, boxSource, collect)(Box));