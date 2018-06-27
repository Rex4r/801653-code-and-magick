'use strict';

var createFieldOnCanvas = function (ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 150, 40);
  ctx.fillText('Список результатов:', 150, 60);
};
var getMax = function (arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};
var createHistograms = function (ctx, width, margin, maxHeight, maxPlayerTime, playerTimes, playerNames) {
  for (var i = 0; i < playerNames.length; i++) {
    var histogramHeight = Math.round(playerTimes[i] * maxHeight / maxPlayerTime);
    var histogramX = 150 + (width + margin) * i;
    var histogramY = 90 + (maxHeight - histogramHeight);
    var histogramColor = 'rgba(0, 0, ' + Math.round(Math.random() * 255) + ', 1)';
    if (playerNames[i] === 'Вы') {
      histogramColor = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillStyle = histogramColor;
    ctx.fillRect(histogramX, histogramY, width, histogramHeight);
    ctx.fillText(playerNames[i], histogramX, 270);
  }
};
window.renderStatistics = function (ctx, names, times) {
  var HISTOGRAMS_WIDTH = 40;
  var HISTOGRAMS_MAX_HEIGHT = 150;
  var HISTOGRAMS_MARGIN = 50;
  createFieldOnCanvas(ctx);
  createHistograms(ctx, HISTOGRAMS_WIDTH, HISTOGRAMS_MARGIN, HISTOGRAMS_MAX_HEIGHT, getMax(times), times, names);
};
