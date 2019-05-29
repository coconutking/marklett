import React, { Component } from "react";
import { db } from "../../firebase";
import { Link } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      viewerWidth: 0,
      viewerHeight: 0 //tree
    };
  }
  componentDidMount() {
    db.onceGetMakers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
    const { users } = this.state;
    // The FullRoster iterates over all of the players and creates
    // a link to their profile page.
    return (
      <div>
        <ul>
          {Object.keys(users).map(key => (
            <li key={key}>
              <Link to={`/p/${key}`}>{key}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const UserList = ({ users }) => (
  <div>
    {/*
      PlayerAPI.all().map(p => (
        <li key={p.number}>
          <Link to={`/roster/${p.number}`}>{p.name}</Link>
        </li>
      ))
      */}
  </div>
);
export default HomePage;
