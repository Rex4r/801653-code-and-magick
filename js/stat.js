'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 150, 40);
  ctx.fillText('Список результатов:', 150, 60);
  var getMaxTime = function (playersTimes) {
    var maxTime = playersTimes[0];
    for (var i = 0; i < playersTimes.length; i++) {
      if (maxTime < playersTimes[i]) {
        maxTime = playersTimes[i];
      }
    }
    return maxTime;
  };
  var maxTime = getMaxTime(times);
  var HISTOGRAMS_WIDTH = 40;
  var HISTOGRAMS_MAX_HEIGHT = 150;
  var HISTOGRAMS_MARGIN = 50;
  var createHistogram = function (width, margin, maxHeight, maxPlayerTime, playerTime, playerName, playerNumber) {
    var histogramHeight = Math.round(playerTime * HISTOGRAMS_MAX_HEIGHT / maxPlayerTime);
    var histogramX = 150 + (HISTOGRAMS_WIDTH + HISTOGRAMS_MARGIN) * playerNumber;
    var histogramY = 90 + (HISTOGRAMS_MAX_HEIGHT - histogramHeight);
    var histogramColor = 'rgba(0, 0, ' + Math.round(Math.random() * 255) + ', 1)';
    if (playerName === 'Вы') {
      histogramColor = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillStyle = histogramColor;
    ctx.fillRect(histogramX, histogramY, HISTOGRAMS_WIDTH, histogramHeight);
    ctx.fillText(playerName, histogramX, 270);
  };
  for (var i = 0; i < times.length; i++) {
    createHistogram(HISTOGRAMS_WIDTH, HISTOGRAMS_MARGIN, HISTOGRAMS_MAX_HEIGHT, maxTime, times[i], names[i], i);
  }
};
