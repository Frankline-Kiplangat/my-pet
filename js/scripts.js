$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});

$(document).ready(function() {
$("button#blue").click(function(){
  $("body").removeClass();
  $("body").addClass("blue-background")
});
})
$(document).ready(function() {
  $("button#reset").click(function(){
    $("body").removeClass();
    $("body").addClass("default-background")
  });
  })