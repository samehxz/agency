
$( document ).ready(function () {
    'use strict';

    new WOW().init();
    $("#service").click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#services").offset().top},'slow');
        $('#menu-list').slideToggle();
        $('#menu-icon').css('display','block');
        $('#close-icon').css('display','none');

    });$("#service-mobile").click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#services-mobile").offset().top},'slow');
        $('#menu-list-mobile').slideToggle();
        $('#menu-icon-mobile').css('display','block');
        $('#close-icon-mobile').css('display','none');

    });

    $("#work").click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#consumers").offset().top},'slow');
        $('#menu-list').slideToggle();
        $('#menu-icon').css('display','block');
        $('#close-icon').css('display','none');

    });

    $("#work-mobile").click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#consumers-mobile").offset().top},'slow');
        $('#menu-list-mobile').slideToggle();
        $('#menu-icon-mobile').css('display','block');
        $('#close-icon-mobile').css('display','none');

    });


    $("#aboutm").click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#about").offset().top},'slow');
        $('#menu-list').slideToggle();
        $('#menu-icon').css('display','block');
        $('#close-icon').css('display','none');
    });

    $("#aboutm-mobile").click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#about-mobile").offset().top},'slow');
        $('#menu-list-mobile').slideToggle();
        $('#menu-icon-mobile').css('display','block');
        $('#close-icon-mobile').css('display','none');
    });

    $("#home").click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#ws").offset().top},'slow');
        $('#menu-list').slideToggle();
        $('#menu-icon').css('display','block');
        $('#close-icon').css('display','none');

    });
    $("#home-mobile").click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#ws").offset().top},'slow');
        $('#menu-list-mobile').slideToggle();
        $('#menu-icon-mobile').css('display','block');
        $('#close-icon-mobile').css('display','none');

    });
    $("#discover").click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#about-mobile").offset().top},'slow');
    });
    $("#discover2").click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#about").offset().top},'slow');
    });

    $('#menu-icon').click(function(e){
        e.preventDefault();
        $('#menu-list').slideToggle();
        $('#menu-icon').css('display','none');
        $('#close-icon').css('display','block');

    });
    $('#close-icon').click(function(e){
        e.preventDefault();
        $('#menu-list').slideToggle();
        $('#menu-icon').css('display','block');
        $('#close-icon').css('display','none');


    });

    $("#menu-icon-mobile").click(function(e) {
        e.preventDefault();
        $('#menu-list-mobile').slideToggle();
        $('#menu-icon-mobile').css('display','none');
        $('#close-icon-mobile').css('display','block');

    })
    $("#close-icon-mobile").click(function(e) {
        e.preventDefault();
        $('#menu-list-mobile').slideToggle();
        $('#close-icon-mobile').css('display','none');
        $('#menu-icon-mobile').css('display','block');

    })
    $('.results a').hover(function () {
        $('.results hr').css('width','8%');
    });
    $('.results a').mouseleave(function () {
        $('.results hr').css('width','2%');
    });
});
