(function(){
  var str = '%casync';
  var color = 'color: #ffaa00';

  console.log( str + ' : inline', color );

  window.addEventListener('DOMContentLoaded', function(){
    console.log( str + ' : DOMContentLoaded', color );
  });

  $(function () {
    console.log( str + ' : $.ready', color );
  });
})();
