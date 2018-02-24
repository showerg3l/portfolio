import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import {ItemTypes} from './constants';

const style = {
    height: '150px',
    width: '100%',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}


const boxTarget = {
    drop() {
        return { name: 'Dustbin' }
    },
}

const propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired
}

class Dustbin extends Component {
    render() {
        const { canDrop, isOver, connectDropTarget } = this.props
        const isActive = canDrop && isOver

        let backgroundColor = '#222'
        if (isActive) {
            backgroundColor = 'darkgreen'
        } else if (canDrop) {
            backgroundColor = 'darkkhaki'
        }

        return connectDropTarget(
            <div style={{ ...style, backgroundColor }}>
                {isActive ? 'Release to drop' : 'Drag a box here'}
            </div>,
        )
    }
}

Dustbin.propTypes = propTypes;

export default DropTarget(ItemTypes.BOX, boxTarget, collect)(Dustbin);