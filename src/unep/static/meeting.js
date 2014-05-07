$(document).ready(function(){    
  var collapse = new jQueryCollapse($('#meeting-texts'), { query: '> h2' });
 
  $('#meeting-texts h2 > a')
    .on('click', function(e) {
      if ($(this).attr('href').substr(0, 1) === '#') {
       // e.preventDefault();
        var selected = $('#meeting-texts').find($(this).attr('href'));
        collapse.close();
        collapse.open($('#meeting-texts h2').index(selected));
        $(window).scrollTop(selected.offset().top);
      }
      
    });
});
