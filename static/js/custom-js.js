/*---------------- Customised JS ------------------*/ 

/* ---- Data tables starts ---- */
$(document).ready(function() {
    $('table.display').DataTable({
        "bDestroy": true,
        "ordering": false
    });
});
/* ---- Data tables ends ---- */


/* ---- MultiSelect starts ---- */
$(document).ready(function() {
    $('#multiple-checkboxes').multiselect({
      nonSelectedText: 'Select Roles', 
      includeSelectAllOption: true,
    });
});
/* ---- MultiSelect ends ---- */


/* ---- Add class starts ---- */
$(document).ready(function() {
    $('#multiple-checkboxes').next().addClass("multiDropDown");
});
/* ---- Add class ends ---- */


/* ---- Modal animation starts ---- */
$('.modal').on('show.bs.modal', function (e) {
    $('.bd-example-modal-lg .modal-dialog').attr('class', 'modal-lg modal-dialog zoomIn animated');
    $('.bd-example-modal-xl .modal-dialog').attr('class', 'modal-xl modal-dialog zoomIn animated');
    $('.not-lg-modal .modal-dialog').attr('class', 'modal-dialog zoomIn animated');
})

$('.modal').on('hide.bs.modal', function (e) {
    $('.bd-example-modal-lg .modal-dialog').attr('class', 'modal-lg modal-dialog zoomOut animated');
    $('.bd-example-modal-xl .modal-dialog').attr('class', 'modal-xl modal-dialog zoomOut animated');
    $('.not-lg-modal .modal-dialog').attr('class', 'modal-dialog zoomOut animated');
})

$('#myModal').modal('hide')
/* ---- Modal animation ends ---- */


/* ---- Export button and class change starts ---- */
$(document).ready(function($){
    $('#tabsProcess #dataTable_filter').append('<button class="export-button btn-sm btn-primary ml-2">Export</button>');
    $('#tabsProcess #dataTable_wrapper .row:first-child div[class^="col-"]:first-child').removeClass('col-sm-12 col-md-6').addClass('col-sm-12 col-md-4');
    $('#tabsProcess #dataTable_wrapper .row:first-child div[class^="col-"]:last-child').removeClass('col-sm-12 col-md-6').addClass('col-sm-12 col-md-8');
});
/* ---- Export button and class change ends ---- */


/* ---- Time picker starts ---- */
$(document).ready(function(){
    $('#input.timepicker').timepicker({});  
});

$('.timepicker').timepicker({
    timeFormat: 'h:mm p',
    interval: 30,
    minTime: '10',
    dynamic: false,
    dropdown: true,
    scrollbar: true
  
});
/* ---- Time picker ends ---- */


/* ---- Date picker starts ---- */
$(document).ready(function(){
  $("#datepicker").datepicker({
    dateFormat: "yy-mm-dd"
  });

  $("#datepicker2").datepicker({
    dateFormat: "yy-mm-dd"
  });
});
/* ---- Date picker ends ---- */

/* ---- Add or Remove Forms starts ---- */
$(document).ready(function() {
    $(".add").click(function() {
        $("#original").clone()
            .removeAttr("id")
            .append( $('<a class="delete" href="#"><i class="fas fa-fw fa-minus-circle"></i></a>') )
            .appendTo("#additionalForms");
    });

    $("body").on('click',".delete", function() {
        $(this).closest(".input").remove();
    });
});
/* ---- Add or Remove Forms ends ---- */

/* ---- Add or Remove Forms 2 starts ---- */
$(document).ready(function() {
    $(".add2").click(function() {
        $("#original2").clone()
            .removeAttr("id")
            .append( $('<a class="delete2" href="#"><i class="fas fa-fw fa-minus-circle"></i></a>') )
            .appendTo("#additionalForms2");
    });

    $("body").on('click',".delete2", function() {
        $(this).closest(".input2").remove();
    });
});
/* ---- Add or Remove Forms 2 ends ---- */


