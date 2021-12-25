window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function(tabContent)  {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })
});

let value = 0;
function make_change(coins, n) {
 for (let key in coins) {
  value += coins[key];
 }
 if (value == n) return n;
 else return false;
}

make_change();
console.log(make_change([1, 5, 10 , 25], 36));
