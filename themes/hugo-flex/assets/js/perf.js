const getLoadTime = () =>
  (PerformanceNavigationTiming.domContentLoadedEventEnd -
    PerformanceNavigationTiming.PerformanceEntry.startTime) /
  1e3;
window.addEventListener("load", () => {
  document.querySelector(
    ".js-loaded-in"
  ).innerText = `- loaded in ${getLoadTime()}s`;
});
