let tabs = $(".footer-links-wrapper h3");
console.log(tabs);

tabs.click(function(){
  if($(window).width() <= 768){
    let ul = $(this).next("ul")
    ul.slideToggle()
    $(this).toggleClass("expanded")
  }


  
})


$(window).resize(function () {
  if ($(window).width() > 768) {
    $(".footer-links-wrapper ul").show();
    $(".footer-links-wrapper h3").removeClass("expanded");
  }else{
    $(".footer-links-wrapper ul").hide()
   
  }
});






























































// let plusButton = $(".footer-links-wrapper h3")
// console.log(plusButton);

// plusButton.click(function(e){
 
// //   $(".footer-links-wrapper ul ").toggle();
//  $(this).next("ul").toggle();
//   $(this).toggleClass("expanded")
// })