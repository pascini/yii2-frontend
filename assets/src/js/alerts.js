function notify(json) {

    $.notify({
        message: json.status ? json.message : json.errors,
    }, {
        type: json.status ? 'success' : 'error',
        position: 'absolute',
        z_index: 9999,
        placement: {
            from: "top",
            align: "center"
        },
        delay : 3000
    });
}

function showMessage(json) {

    swal({
        title: json.status ? 'Excelente' : 'Ops',
        html: json.status ? json.message : json.errors,
        type: json.status ? 'success' : 'error',
        //buttons : 'Ok',
    });
}

function showMessageCallback(json, callback, closeOnConfirm = true) {
    swal({
        title: json.status ? 'Excelente' : 'Ops',
        html: json.status ? json.message : json.errors,
        //html: '<b>TAB PRECO</b>',
        type: json.status ? 'success' : 'error',
//        buttons: {
//            confirm: {
//                text: "OK",
//                value: true,
//                visible: true,
//                className: "",
//                closeModal: closeOnConfirm
//            }
//        },
    }).then((value) => {
        callback();
    });
}

function showConfirm(message, confirmCallback, cancelCallback = null, closeOnConfirm = true, confirmButton = "SIM", cancelButton = "NÃO") {
    swal({
        title: 'Atenção',
        html: message,
        type: 'question',
        //buttons: [cancelButton, confirmButton],
        confirmButtonText: confirmButton,
        cancelButtonText: cancelButton,
        showCancelButton: true,
    }).then((value) => {
        if (value.value) {
            confirmCallback();
        } else {
            console.log('ELSE CALLED');
        }
    }, function (dismiss) {
        if (dismiss == 'cancel' || dismiss == 'close' || dismiss == 'overlay') {
            console.log('CALLBACK CALLED');
            cancelCallback();
        } else {
            console.log('DISMISS');
            throw dismiss;
        }
    });

}