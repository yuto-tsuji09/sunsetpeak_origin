$(function () {
  /* ハンバーガーメニュー */
  $(".js-hamburger, .js-drawer").click(function () {
    $(".js-header").toggleClass("open");
    $(".hamburger-text").text(
      $(".js-header").hasClass("open") ? "CLOSE" : "MENU"
    );
  });

  /* フェードイン */
  $(window).scroll(function () {
    $(".fedein").each(function () {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });

  // ウィンドウのスクロールイベントを処理
  $(window).scroll(function () {
    var $newsElement = $(".mv-news");
    var scrollThreshold = $(window).height() / 2;
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition > scrollThreshold) {
      $newsElement.addClass("hidden");
    } else {
      $newsElement.removeClass("hidden");
    }
  });

  /* スムーススクロール */
  $(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();
    const targetSelector = this.hash.length ? this.hash : "html";
    const $target = $(targetSelector);
    const offset = $(window).width() >= 1024 ? 150 : 80;
    const position = $target.offset().top - offset;
    $("html, body").animate({ scrollTop: position }, 600, "swing");
  });
});

/*トップに戻る*/
let pagetop = $(".to-top");
pagetop.hide();

$(window).scroll(function () {
  if ($(this).scrollTop() > 700) {
    pagetop.fadeIn();
  } else {
    pagetop.fadeOut();
  }
});

/*タブ切り替え　　　　スワイパー*/
window.onload = function () {
  const cateNames = document.querySelectorAll(".features-list");
  const swiperContainers = document.querySelectorAll(".features-text");
  const worksTexts = document.querySelectorAll(".swiper");

  if (
    cateNames.length > 0 &&
    swiperContainers.length > 0 &&
    worksTexts.length > 0
  ) {
    cateNames[0].classList.add("active");
    swiperContainers[0].classList.add("active");
    worksTexts[0].classList.add("active");
    initializeSlider(worksTexts[0].querySelector(".swiper__slide"));
  }

  cateNames.forEach((cateName, index) => {
    cateName.addEventListener("click", () => {
      cateNames.forEach((name) => name.classList.remove("active"));
      swiperContainers.forEach((container) =>
        container.classList.remove("active")
      );
      worksTexts.forEach((text) => text.classList.remove("active"));

      cateName.classList.add("active");
      swiperContainers[index].classList.add("active");
      worksTexts[index].classList.add("active");

      setTimeout(() => {
        initializeSlider(worksTexts[index].querySelector(".swiper__slide"));
      }, 100);
    });
  });

  function initializeSlider(sliderElement) {
    if ($(sliderElement).hasClass("slick-initialized")) {
      $(sliderElement).slick("unslick");
    }

    $(sliderElement).slick({
      centerMode: true,
      centerPadding: "20%",
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 1000,
      infinite: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }
};

/*6文字以上は省略　…*/
document.addEventListener("DOMContentLoaded", function () {
  const breadcrumbCurrent = document.querySelector(".js-current");
  if (breadcrumbCurrent) {
    const text = breadcrumbCurrent.textContent;
    if (text.length > 6) {
      breadcrumbCurrent.textContent = text.slice(0, 6) + "...";
    }
  }
});
