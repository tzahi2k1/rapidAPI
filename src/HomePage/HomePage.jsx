import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { homeActions} from '../actions';
class HomePage extends React.Component {
    componentDidMount() {
        //this.props.dispatch(loginActions.getAll());
    }
    handleDrag(event) {
        console.log('react SyntheticEvent ==> ', event);
        console.log('nativeEvent ==> ', event.nativeEvent);
    }

    handleDragEnd (event) {
        console.log('react SyntheticEvent ==> ', event);
        console.log('nativeEvent ==> ', event.nativeEvent);
        this.props.dispatch(homeActions.dragEnd(event.nativeEvent.screenX,event.nativeEvent.screenY))
    }

    render() {
        const { positions } = this.props;
        return (
            <div >
                <p>
                    <Link to="/login">Logout</Link>
                </p>
                <div>
                    <img src={'http://www.planitbuilders.ca/wp-content/uploads/2015/01/Businessman-512.png'}
                         onDragStart={this.handleDrag} onDrop={this.handleDrop}
                         onDragEnd={this.handleDragEnd.bind(this)}
                         style={{width: 200, height: 200,
                         y: positions.top, x: positions.left}}
                    />

                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { homeReducer } = state;
    let returnedStyles;
    if(!homeReducer.positions) {
        //TODO: Need to call get position when its empty.
        returnedStyles = {
            top: 10,
            left: 10
        }
    }else{
        returnedStyles = homeReducer.positions;
    }
    return {
        positions: returnedStyles
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };