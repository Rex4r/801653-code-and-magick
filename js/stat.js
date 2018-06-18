'use strict';

var renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 150, 40);
  ctx.fillText('Список результатов:', 150, 60);
  var maxTime = times[0];
  for (var i = 0; i < times.length; i++) {
    if (maxTime < times[i]) {
      maxTime = times[i];
    }
  }
  var HISTOGRAMS_WIDTH = 40;
  var HISTOGRAMS_MAX_HEIGHT = 150;
  var HISTOGRAMS_MARGIN = 50;
  for (i = 0; i < times.length; i++) {
    var histogramHeight = Math.round(times[i] * HISTOGRAMS_MAX_HEIGHT / maxTime);
    var histogramX = 150 + (HISTOGRAMS_WIDTH + HISTOGRAMS_MARGIN) * i;
    var histogramY = 90 + (HISTOGRAMS_MAX_HEIGHT - histogramHeight);
    var histogramColor = 'rgba(0, 0, ' + (names[i] === 'Вы' ? 255 : Math.round(Math.random() * 255)) + ', 1)'
    ctx.fillStyle = histogramColor;
    ctx.fillRect(histogramX, histogramY, HISTOGRAMS_WIDTH, histogramHeight);
    ctx.fillText(names[i], histogramX, 270);
  }
};
