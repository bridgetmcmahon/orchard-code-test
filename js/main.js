$(document).ready(function() {
  console.log('document is ready');
  $('.read-more').on('click', () => {
    console.log('a link has been clicked', $(this));
  });

});
