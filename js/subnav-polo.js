$(document).ready(function() {
    console.log("subnav-polo.js ready!");
    $('.fourth__subnav__link_w').css('text-decoration', 'underline');
    $('.table_m').hide();
});

function SubnavW() {
    $('.fourth__subnav__link_w').css('text-decoration', 'underline');
    $('.fourth__subnav__link_m').css('text-decoration', 'none');
    $('.table_w').show();
    $('.table_m').hide();
};

function SubnavM() {
    $('.fourth__subnav__link_w').css('text-decoration', 'none');
    $('.fourth__subnav__link_m').css('text-decoration', 'underline');
    $('.table_w').hide();
    $('.table_m').show();
};