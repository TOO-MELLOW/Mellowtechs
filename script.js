(function(){
  // set years
  var y = new Date().getFullYear();
  document.getElementById('year') && (document.getElementById('year').textContent = y);
  document.getElementById('year2') && (document.getElementById('year2').textContent = y);
  document.getElementById('year3') && (document.getElementById('year3').textContent = y);

  // nav toggle helper
  function navToggle(toggleId, listId){
    var t = document.getElementById(toggleId);
    var list = document.getElementById(listId);
    if(!t || !list) return;
    t.addEventListener('click', function(){
      var expanded = t.getAttribute('aria-expanded') === 'true';
      t.setAttribute('aria-expanded', String(!expanded));
      if(!expanded) list.style.display = 'flex'; else list.style.display = '';
    });
  }
  navToggle('navToggle','navList');
  navToggle('navToggle2','navList2');
  navToggle('navToggle3','navList');

})();