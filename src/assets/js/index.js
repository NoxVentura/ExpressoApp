// const functions = require ('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);

// exports.updateUser = functions.firestore
// .document("users/(UserId)")
// .onUpdate((change, context) => {
//     const UserId = context.params.UserId;

//     const newEmail = change.after.data().email;
//     const newName = change.after.data().name;

//     admin.auth().updateUser(UserId, {
//         email: newEmail,
//         displayName: newName
//     })
//     .then((userDetails)=>{
//         console.log('user updated!', userDetails)
//     })
//     .catch(error =>{
//         console.log(error.message)
//     })
//     })

