/*
 * Change Navbar color while scrolling
*/

// $(window).scroll(function () {
//   handleTopNavAnimation();
// });

// $(window).load(function () {
//   handleTopNavAnimation();
// });

// function handleTopNavAnimation() {
//   var top = $(window).scrollTop();

//   if (top > 10) {
//     $('#site-nav').addClass('navbar-solid');
//   }
//   else {
//     $('#site-nav').removeClass('navbar-solid');
//   }
// }

// function mudaImagem() {

//   window.setTimeout(function () {
//     $('#site-header').addClass("background2").addClass("fade-in").removeClass("fade-out").removeClass("background1");
//     window.setTimeout(function () {
//       $('#site-header').addClass("fade-out").removeClass("fade-in");
//       window.setTimeout(function () {
//         $('#site-header').addClass("background3").addClass("fade-in").removeClass("fade-out").removeClass("background2");
//         window.setTimeout(function () {
//           $('#site-header').addClass("fade-out").removeClass("fade-in");
//           window.setTimeout(function () {
//             $('#site-header').addClass("background4").addClass("fade-in").removeClass("fade-out").removeClass("background3");
//             window.setTimeout(function () {
//               $('#site-header').addClass("fade-out").removeClass("fade-in");
//               window.setTimeout(function () {
//                 $('#site-header').addClass("background5").addClass("fade-in").removeClass("fade-out").removeClass("background4");
//                 window.setTimeout(function () {
//                   $('#site-header').addClass("fade-out").removeClass("fade-in");
//                   window.setTimeout(function () {
//                     $('#site-header').addClass("background6").addClass("fade-in").removeClass("fade-out").removeClass("background5");
//                     window.setTimeout(function () {
//                       $('#site-header').addClass("fade-out").removeClass("fade-in");
//                       window.setTimeout(function () {
//                         $('#site-header').addClass("background1").addClass("fade-in").removeClass("fade-out").removeClass("background6");
//                         window.setTimeout(function () {
//                           $('#site-header').addClass("fade-out").removeClass("fade-in");
//                           mudaImagem();
//                         }, 3000);
//                       }, 800);
//                     }, 3000);
//                   }, 800);
//                 }, 3000);
//               }, 800);
//             }, 3000);
//           }, 800);
//         }, 3000);
//       }, 800);
//     }, 3000);
//   }, 800);
// }
// window.setTimeout(function () {
//   $('#site-header').addClass("fade-out");
//   mudaImagem();
// }, 3000);
/*
 * Registration Form
*/

var config = {
  apiKey: "AIzaSyByFGjg2aKXXBqLnOWQqZYq_pfNBYBTwTI",
  authDomain: "conpet-a5157.firebaseapp.com",
  databaseURL: "https://conpet-a5157.firebaseio.com",
  projectId: "conpet-a5157",
  storageBucket: "conpet-a5157.appspot.com",
  messagingSenderId: "921821181956"
};
firebase.initializeApp(config);

function writeUserData(userId, nome, email, cpf, pet, telefone, endereco, cep, cidade, estado, universidad, alojamento, restricao) {
  firebase.database().ref('users/' + userId).set({
    nome: nome,
    email: email,
    cpf: cpf,
    pet: pet,
    telefone: telefone,
    endereco: endereco,
    cep: cep,
    cidade: cidade,
    estado: estado,
    universidade: universidade,
    alojamento: alojamento,
    restricao: restricao
  }, function (error) {
    if (error) {
      alert("Erro! Por favor, efetue o processo de inscrição novamente" + error);
    }
    else {
      alert("Para efetuar a sua inscrição, faça a transferência de R$130,00 (em até 3 dias úteis) para a seguinte conta bancária. Após o depósito, envie uma mensagem para o email CONPET@PETELETRICA.COM com o recibo anexado");
      document.getElementById("registration-form").style.visibility = "hidden";
      // document.getElementById("buttonAppear").innerHTML = '<!-- INICIO FORMULARIO BOTAO PAGSEGURO --><form target="_blank" action="https://pagseguro.uol.com.br/checkout/v2/payment.html" method="post"><input type="hidden" name="code" value="FEE38B493434161224A36F93CCE2B663" /><input type="hidden" name="iot" value="button" /><input type="image" src="https://stc.pagseguro.uol.com.br/public/img/botoes/pagamentos/209x48-comprar-azul-assina.gif" name="submit" alt="Pague com PagSeguro - é rápido, grátis e seguro!" /></form>';
      // document.getElementById("mensagemPagamento").innerHTML = "<p>Realize o pagamento da inscrição, clicando no botão abaixo, para efetivar a sua inscrição</p>"
      document.getElementById("mensagemPagamento").innerHTML = "<p style='font-size: 25px;text-align: center !important;'>Para efetuar a sua inscrição, faça a transferência de R$130,00 (em até 3 dias úteis) para a seguinte conta bancária. Após o depósito, envie uma mensagem para o email CONPET@PETELETRICA.COM com o recibo anexado</p><p>Banco do Brasil</p><p>Agẽncia: 2995-5</p><p>Conta Bancária: 44001-9</p><p>Titular: Alexandre Cabral Bedeschi</p>"
    }
  });
}

$('#registration-form').submit(function (e) {
  e.preventDefault();

  var email = $('#registration-form #email').val();
  var password = $('#registration-form #password').val();
  var nome = $('#registration-form #nome').val();
  var telefone = $('#registration-form #telefone').val();
  var cep = $('#registration-form #cep').val();
  var endereco = $('#registration-form #endereco').val();
  var cpf = $('#registration-form #cpf').val();
  var pet = $('#registration-form #pet').val();
  var cidade = $('#registration-form #cidade').val();
  var estado = $('#registration-form #estado').val();
  var universidade = $('#registration-form #universidade').val();
  var alojamento = $('#registration-form #alojamento').val();
  var restricao = $('#registration-form #restricao').val();


  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      writeUserData(user.uid, nome, email, cpf, pet, telefone, endereco, cep, cidade, estado, universidade, alojamento, restricao);
    } else {
      // No user is signed in.
    }
  });




  // var postForm = { //Fetch form data
  //         'fname'     : $('#registration-form #fname').val(),
  //         'lname'     : $('#registration-form #lname').val(),
  //         'email'     : $('#registration-form #email').val(),
  //         'cell'      : $('#registration-form #cell').val(),
  //         'address'   : $('#registration-form #address').val(),
  //         'zip'       : $('#registration-form #zip').val(),
  //         'city'      : $('#registration-form #city').val(),
  //         'program'   : $('#registration-form #program').val()
  // };

  // $.ajax({
  //         type      : 'POST',
  //         url       : './assets/php/contact.php',
  //         data      : postForm,
  //         dataType  : 'json',
  //         success   : function(data) {
  //                         if (data.success) {
  //                             $('#registration-msg .alert').html("Registration Successful");
  //                             $('#registration-msg .alert').removeClass("alert-danger");
  //                             $('#registration-msg .alert').addClass("alert-success");
  //                             $('#registration-msg').show();
  //                         }
  //                         else
  //                         {
  //                             $('#registration-msg .alert').html("Registration Failed");
  //                             $('#registration-msg .alert').removeClass("alert-success");
  //                             $('#registration-msg .alert').addClass("alert-danger");
  //                             $('#registration-msg').show();
  //                         }
  //                     }
  //     });
});

/*
 * SmoothScroll
*/

smoothScroll.init();