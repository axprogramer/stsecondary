const firebaseConfig = {
  apiKey: "AIzaSyAJ61CR4hcHajBf8T02wl-REVx8SnRxklE",
  authDomain: "useradmin-cd653.firebaseapp.com",
  databaseURL: "https://useradmin-cd653-default-rtdb.firebaseio.com",
  projectId: "useradmin-cd653",
  storageBucket: "useradmin-cd653.appspot.com",
  messagingSenderId: "51017691764",
  appId: "1:51017691764:web:9f322ae1ee6c00c5ce5721"
};
var db = localStorage.getItem("inputGrade"); //Grade
var db2 = localStorage.getItem("inputMonth"); //Month
var db3 = localStorage.getItem("inputYear"); //Year

firebase.initializeApp(firebaseConfig);
function selectAllData() {
  document.getElementById('showData').innerHTML = "";
  studentN0 = 0;
  NewBox();
  firebase.database().ref(`${db}/` + `${db3}/`).once('value',
    function (AllRecords) {
      AllRecords.forEach(
        function (CurrentRecord) {
          var name = CurrentRecord.val().name;
          var id = CurrentRecord.val().id;
          var sex = CurrentRecord.val().sex;
          // var grade = CurrentRecord.val().grade;
          var sumNov = CurrentRecord.val().sumJul;
          var average = CurrentRecord.val().averageJul;
          var myKh = CurrentRecord.val().myKh;
          addItemsToTable(name, id, sex, sumNov, average, myKh);
          showAuto();
          b = 1;
          document.getElementById('showNNN').value = b;
          cccSS();

        }
      );
    });
}
window.onload = selectAllData;
var studentN0;

var stdList = [];
function addItemsToTable(name, id, sex, sumNov, average, myKh) {
  var tbody = document.getElementById('showData');
  var trow = document.createElement('tr');
  var td0 = document.createElement('td');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  var td7 = document.createElement('td');
  td4.contentEditable = true;
  var sumID = `${id}sum`;
  var av = `${id}av`;
  td3.id = sumID;
  td4.id = av;




  stdList.push([name, id, sex, sumNov, average, myKh]);
  td0.innerHTML = ++studentN0;
  td1.innerHTML = id;
  td2.innerHTML = sex;
  if (sumNov == undefined) {
    td3.innerHTML = '0';

  } else {
    td3.innerHTML = sumNov;

  }
  if (average == undefined) {
    td4.innerHTML = '0';

  } else {
    td4.innerHTML = average;

  }
  const sleep = async (milliseconds) => {
    await new Promise(resolve => {
      return setTimeout(resolve, milliseconds);
    });
    let aaa = document.getElementById(`${av}`);
    aaa.addEventListener('input', () => {
      var kk = aaa.innerHTML;
      var su = kk * 4;
      document.getElementById(`${sumID}`).innerHTML = su;
      firebase.database().ref(`${db}/` + `${db3}/` + id).update(
        {
          sumJul: su,
          averageJul: kk,
        },
      )
    })
    aaa.addEventListener('click', () => {
      if (td4.innerHTML == 0) {
        td4.innerHTML = '';
      } else {

      }

    })

  };
  sleep(2000);


  trow.appendChild(td0);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);

  td1.innerHTML = `<button type="button" class="button-7" onclick="Fillbox(${studentN0})">${myKh}</button>`;
  tbody.appendChild(trow);
}

var Mname = document.getElementById('myName');
var Mid = document.getElementById('myID');
var Msex = document.getElementById('mySex');
// var MspeakingNov = document.getElementById('mySnov');
// var MwritingNov = document.getElementById('myWnov');
// var MlisteningNov = document.getElementById('myLnov');
// var MreadingNov = document.getElementById('myRnov');
var Msum = document.getElementById('myAnov');
var MaverageNov = document.getElementById('myScorenov');

var submit = document.getElementById("mySubmit");
var btnupdate = document.getElementById("myUpdate");
var dele = document.getElementById("myDelete");

