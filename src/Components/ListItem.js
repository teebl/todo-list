import React, { Component } from 'react';
import { DeleteButton } from './DeleteButton';
import { ItemTypes } from '../constants';
import { DragSource, DropButton, DropTarget } from 'react-dnd';
 
const listItemSource = {
  beginDrag(props, monitor) {
    return {id:props.task};
  }
};

const listItemTarget = {
  drop(props, monitor) {
    props.moveTask(props.task);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDropTarget: connect.dropTarget(),
    isDragging: monitor.isDragging(),
    isOver: monitor.isOver()

  }
}

@DropTarget(ItemTypes.ITEMLIST, listItemTarget, connect)
@DragSource(ItemTypes.ITEMLIST, listItemSource, connect)
export class ListItem extends Component {
	constructor(props) {
		super(props);

	this.checkListener = this.checkListener.bind(this);
	}

	checkListener(e) {
		e.preventDefault;
		this.props.checkTask(this.props.task);
	}

	render() {
		const { connectDragSource, connectDropTarget } = this.props;
		return connectDragSource(connectDropTarget(
			<li 
				data-id={this.props.task} 		
      			key={this.props.task}
      			draggable="true"
            	onDragEnd={this.dragEnd}
            	onDragStart={this.dragStart}
      		>
			<input 
				type="checkbox" 
				checked={this.props.checked} 
				onClick={this.checkListener} 
			/>       
			{this.props.task}
			<DeleteButton 
				name={this.props.task} 
				onSubmit={this.props.deleteTask} /> 
			</li>

     
          ))
		
	}

}

// ListItem.propTypes = {
//   connectDragSource: PropTypes.func.isRequired,
//   isDragging: PropTypes.bool.isRequired
// };


// //Passing the result of one function call to another
// const ds = DropTarget(ItemTypes.LISTITEM, listItemTarget, collect)(ListItem);
// export default DragSource(ItemTypes.LISTITEM, listItemSource, collect)(ds);