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
        }
    //End fullcalendar brackets
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
        $('#calendar').fullCalendar('changeView', 'basicDay');
        $('.button-collapse').sideNav('hide');
    });
    $("#threeday").click(function() {
        $('#calendar').fullCalendar('changeView', 'agendaThreeDay');
        $('.button-collapse').sideNav('hide');
    });
    $("#week").click(function() {
        $('#calendar').fullCalendar('changeView', 'agendaWeek');
        $('.button-collapse').sideNav('hide');
    });
    $("#month").click(function() {
        $('#calendar').fullCalendar('changeView', 'month');
        $('.button-collapse').sideNav('hide');
    });
    //Default view for mobile users
    if ($(window).width() < 650) {
        $('#calendar').fullCalendar('changeView', 'basicDay');
    } else {
        //do nothing
    }
});
