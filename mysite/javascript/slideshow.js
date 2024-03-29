$(document).ready(function() {        
      
    //Execute the slideShow, set 4 seconds for each images  
    slideShow(6000);  
  
});  
  
function slideShow(speed) {  
  
  
    //append a LI item to the UL list for displaying caption  
    $('ul.slideshow').append('<li id="slideshow-caption" class="caption"><div class="slideshow-caption-container"><h3></h3><p></p><a>Cliquer ici pour plus d\'informations</a></div></li>');  
  
    //Set the opacity of all images to 0  
    $('ul.slideshow li').css({opacity: 0.0});  
      
    //Get the first image and display it (set it to full opacity)  
    $('ul.slideshow li:first').css({opacity: 1.0});  
     
    //Get the caption of the first image from REL attribute and display it  
    $('#slideshow-caption h3').html($('ul.slideshow a:first').find('img').attr('title'));  
    $('#slideshow-caption p').html($('ul.slideshow a:first').find('img').attr('alt'));  
    $('#slideshow-caption a').attr('href', $('ul.slideshow a:first').attr('href'));
           
    //Display the caption  
    $('#slideshow-caption').css({opacity: 0.0, bottom:0});  
       
    //Call the gallery function to run the slideshow      
    var timer = setInterval('gallery()',speed);  
      
    //pause the slideshow on mouse over  
    $('ul.slideshow').hover(  
        function () {  
            clearInterval(timer);     
        },    
        function () {  
            timer = setInterval('gallery()',speed);           
        }  
    );  
      
}  
  
function gallery() {  
  
  
    //if no IMGs have the show class, grab the first image  
    var current = ($('ul.slideshow li.show')?  $('ul.slideshow li.show') : $('#ul.slideshow li:first'));  
  
    //Get next image, if it reached the end of the slideshow, rotate it back to the first image  
    var next = ((current.next().length) ? ((current.next().attr('id') == 'slideshow-caption')? $('ul.slideshow li:first') :current.next()) : $('ul.slideshow li:first'));         
    //Get next image caption  
    var title = next.find('img').attr('title');   
    var desc = next.find('img').attr('alt');
    var story_link = next.find('a').attr('href');
           
    //Set the fade in effect for the next image, show class has higher z-index  
    next.css({opacity: 0.0}).addClass('show').animate({opacity: 1.0}, 1000);  
      
    //Hide the caption first, and then set and display the caption  
    $('#slideshow-caption').animate({bottom:-70}, 300, function () {  
            //Display the content  
            $('#slideshow-caption h3').html(title);  
            $('#slideshow-caption p').html(desc);
            $('#slideshow-caption a').attr('href', story_link);
            $('#slideshow-caption').animate({bottom:0}, 500);
    });       
  
    //Hide the current image  
    current.animate({opacity: 0.0}, 1000).removeClass('show');  
  
}  
