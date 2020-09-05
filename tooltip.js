var tooltipTimeout;

$("#hover-tt").hover(function () {
      tooltipTimeout = setTimeout(showTooltip, 1500);
   },
   hideTooltip);

function showTooltip() {
   var tooltip = $("<div id='tooltip' class='tooltip'>I'm the tooltip!</div>");
   tooltip.appendTo($("#hover-tt"));
}

function hideTooltip() {
   clearTimeout(tooltipTimeout);
   $("#tooltip").fadeOut().remove();
}