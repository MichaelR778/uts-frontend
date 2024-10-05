$(".counter .decrease").click(function () {
  var num = parseInt($(this).next().text());
  if (num > 0) {
    num -= 1;
    $(this).next().text(num);
    $(this)
      .parent()
      .next()
      .next()
      .text(`${num * 10}$`);

    var count = parseInt($(".count").text());
    count -= 1;
    $(".count").text(count);

    var total = parseInt($(".total:first").text().replace("$", ""));
    total -= 10;
    $(".total").text(`${total}$`);
  }
});

$(".counter .increase").click(function () {
  var num = parseInt($(this).prev().text());
  num += 1;
  $(this).prev().text(num);
  $(this)
    .parent()
    .next()
    .next()
    .text(`${num * 10}$`);

  var count = parseInt($(".count").text());
  count += 1;
  $(".count").text(count);

  var total = parseInt($(".total:first").text().replace("$", ""));
  total += 10;
  $(".total").text(`${total}$`);
});

$(".apply").click(function () {
  alert("Invalid promo code");
});

$(".checkout").click(function () {
  alert("Printing bill...");
});
