const currentDate = document.getElementById("currentDay");
const contentTable = document.getElementById("contentTable");
const now = moment().format('MMMM Do YYYY, h:mm:ss a');

var times = [
    {
        time: "9:00am",
        ampm: "09",
        stored: "",
    },
    {
        time: "10:00am",
        ampm: "10",
        stored: "",
    },
    {
        time: "11:00am",
        ampm: "11",
        stored: "",
    },
    {
        time: "12:00pm",
        ampm: "12",
        stored: "",
    },
    {
        time: "1:00pm",
        ampm: "13",
        stored: "",
    },
    {
        time: "2:00pm",
        ampm: "14",
        stored: "",
    },
    {
        time: "3:00pm",
        ampm: "15",
        stored: "",
    },
    {
        time: "4:00pm",
        ampm: "16",
        stored: "",
    },
    {
        time: "5:00pm",
        ampm: "17",
        stored: "",
    },
    {
        time: "6:00pm",
        ampm: "18",
        stored: "",
    },
    {
        time: "7:00pm",
        ampm: "19",
        stored: "",
    },
    {
        time: "8:00pm",
        ampm: "20",
        stored: "",
    },
    {
        time: "9:00pm",
        ampm: "21",
        stored: "",
    }
];
var arrLen = times.length;

currentDate.innerHTML = now;

function clearData() {

    var clear = confirm("This will clear the entire planner. Would you like to proceed?")

    if (clear === true) {

        for (i = 0; i < arrLen; i++) {
            localStorage.removeItem('locStor' + i);
            times[i].stored = "";
            $("#saveDat").innerHTML = times[i].stored;

        }
    }
    else { return }

}

function saveData() {
    for (i = 0; i < arrLen; i++) {

        var indexData = $('#saveDat' + i).val();
        times[i].stored = indexData;
        localStorage.setItem('locStor' + i, indexData);
    }
   
}

function renderData() {
    for (i = 0; i < arrLen; i++) {

        var getDat = localStorage.getItem('locStor' + i)
        times[i].stored = getDat;
        document.getElementById('saveDat' + i).innerHTML = times[i].stored;
        
    }
}

function tableDisp() {

    for (i = 0; i < arrLen; i++) {

        function renderTime() {
            var mom = moment(times[i].ampm, 'HH');
            const nowMom = moment().format('HH');

            if (mom._i < nowMom) { rows.attr('class', 'row past') }
            else if (mom._i > nowMom) { rows.attr('class', 'row future') }
            else if (mom._i === nowMom) { rows.attr('class', 'row present') }


        }

        const rows = $("<form>")
        renderTime();
        $(".container").append(rows);

        const timeDiv = $("<div>");
        timeDiv.attr('class', 'col-1 timeClass');
        timeDiv.text(times[i].time);

        const contentDiv = $("<textarea>");
        contentDiv.attr('class', 'col-10 contentClass');
        contentDiv.attr('id', 'saveDat' + i);
        contentDiv.text(times[i].stored);

       const butCont = $("<div>");
        butCont.attr('class', 'col-1 saveClass');

        const saveBut = $("<button>");
        saveBut.attr('class', 'clickSave')
        saveBut.text('Save');

        const clearBut = $("<button>");
        clearBut.attr('class', 'clickClear')
        clearBut.text('Clear');
        butCont.append(saveBut, clearBut);


        rows.append(timeDiv, contentDiv, butCont);
    }
}


tableDisp();
renderData();

$(".saveClass").on("click", function (event) {
    event.preventDefault();
});

$(".clickClear").on("click", function () { clearData() });
$(".clickClear").on("click", function () { renderData() });
$(".clickSave").on("click", function () { saveData() });



