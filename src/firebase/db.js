import { db } from "./firebase";

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email
  });

export const doCreateType = (id, username, email) =>
  db.ref(`types/${id}`).set({
    username,
    email
  });

export const doCreateMeta = (type, topicid, userid, make, input1, image) =>
  db.ref(`${type}meta/${topicid}`).push({
    name: input1,
    parent: make,
    user: userid,
    image: image,
    time: Date.now()
  });

export const onceGetAll = () => db.ref().once("value");
export const onceGetUsers = () => db.ref("users").once("value");

export const onceGetMakers = () => db.ref("Makers").once("value");

export const onceGetMakersId = id => db.ref(`Makers/${id}`).once("value");
// Other db APIs ...
export const doCreateModel = (userid, make, input1, image) =>
  db.ref(`Makers/${make}`).push({
    name: input1,
    img: image
  });

export const doCreateBg = (serial, userid, make, input1, image) =>
  db.ref(`metafile/${serial}`).push({
    name: input1,
    parent: make,
    user: userid,
    image: image,
    time: Date.now()
  });
