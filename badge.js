function showBadge() {
  const badge = document.getElementById("badgePopup");

  badge.classList.remove("badge-animate");

  // restarts the animation every click
  void badge.offsetWidth;

  badge.classList.add("badge-animate");
}
