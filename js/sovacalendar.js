$(document).ready(function() {

    $('#calendar, #calendar2').fullCalendar({
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
            className: 'svu-holiday-cal'
        }, {
            googleCalendarId: 'svu.edu_nf5v7viog32c563doboaljtf4o@group.calendar.google.com',
            className: 'svu-academics-cal'
        }, {
            googleCalendarId: ' svu.edu_tsbvq83kmqb2qe1qnocjd7v5f4@group.calendar.google.com',
            className: 'svu-clubs-cal'
        }, {
            googleCalendarId: 'svu.edu_cpmvje154c4g2gkvk545i6pmqk@group.calendar.google.com',
            className: 'svu-activities-cal'
        }, {
            googleCalendarId: 'svu.edu_9cv92psfm81gqmcdr8ok95odes@group.calendar.google.com',
            className: 'svu-arts-cal'
        }, {
            googleCalendarId: 'svu.edu_fe3j597hjc9bf2t0fb7nni6sf8@group.calendar.google.com',
            className: 'svu-athletics-cal'
        }, {
            googleCalendarId: 'svu.edu_lg0oft04slbt53v0knekmtn60o@group.calendar.google.com',
            className: 'svu-religious-cal'
        }],
        //Limit the number of events displayed
        eventLimit: true,
        //View specific settings
        views: {
            month: {
                eventLimit: 5
            },
            basicDay: {
                eventLimit: 11
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
        //This also controls the second calendar view on month for mobile user
        dayClick: function(date, allDay, jsEvent, view) {
            if (window.innerWidth > 550) {
                if (allDay) {
                    $('#calendar').fullCalendar('changeView', 'basicDay');
                    $('#calendar').fullCalendar('gotoDate', date);
                }
                getMonth();
            } else {
							//remove the highlights of the current day and add to selected day
							//then display that date in calendar2
							$(".fc-state-highlight").removeClass("fc-state-highlight");
							$(".fc-today").removeClass("fc-today");
							$("td[data-date="+date.format('YYYY-MM-DD')+"]").addClass("fc-state-highlight");
                $('#calendar2').fullCalendar('gotoDate', date);
            }

        },
        //Event Modal Call
        eventClick: function(event, jsEvent, view) {
            //field injections
            $('#modalTitle').html(event.title);
            //remove all classes then add the new svu- class and remove all fc- prefixed classes
            $("#modalTitle").removeClass();
            $("#modalTitle").addClass(this.className);
            $("#modalTitle").removeClass('fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-time-grid-event fc-v-event');


            if (event.description == undefined) {
                $('#description').html("No Description Available");
            } else {
                $('#description').html(' ' + event.description);
            }

            if (event.location == undefined) {
                $('#location').html("");
            } else {
                $('#location').html(' ' + event.location);
            }

            var startTime = new Date(event.start);
            var endTime = new Date(event.end);

			var sTime = moment(startTime).format("h:mm a");
			var eTime = moment(endTime).format("h:mm a");
			
			//all day modal event
			if(sTime == eTime){
				$('#time').html("All Day Event");
				
				
			
			 var eDate = moment(endTime).format("D, YYYY");
			 
			
				var monthTest = moment(startTime).format("M");
				var monthTest2 = monthTest-1;
				//testing for abbrev. and fixing moment date for all day events
			switch(monthTest){
				
				case 3:
				 sDate = moment(startTime).format("MMMM D");
				 // all day event was 1 day behind add 1 day
				 var new_day = moment(sDate, "DD-MM-YYYY").add(1, 'days');
				 new_day = moment(new_day).format("MMMM D");
				 // all day event month moved back to Jan, add months to get to event month
				 var new_month = moment(new_day, "DD-MM-YYYY").add(monthTest2, 'months');
				 new_month = moment(new_month).format("MMMM D");
				 break;
				 
				case 4:
				 sDate = moment(startTime).format("MMMM D");
				 var new_day = moment(sDate, "DD-MM-YYYY").add(1, 'days');
				 new_day = moment(new_day).format("MMMM D");
				 var new_month = moment(new_day, "DD-MM-YYYY").add(monthTest2, 'months');
				 new_month = moment(new_month).format("MMMM D");
				 break;
				
			    case 6:
				 sDate = moment(startTime).format("MMMM D");
				 var new_day = moment(sDate, "DD-MM-YYYY").add(1, 'days');
				 new_day = moment(new_day).format("MMMM D");
				 var new_month = moment(new_day, "DD-MM-YYYY").add(monthTest2, 'months');
				 new_month = moment(new_month).format("MMMM D");
				 break;
				
			    case 7:
				 sDate = moment(startTime).format("MMMM D");
				 var new_day = moment(sDate, "DD-MM-YYYY").add(1, 'days');
				 new_day = moment(new_day).format("MMMM D");
				 var new_month = moment(new_day, "DD-MM-YYYY").add(monthTest2, 'months');
				 new_month = moment(new_month).format("MMMM D");
				 break;
				
			    default:
				 sDate = moment(startTime).format("MMM. D");
				 var new_day = moment(sDate, "DD-MM-YYYY").add(1, 'days');
				 new_day = moment(new_day).format("MMM. D");
				 var new_month = moment(new_day, "DD-MM-YYYY").add(monthTest2, 'months');
				 new_month = moment(new_month).format("MMM. D");
				 break;
			}
			$('#date').html(new_month + ' - ' + eDate);
				
			} else {
				$('#time').html(sTime + ' to ' + eTime);
				var monthTest = moment(startTime).format("M");
				//testing if month needs abbreviation or not
			switch(monthTest) {
				// ex. Wednesday, March 3, 2016
				case 3:
				var sDate = moment(startTime).format("dddd, MMMM D, YYYY");
				break;
			
			    case 4:
				var sDate = moment(startTime).format("dddd, MMMM D, YYYY");
				break;
				
			    case 6:
				var sDate = moment(startTime).format("dddd, MMMM D, YYYY");
				break;
				
			    case 7:
				var sDate = moment(startTime).format("dddd, MMMM D, YYYY");
				break;
				// ex. Friday, Jan. 30, 2016
			    default:
				var sDate = moment(startTime).format("dddd, MMM. D, YYYY");
				break;
			}
			$('#date').html(sDate);
			}

            var sTime = moment(startTime).format("h:mm a");
            var eTime = moment(endTime).format("h:mm a");
            if (sTime == eTime) {
                $('#time').html("All Day Event");

                var eDate = moment(endTime).format("D, YYYY");

                var monthTest = moment(startTime).format("M");
                var monthTest2 = monthTest - 1;
                if (monthTest == 3) {
                    sDate = moment(startTime).format("MMMM D");
                    var new_day = moment(sDate, "DD-MM-YYYY").add(1, 'days');
                    new_day = moment(new_day).format("MMMM D");
                    var new_month = moment(new_day, "DD-MM-YYYY").add(monthTest2, 'months');
                    new_month = moment(new_month).format("MMMM D");


                } else if (monthTest == 4) {
                    sDate = moment(startTime).format("MMMM D");
                    var new_day = moment(sDate, "DD-MM-YYYY").add(1, 'days');
                    new_day = moment(new_day).format("MMMM D");
                    var new_month = moment(new_day, "DD-MM-YYYY").add(monthTest2, 'months');
                    new_month = moment(new_month).format("MMMM D");

                } else if (monthTest == 6) {
                    sDate = moment(startTime).format("MMMM D");
                    var new_day = moment(sDate, "DD-MM-YYYY").add(1, 'days');
                    new_day = moment(new_day).format("MMMM D");
                    var new_month = moment(new_day, "DD-MM-YYYY").add(monthTest2, 'months');
                    new_month = moment(new_month).format("MMMM D");

                } else if (monthTest == 7) {
                    sDate = moment(startTime).format("MMMM D");
                    var new_day = moment(sDate, "DD-MM-YYYY").add(1, 'days');
                    new_day = moment(new_day).format("MMMM D");
                    var new_month = moment(new_day, "DD-MM-YYYY").add(monthTest2, 'months');
                    new_month = moment(new_month).format("MMMM D");

                } else {

                    sDate = moment(startTime).format("MMM. D");
                    var new_day = moment(sDate, "DD-MM-YYYY").add(1, 'days');
                    new_day = moment(new_day).format("MMM. D");
                    var new_month = moment(new_day, "DD-MM-YYYY").add(monthTest2, 'months');
                    new_month = moment(new_month).format("MMM. D");
                }
                $('#date').html(new_month + ' - ' + eDate);

            } else {
                $('#time').html(sTime + ' to ' + eTime);
                var monthTest = moment(startTime).format("M");
                if (monthTest == 3) {
                    var sDate = moment(startTime).format("dddd, MMMM D, YYYY");
                } else if (monthTest == 4) {
                    var sDate = moment(startTime).format("dddd, MMMM D, YYYY");

                } else if (monthTest == 6) {
                    var sDate = moment(startTime).format("dddd, MMMM D, YYYY");

                } else if (monthTest == 7) {
                    var sDate = moment(startTime).format("dddd, MMMM D, YYYY");

                } else {

                    var sDate = moment(startTime).format("dddd, MMM. D, YYYY");
                }
                $('#date').html(sDate);
            }



            //modal call per the materialize.css documentation
            $('#eventModal').openModal();
            //this prevents the eventclick redirect to google
            return false;
        }
        //End fullcalendar brackets
    });


		//This section deals with the day view on month view for mobile users
    //change the mobile second calendar to day view for use with month view
    $('#calendar2').fullCalendar('changeView', 'basicDay');
    function setMobileCal() {
        var view = $('#calendar').fullCalendar('getView');
        if (view.name == 'month' && window.innerWidth < 551) {
            $("#calendar2").css({
                "display": "block"
            });
        } else {
            $("#calendar2").css({
                "display": "none"
            });
        }
    }
    //if we resize the window we need to call setmobilecal
    $(window).resize(function() {
        setMobileCal();
    });



    //Switching the Banners
    function getMonth() {
        var moment = $("#calendar").fullCalendar('getDate');
        var month_int = moment.format('MM');
        //you now have the visible month as an integer from 01-12

        if (month_int == '01') {
            $("#main-nav").removeClass();
            $("#main-nav").addClass("Jan");
        } else if (month_int == '02') {
            $("#main-nav").removeClass();
            $("#main-nav").addClass("Feb");
        } else if (month_int == '03') {
            $("#main-nav").removeClass();
            $("#main-nav").addClass("Mar");
        } else if (month_int == '04') {
            $("#main-nav").removeClass();
            $("#main-nav").addClass("Apr");
        } else if (month_int == '05') {
            $("#main-nav").removeClass();
            $("#main-nav").addClass("May");
        } else if (month_int == '06') {
            $("#main-nav").removeClass();
            $("#main-nav").addClass("Jun");
        } else if (month_int == '07') {
            $("#main-nav").removeClass();
            $("#main-nav").addClass("Jul");
        } else if (month_int == '08') {
            $("#main-nav").removeClass();
            $("#main-nav").addClass("Aug");
        } else if (month_int == '09') {
            $("#main-nav").removeClass();
            $("#main-nav").addClass("Sept");
        } else if (month_int == '10') {
            $("#main-nav").removeClass();
            $("#main-nav").addClass("Oct");
        } else if (month_int == '11') {
            $("#main-nav").removeClass();
            $("#main-nav").addClass("Nov");
        } else {
            $("#main-nav").removeClass();
            $("#main-nav").addClass("Dec");
        }
        //this calls the method to update the mobile view for the second day calendar on month view
        setMobileCal();
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

	
	
// test stuff








    //Calendar toggles
    $('#academics').click(function() {
        if (this.checked) {
            $('#calendar, #calendar2').fullCalendar('addEventSource', {
                url: "svu.edu_nf5v7viog32c563doboaljtf4o@group.calendar.google.com",
                color: '#2da26c'
            });
        } else {
            $('#calendar, #calendar2').fullCalendar('removeEventSource', 'svu.edu_nf5v7viog32c563doboaljtf4o@group.calendar.google.com')
        }
    })
    $('#clubs').click(function() {
        if (this.checked) {
            $('#calendar, #calendar2').fullCalendar('addEventSource', {
                url: "svu.edu_tsbvq83kmqb2qe1qnocjd7v5f4@group.calendar.google.com",
                color: 'rgba(255,209,0, 0.8)'
            });
        } else {
            $('#calendar, #calendar2').fullCalendar('removeEventSource', 'svu.edu_tsbvq83kmqb2qe1qnocjd7v5f4@group.calendar.google.com')
        }
    })
    $('#activities').click(function() {
        if (this.checked) {
            $('#calendar, #calendar2').fullCalendar('addEventSource', {
                url: "svu.edu_cpmvje154c4g2gkvk545i6pmqk@group.calendar.google.com",
                color: '#029AE4'
            });
        } else {
            $('#calendar, #calendar2').fullCalendar('removeEventSource', 'svu.edu_cpmvje154c4g2gkvk545i6pmqk@group.calendar.google.com')
        }
    })
    $('#arts').click(function() {
        if (this.checked) {
            $('#calendar, #calendar2').fullCalendar('addEventSource', {
                url: "svu.edu_9cv92psfm81gqmcdr8ok95odes@group.calendar.google.com",
                color: '#7E57C2'
            });
        } else {
            $('#calendar, #calendar2').fullCalendar('removeEventSource', 'svu.edu_9cv92psfm81gqmcdr8ok95odes@group.calendar.google.com')
        }
    })
    $('#athletics').click(function() {
        if (this.checked) {
            $('#calendar, #calendar2').fullCalendar('addEventSource', {
                url: "svu.edu_fe3j597hjc9bf2t0fb7nni6sf8@group.calendar.google.com",
                color: '#EF5350'
            });
        } else {
            $('#calendar, #calendar2').fullCalendar('removeEventSource', 'svu.edu_fe3j597hjc9bf2t0fb7nni6sf8@group.calendar.google.com')
        }
    })
    $('#religious').click(function() {
        if (this.checked) {
            $('#calendar, #calendar2').fullCalendar('addEventSource', {
                url: "svu.edu_lg0oft04slbt53v0knekmtn60o@group.calendar.google.com",
                color: '#FFB74D'
            });
        } else {
            $('#calendar, #calendar2').fullCalendar('removeEventSource', 'svu.edu_lg0oft04slbt53v0knekmtn60o@group.calendar.google.com')
        }
    })
    $('#holiday').click(function() {
            if (this.checked) {
                $('#calendar, #calendar2').fullCalendar('addEventSource', {
                    url: "usa__en@holiday.calendar.google.com",
                    color: '#607D8B'
                });
            } else {
                $('#calendar, #calendar2').fullCalendar('removeEventSource', 'usa__en@holiday.calendar.google.com')
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

});
