$().ready(function() {
  $("#myform").validate({
    rules: {
      name: "required",
      name2: "required",
      message: "required",
      id: "required",
      phone: "required",
      code: {
        required: true,
        minlength: 16,
        maxlength: 16,
        number: true
      },
      activity: {
      	required: true
      },
      email: {
      required: true,
      email: true
      },
    },
    messages: {
      name: "Por favor introduzca su nombre y apellido",
      name2: "Por favor introduzca su nombre y apellido",
      id: "Por favor introduzca su n&uacute;mero de c&eacute;dula o pasaporte",
      phone: "Por favor introduzca su n&uacute;mero de tel&eacute;fono",
      message: "Este campo es obligatorio",
      code: {
        required: "Este campo es obligatorio",
        minlength: "Su c&oacute;digo NIF contiene 16 d&iacute;gitos",
        maxlength: "Su c&oacute;digo NIF contiene 16 d&iacute;gitos",
        number: "Su c&oacute;digo NIF contiene 16 d&iacute;gitos"
      },
      activity: {
        required: "Por favor selecciona una actividad"
      },
      email: {
        required: "Por favor introduzca su e-mail",
        email: "Por favor introduzca un e-mail válido"
      },
    }
  });
});

jQuery(function($){
   $("#phone_number").mask("(999) 999-9999");
});