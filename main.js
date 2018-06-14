

$("#firewood-wraper img" ).draggable();
$("#bonfire-wraper img").droppable({
drop: function(event, ui){
var width = $(this).width();
var newWidth = width + (width * 0.1);
$(this).width(newWidth);


ui.draggable.remove();

var newFirewood = $('<img src="img/FireWood.png">');
newFirewood.appendTo('#firewood-wraper');

newFirewood.draggable();

}

});
