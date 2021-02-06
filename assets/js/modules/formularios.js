export function formValidate() {
  //Agregar datos a input hidden
  var sbjMedio = sbjs.get.current.mdm,
    sbjFuente = sbjs.get.current.src;

  $("#fuenteSbj").val(sbjFuente);
  $("#medioSbj").val(sbjMedio);

  $(".wpcf7").on("wpcf7:mailsent", function (event) {
    console.log("send");
    Swal.fire({
      title: "Mensaje enviado",
      text: "¡Gracias por solicitar información, pronto te contactaremos!",
      icon: "success",
      confirmButtonText: "cerrar",
    });
  });

  $(".wpcf7").on("wpcf7:mailfailed", function (event) {
    console.log("Failed");
    console.log(event);
    Swal.fire({
      icon: "error",
      title: "Ha ocurrido un error",
      text: '"Mensaje de error impreso"',
    });
  });

  $(".wpcf7").on("wpcf7invalid", function () {
    console.log("invalid");
  });

  $(".wpcf7").on("wpcf7submit", function (e) {
    e.preventDefault();
    console.log("wpcf7submit");
    // Aplicando RECAPTCHA V3:
    // grecaptcha.ready(function () {
    //   grecaptcha
    //     .execute("6LdIYL8ZAAAAAPwLeHo8zLAJMS4OoSsH-AOwSi34", {
    //       action: "subscribe_newsletter",
    //     })
    //     .then(function (token) {
    //       $(".wpcf7").prepend(
    //         '<input type="hidden" name="token" value="' + token + '">'
    //       );
    //       $(".wpcf7").prepend(
    //         '<input type="hidden" name="action" value="subscribe_newsletter">'
    //       );
    //       $(".wpcf7").unbind("submit").submit();
    //     });
    // });

  });

  // Validador de Formulario de contacto
  $(".formulario_cotizar").validate({
    rules: {
      inputName: {
        required: true,
        lettersonly: true,
      },
      inputEmail: {
        required: true,
        email: true,
      },
      inputRut: {
        required: false,
        Rut: true,
      },
      inputTelefono: {
        required: true,
        digits: true,
        minlength: 9,
        maxlength: 9,
      },
    },
    messages: {
      inputName: "Ingresa solo letras.",
      inputEmail: {
        required: "Es necesario tu dirección de correo",
        email: "El formato de tu email debe ser similar a: name@domain.com",
      },
      inputRut: "Ingresa un RUT valido.",
      inputTelefono: {
        required: "Ingresa tu numero de telefono",
        minlength: jQuery.validator.format(
          "Introduce al menos {0} carácteres."
        ),
      },
    },
    submitHandler: function (form) {},
    errorPlacement: function (error, element) {
      $(element).parents(".form-group").append(error);
    },
  });
  //Mensajes Personalizados
  jQuery.extend(jQuery.validator.messages, {
    digits: "Por favor ingresa sólo números.",
  });
  //Verificación de rut desde plugin, solo muestra datos en consola
  $("#inputRut").Rut({
    on_error: function () {
      console.log("Rut invalido");
    },
    on_success: function () {
      console.log("RUT válido");
    },
    format_on: "keyup",
    //digito_verificador: "#digito-verificador",
    //format: false,
  });

  // Habilita el boton de submit si pasan todos los inputs la validación
  $(".formulario_cotizar").on("keyup keypress", function (e) {
    if ($(this).valid()) {
      $("#boton_enviar").prop("disabled", false);
    } else {
      $("#boton_enviar").prop("disabled", true);
    }
  });

  //Añade metodo RUT al validador
  $.validator.addMethod(
    "Rut",
    function (value, element) {
      if ($.Rut.validar(value)) {
        return true;
      } else {
        return false;
      }
    },
    "Debe ser un rut valido."
  );

  // No se permiten URLs
  $.validator.addMethod(
    "no_url",
    function validatePositionNummer(value) {
      var re = /^[a-zA-Z0-9\-\.\:\\]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;

      var re1 = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

      var trimmed = $.trim(value);

      if (trimmed == "") {
        return true;
      }

      if (trimmed.match(re) == null && re1.test(trimmed) == false) {
        return true;
      }
    },
    "No se permiten URLs"
  );

  // Validación de sólo letras y espacio
  $.validator.addMethod(
    "lettersonly",
    function (value, element) {
      return this.optional(element) || /^[a-z\s]+$/i.test(value);
    },
    "Por favor ingresa sólo letras."
  );
}
