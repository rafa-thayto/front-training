// // (IIFE)()
// (function() {

//   // Pega todos os elementos com a class 'opcoesDoCartao-remove'
//   const btns = document.querySelectorAll('.opcoesDoCartao-remove');

//   // Adiciona o evento click em todos os buttons
//   for(let btn of btns) { // let i = 0; i < btns.length; i++
//     btn.addEventListener('click', function() {
//       const cartao = btn.parentNode.parentNode;

//       cartao.classList.add('cartao--some');

//       cartao.addEventListener('transitionend', function() {
//         cartao.remove();
//       });

//       // setTimeout(function() {
//       //   cartao.remove();
//       // }, 300);
//     });
//   }

// })();
"use strict";