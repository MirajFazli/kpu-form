var rollV, nameV, genderV, addressV;


function readFom() {
  rollV = document.getElementById("roll").value;
  nameV = document.getElementById("name").value;
  fatherNameV = document.getElementById('fatherName').value;
  genderV = document.getElementById("gender").value;
  projectV = document.getElementById("projecttype").value;
  phoneV = document.getElementById("phone").value;
  emailV = document.getElementById("email").value;
  lastNameV = document.getElementById("lastName").value;

  obj = {
    rollNo: rollV,
    name: nameV,
    gender: genderV,
    email: emailV,
    phone: phoneV,
    project: projectV,
    fatherName: fatherNameV,
    lastname: lastNameV,
    classes: "NE3-1"
  }

  return obj;
}

document.getElementById("insert").onclick = function () {
  const values = readFom();

  if (values.phone === "" || values.rollNo === "" || values.lastname === "" || values.gender === "" || values.name === "" || values.email === "" || values.project === "" || values.fatherName === "") {
    Swal.fire({
      title: "یکی از فیلد های شما خالی است",
      icon: "info",
      showConfirmButton: false,
      timer: 1500
    });
    return;
  }

  else {
    firebase
      .database()
      .ref("student/" + rollV)
      .set(obj);
      Swal.fire({
        title: "معلومات شما موفقانه ثبت شد",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      });

    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById('fatherName').value = "";
    document.getElementById("gender").value = "";
    document.getElementById("projecttype").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("lastName").value = "";

  }


};

// document.getElementById("read").onclick = function () {
//   readFom();

//   firebase.database().ref('student').once('value',   function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       var childKey = childSnapshot.key;
//       var childData = childSnapshot.val();
      
//       console.log(childData);


//     });

//   });

// };




// document.getElementById("update").onclick = function () {
//   readFom();

//   firebase
//     .database()
//     .ref("student/" + rollV)
//     .update({
//       //   rollNo: rollV,
//       name: nameV,
//       gender: genderV,
//       email: emailV,
//       phone: phoneV,
//       project: projectV,
//       fatherName: fatherNameV,
//     });
//   alert("Data Update");
//   document.getElementById("roll").value = "";
//   document.getElementById("name").value = "";
//   document.getElementById('fatherName').value = "";
//   document.getElementById("gender").value = "";
//   document.getElementById("projecttype").value = "";
//   document.getElementById("phone").value = "";
//   document.getElementById("email").value = "";
// };

// document.getElementById("delete").onclick = function () {
//   readFom();

//   firebase
//     .database()
//     .ref("student/" + rollV)
//     .remove();
//   alert("Data Deleted");
//   document.getElementById("roll").value = "";
//   document.getElementById("name").value = "";
//   document.getElementById("gender").value = "";
//   document.getElementById("address").value = "";
// };

