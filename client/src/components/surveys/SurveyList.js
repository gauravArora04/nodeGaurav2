import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import _ from 'lodash';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

//   renderSurveys() {
//     return _.map(this.props.survey, survey => {
//       return (
//         <div className="card darken-1" key={survey._id}>
//           <div className="card-content">
//             <span className="card-title">{survey.title}</span>
//             <p>
//               {survey.body}
//             </p>
//             <p className="right">
//               Sent On: {new Date(survey.dateSent).toLocaleDateString()}
//             </p>
//           </div>
//           <div className="card-action">
//             <a>Yes: {survey.yes}</a>
//             <a>No: {survey.no}</a>
//           </div>
//         </div>
//       );
//     });
//   }
  renderSurveys() {
    return _.map(this.props.survey, survey => {
        return (
            <div className="card darken-1" key={survey._id}>
              <div className="card-content">
                <span className="card-title">{survey.title}</span>
                <p>
                  {survey.body}
                </p>
                <p className="right">
                  Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                </p>
              </div>
              <div className="card-action">
                <a>Yes: {survey.yes}</a>
                <a>No: {survey.no}</a>
              </div>
            </div>
          );
    });
}

  render() {
    return (
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
