import React, { Component } from "react";
import { db, auth } from "../../firebase";
import * as firebase from "firebase";

import { Link, Redirect } from "react-router-dom";
import * as routes from "../../constants/routes";
//import Modal from 'react-responsive-modal'
import {
  Table,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Progress,
  UncontrolledTooltip,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

import Modal from "react-responsive-modal";
// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
/*
const Player = (props) => {
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>Position: {player.position}</h2>
      <Link to='/roster'>Back</Link>
    </div>
  )
}
*/
const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  input1: "",
  users: {},
  authUser: null,
  fileContent: null,
  fileUrl: null,
  error: null,
  redirectToReferrer: null,
  modal: false,
  nestedModal: false,
  closeAll: false
};

class Player extends Component {
  constructor(props) {
    super(props);
    /*
    this.state = {
      users: {}
    };
    */
    this.state = { ...INITIAL_STATE };

    db.onceGetMakersId(this.props.match.params.id).then(snapshot => {
      if (snapshot.val()) {
        this.setState(() => ({ users: snapshot.val() }));
      } else {
        this.props.history.push("/p");
      }
    });
  }

  updateModal = asdf => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onCloseModal = () => {
    this.setState({ modal: false });
  };

  onSubmit = event => {
    const { input1, users, authUser, fileContent, fileUrl, error } = this.state;
    if (!authUser) {
      this.props.history.push(routes.SIGN_IN);
    } else {
      if (!input1) {
        // no file attached
        this.setState(updateByPropertyName("error", "No Name"));
      } else {
        //set to
        db.doCreateModel(
          authUser.uid,
          this.props.match.params.id,
          input1,
          fileUrl
        )
          .then(snapshot => {
            db.doCreateMeta(
              "Makers",
              snapshot.key,
              authUser.uid,
              this.props.match.params.id,
              input1,
              fileUrl
            );
            this.setState(updateByPropertyName("input1", ""));
            db.onceGetMakersId(this.props.match.params.id).then(snapshot =>
              this.setState(() => ({
                users: snapshot.val(),
                fileUrl: "",
                progress: 0
              }))
            );
          })
          .catch(error => {
            this.setState(updateByPropertyName("error", error));
          });

        //console.log(this.state);
      }
    }
    event.preventDefault();
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });

    //this.props.match.url
    //this.props.match.params.handle
    //this.props.location.key
  }
  onchange(ev) {
    const { input1, users, authUser, fileContent, fileUrl, error } = this.state;
    if (!authUser) {
      this.props.history.push(routes.SIGN_IN);
    } else {
      if (ev.target.files.length > 0) {
        const file = ev.target.files[0];
        //let reader = new FileReader();

        //reader.onloadend = e => {
        if (file.size > 1048576 * 10) {
          this.setState({ error: "Upload limit is 10MB" });
        } else {
          this.setState({ error: "" });
          const ref = firebase
            .storage()
            .ref(`images/${file.name.replace(/\s+/g, "")}`);
          const uploadTask = ref.put(file);
          uploadTask.on(
            "state_changed",
            snapshot => {
              let progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              this.setState({
                progress: progress
              });
            },
            err => {},
            () => {
              this.setState({
                fileContent: file.name.replace(/\s+/g, ""),
                fileUrl: uploadTask.snapshot.downloadURL
              });
            }
          );

          //console.log(uploadTask.snapshot.downloadURL);
          //this.setState({ fileUrl: uploadTask.snapshot.downloadURL, });
        }
        /*
        this.setState({
      fileName: ev.target.files[0].name,
      fileSize: ev.target.files[0].size
    });
    if (ev.target.files[0].size > 1048576 * 10) {
      this.setState({ fileError: "Upload limit is 10MB" });
    } else {
      this.setState({ fileError: "" });
      const ref = storage.ref();
      const file = ev.target.files[0];
      const name = ref.child("user1/" + ev.target.files[0].name);
      const uploadTask = name.put(file);
      uploadTask.on("state_changed", snapshot => {
        let progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        this.setState({
          progress: progress
        });
      });
      uploadTask.then(function(snapshot) {
        console.log("File uploaded");
      });
    }
        */
        /* get the image on firebase and load it off the server
                  uploadEncodedImg.child('img').on("value", function(snapshot) {
                    console.log(snapshot.val());
                    document.getElementById("Encoded").src = snapshot.val();
                  });
        */
        //console.log("uploaded to Firebase");
        //};
        //reader.readAsDataURL(file);
      }
    }
  }

  render() {
    const {
      input1,
      users,
      authUser,
      fileContent,
      fileUrl,
      error,
      redirectToReferrer,
      modal
    } = this.state;
    const isInvalid = input1 === "";
    // The FullRoster iterates over all of the players and creates
    // a link to their profile page.
    return (
      <div>
        <div className="jumbotron">
          <h2>{this.props.match.params.id}</h2>
          <p>
            This is an example to show the potential of an offcanvas layout
            sizes to see it in action.
          </p>
        </div>
        <div>
          <form onSubmit={this.onSubmit}>
            <input
              value={input1}
              onChange={event =>
                this.setState(
                  updateByPropertyName("input1", event.target.value)
                )
              }
              type="text"
              placeholder="Add Model Name"
            />
            <button disabled={isInvalid} type="submit">
              Add
            </button>
            <input
              type="file"
              name="fileUplader"
              style={{ width: "82px" }}
              onChange={e => this.onchange(e)}
            />
            <Progress
              animated
              color="success"
              style={{ height: "1px" }}
              value={this.state.progress}
            />
            {this.state.fileUrl && (
              <img
                src={this.state.fileUrl}
                className="img-responsive"
                alt="temp"
              />
            )}
          </form>
          <hr />
        </div>
        <div className="row">
          <ul>
            {Object.keys(users).map(key => (
              <li className="col-xs-12 col-lg-12 prow">
                <Link to={`/m/${key}`}>
                  <div className="col-xs-12 col-sm-6 col-md-8">
                    <img
                      className="img-responsive"
                      src={
                        users[key].img
                          ? users[key].img
                          : "http://via.placeholder.com/640x480"
                      }
                      alt={[this.props.match.params.id + " " + key]}
                    />
                  </div>
                </Link>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="row">
                    <div className="col-xs-10 col-sm-10 col-lg-10">
                      <Link to={`/m/${key}`}>
                        <b>{users[key].name ? users[key].name : `${key}`}</b>
                      </Link>
                      {users[key].wiki ? (
                        <p>
                          <Link target="_blank" to={users[key].wiki}>
                            {users[key].wiki}
                          </Link>
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="col-xs-2 col-sm-2 col-lg-2">
                      <b className="pull-right">
                        <Link
                          to="#"
                          onClick={event => this.updateModal(`${key}`)}
                        >
                          <span class="glyphicon glyphicon-option-horizontal" />
                        </Link>
                      </b>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Modal
            open={modal}
            onClose={this.onCloseModal}
            classNames={{ overlay: "custom-overlay", modal: "custom-modal" }}
            center
          >
            <p>
              <b>Edit</b>
            </p>
            <p>
              <input value="" />
            </p>
            <p>
              <select>
                <option value="">Type</option>
              </select>
            </p>
            <Button color="primary" size="sm">
              Update
            </Button>
          </Modal>
        </div>
      </div>
    );
  }
}
export default Player;
