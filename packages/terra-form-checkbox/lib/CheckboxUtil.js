'use strict';

// TODO: move this to utils package. Issue #1010.
var CheckboxUtil = function () {
  var isConsideredMobileDevice = function isConsideredMobileDevice() {
    return window.matchMedia('(max-width: 1024px)').matches && ('ontouchstart' in window
    // eslint-disable-next-line no-undef
    || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
  };

  return {
    isConsideredMobileDevice: isConsideredMobileDevice
  };
}();

module.exports = CheckboxUtil;