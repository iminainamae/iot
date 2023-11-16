const firebaseConfig = {
    apiKey: "AIzaSyAqVmz588De3BdKy57Gesvb9Pp8L8ItHwc",
    authDomain: "iot23-213d7.firebaseapp.com",
    projectId: "iot23-213d7",
    storageBucket: "iot23-213d7.appspot.com",
    messagingSenderId: "819225778054",
    appId: "1:819225778054:web:485d540608bfadb73ffe07"
  };

firebase.initializeApp(firebaseConfig);
    // getting reference to the database
    var database = firebase.database();

    //getting reference to the data we want
    var dataRef1 = database.ref('temp');
    var dataRef2 = database.ref('humid');
    var dataRef3 = database.ref('led');

    //fetch the data
    dataRef1.on('value', function(getdata1){
    var humi = getdata1.val();
    document.getElementById('humidity').innerHTML = humi + "%";
    })

    dataRef2.on('value', function(getdata2){
    var temp = getdata2.val();
    document.getElementById('temperature').innerHTML = temp + "&#8451;";
    })

    var index=0;
    var btn=document.getElementById("led");

function press() {
    index++;
    if (index%2==1) {
        database.ref('LED').set("1");
        document.getElementById('led').innerHTML="turn off";
    }
    else {
        database.ref('LED').set("0");
        document.getElementById('led').innerHTML="turn on";
    }
}