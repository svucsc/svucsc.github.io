$(document).ready(function() {
    $('#calendar').fullCalendar({
        //Calendar API key
        googleCalendarApiKey: 'AIzaSyDereJ50sioVk1EKNXt7m-dtNhEYweC_5A',
        //Allow the calendar to display 4,5 and 6 weeks depending on the month
        fixedWeekCount: false,
        //Do not use aspect ratio height calculations
        height: 'auto',
        //Begin week and three day views at 6am
        minTime: "06:00:00",
        //Pull in all calendars
        eventSources: [{
            googleCalendarId: 'usa__en@holiday.calendar.google.com',
            className: 'holiday-cal'
        }, {
            googleCalendarId: 'svu.edu_nf5v7viog32c563doboaljtf4o@group.calendar.google.com',
            className: 'academics-cal'
        }, {
            googleCalendarId: 'svu.edu_cpmvje154c4g2gkvk545i6pmqk@group.calendar.google.com',
            className: 'activities-cal'
        }, {
            googleCalendarId: 'svu.edu_9cv92psfm81gqmcdr8ok95odes@group.calendar.google.com',
            className: 'arts-cal'
        }, {
            googleCalendarId: 'svu.edu_fe3j597hjc9bf2t0fb7nni6sf8@group.calendar.google.com',
            className: 'athletics-cal'
        }, {
            googleCalendarId: 'svu.edu_lg0oft04slbt53v0knekmtn60o@group.calendar.google.com',
            className: 'religious-cal'
        }],
        //Limit the number of events displayed
        eventLimit: true,
        //View specific settings
        views: {
            month: {
                eventLimit: 5
            },
            agendaThreeDay: {
                type: 'agenda',
                duration: {
                    days: 3
                },
                buttonText: '3 day'
            }
        },
        //Go to date functionality
        dayClick: function(date, allDay, jsEvent, view) {
            if (allDay) {
                $('#calendar').fullCalendar('changeView', 'basicDay');
                $('#calendar').fullCalendar('gotoDate', date);
            }
			getMonth();
        },
        //Event Modal Call
        eventClick:  function(event, jsEvent, view) {
          //field injections
            $('#modalTitle').html(event.title);
			if(event.description == undefined){
				 $('#description').html("No Description Available");
			} else {
				$('#description').html(' ' + event.description);
		}
            
            $('#location').html(event.location);
			$('#colorId').html(event.colorId);
            var startTime = new Date(event.start);
            var endTime = new Date(event.end);
			var sTime = moment(startTime).format("h:mm a");
			var eTime = moment(endTime).format("h:mm a");
			var monthTest = moment(startTime).format("M");
			if(monthTest == 3){
				var sDate = moment(startTime).format("dddd, MMMM D, YYYY");
			} else if(monthTest == 4){
				var sDate = moment(startTime).format("dddd, MMMM D, YYYY");
				
			} else if(monthTest == 6){
				var sDate = moment(startTime).format("dddd, MMMM D, YYYY");
				
			} else if(monthTest == 7){
				var sDate = moment(startTime).format("dddd, MMMM D, YYYY");
				
			} else {
				
			var sDate = moment(startTime).format("dddd, MMM. D, YYYY");
			}
            $('#date').html(sDate);
            $('#time').html(sTime + ' to ' + eTime);
            //modal call per the materialize.css documentation
            $('#eventModal').openModal();
            //this prevents the eventclick redirect to google
            return false;
        }
    //End fullcalendar brackets
    });
    
	//Switching the Banners
	
		  function getMonth(){
      var moment = $("#calendar").fullCalendar('getDate');
      var month_int = moment.format('MM');
  //you now have the visible month as an integer from 01-12
	
      if(month_int == '01'){
		  $("#main-nav").removeClass();
		  $("#main-nav").addClass("Jan");
	  } else if (month_int == '02'){
		  $("#main-nav").removeClass();
		  $("#main-nav").addClass("Feb");
	  } else if (month_int == '03'){
		  $("#main-nav").removeClass();
		  $("#main-nav").addClass("Mar");
	  } else if (month_int == '04'){
		  $("#main-nav").removeClass();
		  $("#main-nav").addClass("Apr");
	  } else if (month_int == '05'){
		  $("#main-nav").removeClass();
		  $("#main-nav").addClass("May");
	  } else if (month_int == '06'){
		  $("#main-nav").removeClass();
		  $("#main-nav").addClass("Jun");
	  } else if (month_int == '07'){
		  $("#main-nav").removeClass();
		  $("#main-nav").addClass("Jul");
	  } else if (month_int == '08'){
		  $("#main-nav").removeClass();
		  $("#main-nav").addClass("Aug");
	  } else if (month_int == '09'){
		  $("#main-nav").removeClass();
		  $("#main-nav").addClass("Sept");
	  } else if (month_int == '10'){
		  $("#main-nav").removeClass();
		  $("#main-nav").addClass("Oct");
	  } else if (month_int == '11'){
		  $("#main-nav").removeClass();
		  $("#main-nav").addClass("Nov");
	  } else {
		  $("#main-nav").removeClass();
		  $("#main-nav").addClass("Dec");
	  } 
	
}
	
	getMonth();
	
	$('.fc-right').click(function() {
    getMonth();
});
	 // Back Button
	    var view = $('#calendar').fullCalendar('getView');
        var back = view.name;	 
$("#prev").click(function() {
        $('#calendar').fullCalendar('changeView', back);
        $('.button-collapse').sideNav('hide');
		getMonth();
    });
	
	






    //Calendar toggles
    $('#academics').click(function() {
        if (this.checked) {
            $('#calendar').fullCalendar('addEventSource', {
                url: "svu.edu_nf5v7viog32c563doboaljtf4o@group.calendar.google.com",
                color: '#2da26c'
            });
        } else {
            $('#calendar').fullCalendar('removeEventSource', 'svu.edu_nf5v7viog32c563doboaljtf4o@group.calendar.google.com')
        }
    })
    $('#activities').click(function() {
        if (this.checked) {
            $('#calendar').fullCalendar('addEventSource', {
                url: "svu.edu_cpmvje154c4g2gkvk545i6pmqk@group.calendar.google.com",
                color: '#029AE4'
            });
        } else {
            $('#calendar').fullCalendar('removeEventSource', 'svu.edu_cpmvje154c4g2gkvk545i6pmqk@group.calendar.google.com')
        }
    })
    $('#arts').click(function() {
        if (this.checked) {
            $('#calendar').fullCalendar('addEventSource', {
                url: "svu.edu_9cv92psfm81gqmcdr8ok95odes@group.calendar.google.com",
                color: '#7E57C2'
            });
        } else {
            $('#calendar').fullCalendar('removeEventSource', 'svu.edu_9cv92psfm81gqmcdr8ok95odes@group.calendar.google.com')
        }
    })
    $('#athletics').click(function() {
        if (this.checked) {
            $('#calendar').fullCalendar('addEventSource', {
                url: "svu.edu_fe3j597hjc9bf2t0fb7nni6sf8@group.calendar.google.com",
                color: '#EF5350'
            });
        } else {
            $('#calendar').fullCalendar('removeEventSource', 'svu.edu_fe3j597hjc9bf2t0fb7nni6sf8@group.calendar.google.com')
        }
    })
    $('#religious').click(function() {
        if (this.checked) {
            $('#calendar').fullCalendar('addEventSource', {
                url: "svu.edu_lg0oft04slbt53v0knekmtn60o@group.calendar.google.com",
                color: '#FFB74D'
            });
        } else {
            $('#calendar').fullCalendar('removeEventSource', 'svu.edu_lg0oft04slbt53v0knekmtn60o@group.calendar.google.com')
        }
    })
    $('#holiday').click(function() {
        if (this.checked) {
            $('#calendar').fullCalendar('addEventSource', {
                url: "usa__en@holiday.calendar.google.com",
                color: '#607D8B'
            });
        } else {
            $('#calendar').fullCalendar('removeEventSource', 'usa__en@holiday.calendar.google.com')
        }
    })
    //View buttons for sidenav
    $("#day").click(function() {
		view = $('#calendar').fullCalendar('getView');
        back = view.name;
        $('#calendar').fullCalendar('changeView', 'basicDay');
        $('.button-collapse').sideNav('hide');
		getMonth();
    });
    $("#threeday").click(function() {
		view = $('#calendar').fullCalendar('getView');
        back = view.name;
        $('#calendar').fullCalendar('changeView', 'agendaThreeDay');
        $('.button-collapse').sideNav('hide');
		getMonth();
    });
    $("#week").click(function() {
		view = $('#calendar').fullCalendar('getView');
        back = view.name;
        $('#calendar').fullCalendar('changeView', 'agendaWeek');
        $('.button-collapse').sideNav('hide');
		getMonth();
    });
    $("#month").click(function() {
		view = $('#calendar').fullCalendar('getView');
        back = view.name;
        $('#calendar').fullCalendar('changeView', 'month');
        $('.button-collapse').sideNav('hide');
		getMonth();
    });
      if ($(window).width() < 650) {
        $('#calendar').fullCalendar('changeView', 'basicDay');
    } else {
        $('#calendar').fullCalendar('changeView', 'month');
    }
});
