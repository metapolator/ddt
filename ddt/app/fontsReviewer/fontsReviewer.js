'use strict';

var _ = require('lodash');


module.exports = function($scope, $location, fontFamilyCollection, fontParameters,
                          FontCardTypes, FontComparisonTypes, comparisonMatrix) {
    var init = function() {
        if (comparisonMatrix.familyCount() < 2) {
            // TODO: display an alert before redirecting.
            $location.path('/choose');
        }

        $scope.cardType = localStorage.getItem('ddt:lastUsedCardType') || FontCardTypes.WORD;
        $scope.comparisonType = localStorage.getItem('ddt:lastUsedComparisonType') || FontComparisonTypes.SIDE_BY_SIDE;
        $scope.fontParameters = fontParameters.current;
        $scope.FontComparisonTypes = FontComparisonTypes;
        $scope.comparisonMatrix = comparisonMatrix;
    };

    $scope.isCurrentComparison = function(comparison) {
        return comparison === $scope.comparisonType;
    };

    $scope.isCardType = function(cardType) {
        return cardType === $scope.cardType;
    };

    $scope.replaceUnderscores = function(text) {
        return text.replace(/_/g, ' ');
    };

    init();
};