//Show data input auto
function showAuto() {
  Mname.value = stdList[0][0];
  Mid.value = stdList[0][1];
  Msex.value = stdList[0][2];
  if (stdList[0][3] == undefined) {
    Msum.value = '';

  } else {

    Msum.value = stdList[0][3];
  }
  if (stdList[0][4] == undefined) {
    MaverageNov.value = '';

  } else {

    MaverageNov.value = stdList[0][4];
  }
  // MlisteningNov.value = stdList[0][5];
  // MreadingNov.value = stdList[0][6];
  // MaverageNov.value = stdList[0][7];
  btnupdate.style.display = 'inline-block';
  dele.style.display = 'inline-block';

}
//Count students in table row
function cccSS() {
  var ss = document.getElementById("myTable");
  var tbodyRowCount = ss.tBodies[0].rows.length;
  // console.log(tbodyRowCount);
  return tbodyRowCount;
}
// Next data show in input
let b = 0;
function nextBtn() {
  var stdNum = cccSS();
  if (b < stdNum) {
    b++;
    document.getElementById('showNNN').value = b;

  }
  var oo = b;
  // console.log(b);
  --oo;
  Mname.value = stdList[oo][0];
  Mid.value = stdList[oo][1];
  Msex.value = stdList[oo][2];
  if (stdList[oo][3] == undefined) {
    Msum.value = '';

  } else {

    Msum.value = stdList[oo][3];
  }
  if (stdList[oo][4] == undefined) {
    MaverageNov.value = '';

  } else {

    MaverageNov.value = stdList[oo][4];
  }

}
function goBack() {
  if (b > 1) {
    b--;
    document.getElementById('showNNN').value = b;
  }
  var oo = b;
  // console.log(oo);
  --oo;
  Mname.value = stdList[oo][0];
  Mid.value = stdList[oo][1];
  Msex.value = stdList[oo][2];
  if (stdList[oo][3] == undefined) {
    Msum.value = '';

  } else {

    Msum.value = stdList[oo][3];
  }
  if (stdList[oo][4] == undefined) {
    MaverageNov.value = '';

  } else {

    MaverageNov.value = stdList[oo][4];
  }
}
function Fillbox(index) {
  b = index;
  document.getElementById('showNNN').value = index;
  // if (index == null) {
  //   submit.style.display = 'inline-block';
  //   update.style.display = 'none';
  //   dele.style.display = 'none';
  // }
  // else {
  --index;
  Mname.value = stdList[index][0];
  Mid.value = stdList[index][1];
  Msex.value = stdList[index][2];
  if (stdList[0][3] == undefined) {
    Msum.value = '';

  } else {

    Msum.value = stdList[0][3];
  }
  if (stdList[0][4] == undefined) {
    MaverageNov.value = '';

  } else {

    MaverageNov.value = stdList[0][4];
  }

  submit.style.display = 'none';
  update.style.display = 'inline-block';
  dele.style.display = 'inline-block';


}

function NewBox() {
  submit.style.display = 'none';
  update.style.display = 'none';
  dele.style.display = 'none';
  var Mname = document.getElementById('myName');
  var Mid = document.getElementById('myID');
  var Msex = document.getElementById('mySex');
  var Msum = document.getElementById('myAnov');
  var MaverageNov = document.getElementById('myScorenov');

  Mname.value = "";
  Mid.value = "";
  Msex.value = "";
  Msum.value = "";
  MaverageNov.value = "";
}


function AddStd(e) {
  firebase.database().ref(`${db}/` + `${db3}/` + Mid.value).set(
    {
      sumJul: Msum.value,
      averageJul: MaverageNov.value,
    },
  )
  selectAllData();
  // window.location.reload();

}
function UpStd(e) {
  e.preventDefault();

  firebase.database().ref(`${db}/` + `${db3}/` + Mid.value).update(
    {
      sumJul: Msum.value,
      averageJul: MaverageNov.value,
    },
  )
  document.getElementById("showAlert").style.display = "block";
  document.getElementById("info").innerText = `${Mid.value} has been updated!`;
  const sleep = async (milliseconds) => {
    await new Promise(resolve => {
      return setTimeout(resolve, milliseconds);
    });
    document.getElementById("showAlert").style.display = "none";
    nextBtn();

  };
  sleep(1000);

  // selectAllData();
  // window.location.reload();

}

function DelStd(e) {
  firebase.database().ref(`${db}/` + `${db3}/` + Mid.value).remove().then(
    function () {
      selectAllData();
      // window.location.reload();
      e.preventDefault();

    }
  )
}

var table1 = document.getElementById("my1stsemetable");
var table2 = document.getElementById("myTable2");
table1.style.display = "none";
table2.style.display = "none";

document.getElementById('myScorenov').addEventListener('input', function () {
  let aver = document.getElementById('myScorenov').value;
  let total = aver * 4;
  total = total.toFixed(2).replace(/[.,]00$/, "");
  document.getElementById('myAnov').value = total;

})