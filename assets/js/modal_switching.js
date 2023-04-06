//  This code resolves an issue with bootstrap modal switching
// https://stackoverflow.com/a/60301670
//
$('.modal').on('shown.bs.modal', function (e) {
  $('body').addClass('modal-open');
});
