localStorage.setItem("", "This can be anything, simple string, or a complex object");



  function chooseAppointment(e){
    e.preventDefault();
    let appType = document.forms["appointment-type"]["appointment-names"].value;
    
    if (appType == "blank"){
        let error1 = document.getElementById("error1");
        error1.innerHTML = '<p>Please select an appointment type to continue</p>';
        error1.style.display = "block";
    }
    else{
        document.getElementById("error1").style.display = "none";
        if (appType == 'daycare' || appType == 'training'){
            document.getElementById("pt2").style.display = "block";
            document.getElementById("recurring-days").style.display = "none";
            document.getElementById("drop-off-time-div").style.display = "none";
            document.getElementById("pick-up-time-div").style.display = "none";
            document.getElementById("start-date-div").style.display = "none";
            document.getElementById("end-date-div").style.display = "none";
            document.getElementById("date-div").style.display = "none";
            document.getElementById("continue-to-info").style.display = "none";
        }
        else{
            document.getElementById("pt2").style.display = "none";

            if (appType == 'boarding'){
                document.getElementById("recurring-days").style.display = "none";
                document.getElementById("drop-off-time-div").style.display = "block";
                document.getElementById("pick-up-time-div").style.display = "block";
                document.getElementById("start-date-div").style.display = "block";
                document.getElementById("end-date-div").style.display = "block";
                document.getElementById("date-div").style.display = "none";
                document.getElementById("continue-to-info").style.display = "block";
            }
            else if (appType == 'grooming'){
                document.getElementById("recurring-days").style.display = "none";
                document.getElementById("drop-off-time-div").style.display = "block";
                document.getElementById("pick-up-time-div").style.display = "none";
                document.getElementById("start-date-div").style.display = "none";
                document.getElementById("end-date-div").style.display = "none";
                document.getElementById("date-div").style.display = "block";
                document.getElementById("continue-to-info").style.display = "block";
            }
        }
        localStorage.setItem("appType", appType);
        localStorage.setItem("recurrence", "N/A");
    }
  }

  function chooseRecurrence(e){
    e.preventDefault();
    let recurrence = document.forms["app-recurrence"]["app-recurrence"].value;
    if (localStorage.getItem("appType") == "daycare"){
        console.log(recurrence);
        if (recurrence == "Multi"){
            document.getElementById("recurring-days").style.display = "block";
            document.getElementById("drop-off-time-div").style.display = "block";
            document.getElementById("pick-up-time-div").style.display = "block";
            document.getElementById("start-date-div").style.display = "block";
            document.getElementById("end-date-div").style.display = "block";
            document.getElementById("date-div").style.display = "none";
            document.getElementById("continue-to-info").style.display = "block";
        }
        else if (recurrence == "One"){
            document.getElementById("recurring-days").style.display = "none";
            document.getElementById("drop-off-time-div").style.display = "block";
            document.getElementById("pick-up-time-div").style.display = "block";
            document.getElementById("start-date-div").style.display = "none";
            document.getElementById("end-date-div").style.display = "none";
            document.getElementById("date-div").style.display = "block";
            document.getElementById("continue-to-info").style.display = "block";
        }
    }
    else if (localStorage.getItem("appType") == "training"){
        if (recurrence == "Multi"){
            document.getElementById("recurring-days").style.display = "block";
            document.getElementById("drop-off-time-div").style.display = "block";
            document.getElementById("pick-up-time-div").style.display = "none";
            document.getElementById("start-date-div").style.display = "block";
            document.getElementById("end-date-div").style.display = "block";
            document.getElementById("date-div").style.display = "none";
            document.getElementById("continue-to-info").style.display = "block";
        }
        else if (recurrence == "One"){
            document.getElementById("recurring-days").style.display = "none";
            document.getElementById("drop-off-time-div").style.display = "block";
            document.getElementById("pick-up-time-div").style.display = "none";
            document.getElementById("start-date-div").style.display = "block";
            document.getElementById("end-date-div").style.display = "none";
            document.getElementById("date-div").style.display = "block";
            document.getElementById("continue-to-info").style.display = "block";
        }
    }
    localStorage.setItem("recurrence", recurrence);
  }


  function bookAppointment(e){
    let recurringDays = document.forms["app-info"]["dow-select"].value;
    localStorage.setItem("recurringDays", recurringDays);

    let dropOff = document.forms["app-info"]["drop-off-time"].value;
    localStorage.setItem("dropOff", dropOff);

    let pickUp = document.forms["app-info"]["pick-up-time"].value;
    localStorage.setItem("pickUp", pickUp);

    let startDate = document.forms["app-info"]["app-start-date"].value;
    localStorage.setItem("startDate", startDate);

    let endDate = document.forms["app-info"]["app-end-date"].value;
    localStorage.setItem("endDate", endDate);

    let date = document.forms["app-info"]["app-date"].value;
    localStorage.setItem("date", date);
        
  }