/* ---- Add or Remove Forms 3 starts ---- */
$(document).ready(function() {
    $(".add3").click(function() {
        $("#original3").clone()
            .removeAttr("id")
            .append( $('<a class="delete3" href="#"><i class="fas fa-fw fa-minus-circle"></i></a>') )
            .appendTo("#additionalForms3");
    });

    $("body").on('click',".delete3", function() {
        $(this).closest(".input3").remove();
    });
});
/* ---- Add or Remove Forms 3 ends ---- */


/* ---- Add or Remove Forms 4 starts ---- */
$(document).ready(function() {
    $(".add4").click(function() {
        $("#original4").clone()
            .removeAttr("id")
            .append( $('<a class="delete4" href="#"><i class="fas fa-fw fa-minus-circle"></i></a>') )
            .appendTo("#additionalForms4");
    });

    $("body").on('click',".delete4", function() {
        $(this).closest(".input4").remove();
    });
});
/* ---- Add or Remove Forms 4 ends ---- */


/* ---- Datatable tabs starts ---- */
$(document).ready(function() {
    $('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e) {
        $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
    });
});
/* ---- Datatable tabs ends ---- */


/* ---- Tabs to Accordion starts ---- */
$(document).ready(function() {
  $(".panel-heading").click(function () {
    $(".show").not(this).removeClass("show").next().slideUp(300);
    $(this).toggleClass("show").next().slideToggle(300);
  });
});

$( window ).resize(function() {
  $(".panel-heading").click(function () {
    $(".show").not(this).removeClass("show").next().slideUp(300);
    $(this).toggleClass("show").next().slideToggle(300);
  });
});
/* ---- Tabs to Accordion ends ---- */


/* ---- Radio Tabs starts ---- */
$('[name=tab]').each(function(i,d){
  var p = $(this).prop('checked');
//   console.log(p);
  if(p){
    $('article').eq(i).addClass('on');
  }    
});  

$('[name=tab]').on('change', function(){
  var p = $(this).prop('checked');
  
  // $(type).index(this) == nth-of-type
  var i = $('[name=tab]').index(this);
  
  $('article').removeClass('on');
  $('article').eq(i).addClass('on');
});
/* ---- Radio Tabs ends ---- */


/* ---- Stacked popup starts ---- */
$("div[id^='exampleModal']").each(function(){
    var currentModal = $(this);
        currentModal.find('.newFieldPopUp').click(function(){
        currentModal.find('.modal-dialog').removeClass('zoomIn').addClass("zoomOut");
        currentModal.modal('hide');
        currentModal.closest("div[id^='exampleModal']").one('hidden.bs.modal', function (e) {
            $(this).nextAll("div[id^='exampleModal']").first().modal('show');
        })
    });
    
    currentModal.find('.cancel').click(function(){
        currentModal.modal('hide');
        currentModal.closest("div[id^='exampleModal']").one('hidden.bs.modal', function (e) {
            $(this).prevAll("div[id^='exampleModal']").first().modal('show');
        })
    });
});
/* ---- Stacked popup ends ---- */


/* ---- Tootip starts ---- */
$(function() {
  $('[data-toggle="popover"]').popover({
    trigger: 'hover'
  })
})
/* ---- Tootip ends ---- */


/* ---- div collapse starts ---- */
$(document).ready(function() {
   $(".taskCollapse").click(function(){
    $(this).toggleClass("active");
      $(".taskCollapseDiv").slideToggle("500");
    }); 
});
/* ---- div collapse ends ---- */


/* ---- Redirect to output details tab starts ---- */
$(document).ready(function() {
   $(".directToNextTab").click(function(){
      
      $('a[href$="taskExecuted"]').removeClass("active");
      $('a[href$="outputDetails"]').addClass("active");

      $("#taskExecuted").removeClass("active");
      $("#outputDetails").addClass("active");
      
    }); 
});
/* ---- Redirect to output details tab ends ---- */
