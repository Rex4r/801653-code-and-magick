'use strict';

(function () {
  var WIZARDS_COUNT = 4;
  var wizardsBlock = document.querySelector('.setup-similar-list');
  document.querySelector('.setup').classList.remove('hidden');
  var wizards = (function () {
    var wizardsList = [];
    var namesList = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var surnamesList = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    var coatColorsList = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var eyesColorsList = ['black', 'red', 'blue', 'yellow', 'green'];
    var generateRandomStat = function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    };
    for (var i = 0; i < WIZARDS_COUNT; i++) {
      wizardsList[i] = {};
      wizardsList[i].name = Math.random() > 0.5 ? generateRandomStat(namesList) + ' ' + generateRandomStat(surnamesList) : generateRandomStat(surnamesList) + ' ' + generateRandomStat(namesList);
      wizardsList[i].coatColor = generateRandomStat(coatColorsList);
      wizardsList[i].eyesColor = generateRandomStat(eyesColorsList);
    }
    return wizardsList;
  })();
  var generateWizardElements = function (wizardsList, wizardsCount) {
    var wizardsElements = document.createDocumentFragment();
    var wizardElementTemlapte = document.querySelector('#similar-wizard-template').content;
    for (var i = 0; i < wizardsCount; i++) {
      var wizardElement = wizardElementTemlapte.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = wizardsList[i].name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizardsList[i].coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizardsList[i].eyesColor;
      wizardsElements.appendChild(wizardElement);
    }
    return wizardsElements;
  };
  wizardsBlock.appendChild(generateWizardElements(wizards, WIZARDS_COUNT));
  document.querySelector('.setup-similar').classList.remove('hidden');
})();
