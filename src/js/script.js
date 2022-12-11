const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  close = document.querySelector(".menu__close"),
  link = document.querySelector(".menu__list");
hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

link.addEventListener("click", () => {
  menu.classList.remove("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});

$(".price__link").each(function (i) {
  $(this).on("click", function (e) {
    e.preventDefault();
    $(".price__main").eq(i).toggleClass("price__main_active");
    $(".price__list").eq(i).toggleClass("price__list_active");
  });
});

$(".price__linkback").each(function (i) {
  $(this).on("click", function (e) {
    e.preventDefault();
    $(".price__main").eq(i).toggleClass("price__main_active");
    $(".price__list").eq(i).toggleClass("price__list_active");
  });
});
function validateForms(form) {
  $(form).validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      phone: {
        required: true,
        minlength: 9,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: "Пожалуйста, введите свое имя",
        minlength: jQuery.validator.format("Введите {0} символа!"),
      },
      phone: {
        required: "Пожалуйста,введите свой телефон",
        minlength: jQuery.validator.format("Введите минимум {0} символов!"),
      },
      email: {
        required: "Пожалуйста, введите свою почту",
        email: "Неправильно введен адрес почты",
      },
    },
  });
}
validateForms("#price-form");
validateForms("#questions__form");

$("form").submit(function (e) {
  e.preventDefault();

  if (!$(this).valid()) {
    return;
  }

  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize(),
  }).done(function () {
    $(this).find("input").val("");
    $(".overlay, #thanks").fadeIn("slow");
    $("form").trigger("reset");
  });
  return false;
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 1600) {
    $(".pageup").fadeIn();
  } else {
    $(".pageup").fadeOut();
  }
});
$("a[href^='#up']").click(function () {
  const _href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
  return false;
});

$(document).ready(function () {
  $(".feedback__carousel").slick({
    speed: 1200,
    adaptiveHeight: true,
    fade: true,
    cssEase: "linear",
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/carousel_l.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/carousel_r.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
$(".modal__close").on("click", function () {
  $(".overlay, #thanks").fadeOut("slow");
});
