import React, { Component } from "react";
import PropTypes from "prop-types";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientID: "28cff0dd1d3efca0bfd5",
      ClientSecret: "ec0894a973b85b02f9768c0b474e5bda72bdac07",
      count: 5,
      sort: "created:asc",
      repos: []
    };
  }
  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientID, clientSecret } = this.state;

    fetch(
      `http://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientID}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      })
      .catch(err => console.log(err));
  }
  render() {
    const { repos } = this.state;

    const reposItems = repos.map(repo => (
      <div key={repo.id} className="card card-body mb-2">
        <div className="row">
          <h4>
            <a
              href={repo.html_url}
              className="text-info"
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.name}
            </a>
          </h4>
          <p>{repo.description}</p>
        </div>

        <div className="col-md-6">
          <span className="badge badge-info mr-1">
            Stars:
            {repo.stargazers_count}
          </span>
          <span className="badge badge-secondary mr-1">
            Watchers:
            {repo.watchers_count}
          </span>
          <span className="badge badge-success">
            Forks:
            {repo.forks_count}
          </span>
        </div>
      </div>
    ));
    return (
      <div ref="myRef">
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {reposItems}
      </div>
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGithub;
