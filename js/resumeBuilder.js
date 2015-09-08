/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 var work = [
    {
      "employer" : "Global Prodigy Academy",
      "title" : "Computer Teacher",
      "location" : "Jeonju, Korea",
      "dates" : "2012-present",
      "description" : ""
    }
    
 ];
  
 var projects = [
    {
      "title" : "Bubble Ball Korea WordPress website",
      "dates" : "June-July 2015",
      "description" : "",
      "images" : [
        "http://www.aaronsnowberger.com", 
        "http://www.google.com"
        ]
    } 
 ];
  
 var bio = {
   "name" : "Aaron Snowberger",
   "role" : "Freelance Designer/Coder",
   "welcomeMessage" : "Hi, nice to meet you.",
   "contacts" : {
     "mobile" : "",
     "email" : "aaron.snowberger@gmail.com",
     "github" : "jekkilekki",
     "twitter" : "jekkilekki",
     "location" : "Jeonju, Korea"
   },
   "skills" : [ "HTML", "CSS", "Java", "JavaScript", "PHP", "WordPress" ]
 };
 
 var education = {
   "schools" : [
    {
      "name" : "Full Sail University",
      "location" : "Online (WinterPark, FL)",
      "degree" : [ "MFA Media Design" ],
      "dates" : "April 2010-April 2011",
      "url" : "http://www.fullsail.edu"
    },
    {
      "name" : "University of Wyoming",
      "location" : "Laramie, WY",
      "degree" : [ "BS Computer Science" ],
      "dates" : "2000-2006",
      "url" : "http://www.uwyo.edu"
    }
  ],
  "onlineCourse" : {
    "title" : "JavaScript Basics",
    "school" : "Udacity",
    "dates" : "Sept 2015",
    "url" : "https://www.udacity.com/course/viewer#!/c-ud804"
  }
 };
  
function inName(name) {
 name = name.trim().split(" ");
 name[1] = name[1].toUpperCase();
 name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
 
 return name[0] + " " + name[1];
}

function displayWork() {
  for ( job in work.jobs ) {
   // create new div for work experience
    $( '#workExperience' ).append( HTMLworkStart );
    
    // concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace( "%data%", work.jobs[job].employer );
    var formattedTitle = HTMLworkTitle.replace( "%data%", work.jobs[job].title );
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $( ".work-entry:last" ).append( formattedEmployerTitle );
    
    var formattedLocation = HTMLworkLocation.replace( "%data%", work.jobs[job].location );
    $( ".work-entry:last" ).append( formattedLocation );
    
    var formattedDates = HTMLworkDates.replace( "%data%", work.jobs[job].dates );
    $( ".work-entry:last" ).append( formattedDates );
    
    var formattedDescription = HTMLworkDescription.replace( "%data%", work.jobs[job].description );
    $( ".work-entry:last" ).append( formattedDescription );
  }
};
displayWork();

projects.display = function() {
 for ( project in projects.projects ) {
  $("#projects").append(HTMLprojectStart);
  
  var formattedTitle = HTMLprojectTitle.replace( "%data%", projects.projects[project].title );
  $(".project-entry:last").append( formattedTitle );
  
  var formattedDates = HTMLprojectDates.replace( "%data%", projects.projects[project].dates );
  $(".project-entry:last").append( formattedDates );
  
  var formattedDescription = HTMLprojectDescription.replace( "%data%", projects.projects[project].description );
  $(".project-entry:last").append( formattedDescription );
  
  if ( projects.projects[project].images.length > 0 ) {
   for ( image in projects.projects[project].images ) {
    var formattedImage = HTMLprojectImage.replace( "%data%", projects.projects[project].images[image] );
    $(".project-entry:last").append( formattedImage );
   }
  }
  
 }
}

function locationizer(work_obj) {
    var locationArray = [];
    
    for( var location in work_obj.jobs ) {
        locationArray.push( work_obj.jobs[location].location );
    }
    
    return locationArray;
}

$('#main').append( internationalizeButton );
// here's a map
$('#mapDiv').append( googleMap );
