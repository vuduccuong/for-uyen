const homeController = {
  init: function () {
    homeController.registerEvent();
  },
  registerEvent: function () {
    // tab event
    $(".button_group button")
      .off("click")
      .on("click", function () {
        $("button.active").removeClass("active");
        $(this).addClass("active");
        const id = $(this).attr("data-id");
        const tab_must_active = `.tab-${id}`;
        $(".tab").addClass("hide");
        $(tab_must_active).removeClass("hide");
      });
  },
};

$(document).ready(function () {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    speed: 400,
    spaceBetween: 100,
    loop: true,
  });

  homeController.init();
});
