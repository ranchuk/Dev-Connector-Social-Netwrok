import React, { Component } from "react";

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;

    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h4>{exp.company}</h4>
        <p>
          <span> {new Date(exp.from).getFullYear()}</span> -
          {exp.to === null ? (
            <span> Now</span>
          ) : (
            <span> {new Date(exp.to).getFullYear()}</span>
          )}
        </p>
        <p>
          <strong>Position:</strong> {exp.title}{" "}
        </p>
        <p>
          {exp.location === "" ? null : (
            <span>
              <strong>Location:</strong>
              {exp.location}
            </span>
          )}
        </p>
        <p>
          {exp.description === "" ? null : (
            <span>
              <strong>Description:</strong>
              {exp.description}
            </span>
          )}
        </p>
      </li>
    ));

    const eduItems = education.map(edu => (
      <li key={edu._id} className="list-group-item">
        <h4>{edu.school}</h4>
        <p>
          <span> {new Date(edu.from).getFullYear()}</span> -
          {edu.to === null ? (
            <span> Now</span>
          ) : (
            <span> {new Date(edu.to).getFullYear()}</span>
          )}
        </p>
        <p>
          <strong>Degree:</strong> {edu.degree}
        </p>
        <p>
          <strong>Field of study:</strong> {edu.fieldofstudy}
        </p>
        <p>
          {edu.description === "" ? null : (
            <span>
              <strong>Description:</strong>
              {edu.description}
            </span>
          )}
        </p>
      </li>
    ));
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Experience</h3>
          {expItems.length > 0 ? (
            <ul className="list-gruop">{expItems}</ul>
          ) : (
            <p className="text-center">No experience Listed</p>
          )}
        </div>

        <div className="col-md-6">
          <h3 className="text-center text-info">Education</h3>
          {eduItems.length > 0 ? (
            <ul className="list-gruop">{eduItems}</ul>
          ) : (
            <p className="text-center">No experience Listed</p>
          )}
        </div>
      </div>
    );
  }
}
export default ProfileCreds;
