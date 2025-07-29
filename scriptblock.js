// ==UserScript==
// @name         Bloqueador de Anuncios Personalizado
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bloquea anuncios en páginas web
// @author       CIO@OFICIAL
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Función para bloquear anuncios
    function bloquearAnuncios() {
        // Selecciona todos los elementos con la clase 'advertisement' y los oculta
        var anuncios = document.querySelectorAll('.advertisement');
        anuncios.forEach(function(anuncio) {
            anuncio.style.display = 'none';
        });

        // También puedes bloquear elementos por ID o cualquier otro selector CSS
        var anunciosPorId = document.querySelectorAll('#advertisement');
        anunciosPorId.forEach(function(anuncio) {
            anuncio.style.display = 'none';
        });
    }

    // Ejecuta la función cuando la página se carga
    window.addEventListener('load', bloquearAnuncios);

    // También puede ejecutar la función periódicamente para bloquear anuncios que se cargan dinámicamente
    setInterval(bloquearAnuncios, 1000);
})();
