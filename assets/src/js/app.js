$(function () {

    $(document).bind("ajaxSend", function () {
        $('body').showLoading();
    }).bind("ajaxComplete", function () {
        $('body').hideLoading();
    });

    $('input[type=text],textarea').keyup(function () {
        //$(this).val($(this).val().toUpperCase());
    });

});

function turnOnAjaxGlobalEvent() {
    $(document).bind("ajaxSend", function () {
        $('body').showLoading();
    }).bind("ajaxComplete", function () {
        $('body').hideLoading();
    });
}

function turnOffAjaxGlobalEvent() {
    $(document).off('ajaxComplete').off('ajaxSend');
}