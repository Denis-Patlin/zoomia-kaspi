$(document).ready(function () {
    $(".open").click(function () {
        var container = $(this).parents(".acordion-item");
        var trigger = container.find(".faq-t");
        var question = container.find(".question");
        const parent = $(this).parent();

        if (parent.hasClass("acordion-item--active")) {
            parent.removeClass("acordion-item--active");
        } else {
            $(".acordion-item").removeClass("acordion-item--active");
            parent.addClass("acordion-item--active");
        }
        if (trigger.hasClass("faq-o")) {
            trigger.removeClass("faq-o");
        } else {
            $(".faq-t").removeClass("faq-o");
            trigger.addClass("faq-o");
        }
        if (question.hasClass("question-active")) {
            question.removeClass("question-active");
        } else {
            $(".question").removeClass("question-active");
            question.addClass("question-active");
        }
    });
});
