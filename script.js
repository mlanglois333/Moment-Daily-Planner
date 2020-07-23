const currentDate = document.getElementById("currentDay");
const contentTable = document.getElementById("contentTable");
var now = moment();

var times = [
    {
        time: "9:00",
        ampm: "am",
        stored: "",
    },
    {
        time: "10:00",
        ampm: "am",
        stored: "",
    },
    {
        time: "11:00",
        ampm: "am",
        stored: "",
    },
    {
        time: "12:00",
        ampm: "pm",
        stored: "",
    },
    {
        time: "1:00",
        ampm: "pm",
        stored: "",
    },
    {
        time: "2:00",
        ampm: "pm",
        stored: "",
    },
    {
        time: "3:00",
        ampm: "pm",
        stored: "",
    },
    {
        time: "4:00",
        ampm: "pm",
        stored: "",
    },
    {
        time: "5:00",
        ampm: "pm",
        stored: "",
    },
    {
        time: "6:00",
        ampm: "pm",
        stored: "",
    },
    {
        time: "7:00",
        ampm: "pm",
        stored: "",
    },
    {
        time: "8:00",
        ampm: "pm",
        stored: "",
    },
    {
        time: "9:00",
        ampm: "pm",
        stored: "",
    }
];
var arrLen = times.length;

currentDate.innerHTML=now;



function saveData(){
    for (i=0; i<arrLen; i++) {

        var indexData = $('#saveDat'+i).val();
        times[i].stored = indexData;
        console.log(indexData);

    
    localStorage.setItem('locStor'+i, indexData);

    
    }
console.log(localStorage);
}

function renderData(){
   for (i=0; i<arrLen; i++){

    var getDat = localStorage.getItem('locStor' + i)
    times[i].stored = getDat;
    document.getElementById('saveDat'+i).innerHTML= times[i].stored;
    console.log(getDat);
   }
}

function tableDisp() {

for (i=0; i<arrLen; i++){

    var rows= $("<form>").attr({"class" : "row"});
    $(".container").append(rows);

    var timeDiv = $("<div>");
    timeDiv.attr('class', 'col-1 timeClass');
    timeDiv.text(times[i].time + times[i].ampm);
    var contentDiv = $("<textarea>");
    contentDiv.attr('class', 'col-10 contentClass');
    contentDiv.attr('id', 'saveDat'+ i);
    contentDiv.text(times[i].stored);
    var saveBut = $("<button>");
   saveBut.attr('class', 'col-1 saveClass');
   saveBut.text('Save');

    rows.append(timeDiv, contentDiv, saveBut);
};}


tableDisp();
renderData();
$(".saveClass").on("click", function(event) {
    event.preventDefault();
});
$(".saveClass").on("click", function(){ saveData()});
$(".saveClass").on("click", function(){ renderData()});


