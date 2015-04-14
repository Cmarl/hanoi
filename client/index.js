'use strict';

$(document).ready(init);

function init(){
  $('#start').click(buildTower);
  $('.disk').click(select);
  $('.column').click(select);
}

var $source;
var $target;

function buildTower(){
  $('.column').empty();
  var cylinderAmnt = $('input').val();

  for(var i = cylinderAmnt - 1;i >=0; i--){
    var $div = $('<div>');
    $div.text(i);
    $div.addClass('disk');
    var width = (((i + 5)/10)*100);
    $div.css('width',width + '%');
    $('.column:first').prepend($div);
    $('.column:first').removeClass('valid');
  }
}

function select(){
  if (!$source){
    if ($(this).is(':first-child')){
      $('.disk').removeClass('active');
      $source = $(this).children()[0];
      $($source).addClass('active');
      $source = $source.detach();
      $('td').addClass('valid');
    }
  }
  else {
    $target = $(this);
    console.log('set target');
    moveDisk();
  }
}

function moveDisk(){
  //if ($source.text() < $target('first-child') || $($target).length === 0){
    $target.prepend($source);
    readyNextMove();
  //} else { return; }
}

function readyNextMove(){
  $('.column').removeClass('.valid');
  $('.disk').removeClass('active');
  $source = undefined;
  $target = undefined;
}
