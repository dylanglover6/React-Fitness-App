import React from "react";
import "./CompletedModal.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

class CompletedModal extends React.Component{
render () {
  //only renders if modal is being shown
  if(this.props.show === false) {
    return null;
  } else 
  return (

  <div id="completedModal" className="modal show" data-show="true" >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Good Work!</h3>
          <button type="button" className="close" onClick={this.props.onClose} data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <h4>You just completed {this.props.workoutTitle} ! <br />
              Want to try another 5 Minute Workout?
          </h4>
        </div>
        <div className="modal-footer">
        <Link to="/home">
          <button type="button" className="btn btn-primary">View Other Workouts</button>
        </Link>
        </div>
      </div>
    </div>
  </div>
  )
  }
}
CompletedModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

export default CompletedModal;
