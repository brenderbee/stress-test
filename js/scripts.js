$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var stressResponseTotal = 0;
    var treatmentTotal = 0;

    $("input:checkbox[name=symptoms]:checked").each(function() {
      stressResponseTotal += parseInt($(this).val());
      return stressResponseTotal;
      });
    $("input:checkbox[name=treatments]:checked").each(function() {
      treatmentTotal += parseInt($(this).val());
      return treatmentTotal;
      });

      console.log(treatmentTotal);

    if (stressResponseTotal >= 5 && treatmentTotal >= 3) {
      alert("managing stress");
    } else if (stressResponseTotal >= 5) {
      alert("high stress");
    } else {
      alert("not stressed");
    }


      $("#result").append(stressResponseTotal + "<br>");

  });
});
