//  This code resolves an issue with bootstrap modal switching
// https://stackoverflow.com/a/60301670
$('.modal')
  .on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
  })
  // embedded modal video closing
  // https://stackoverflow.com/a/52315492/19059775
  .on('hide.bs.modal', function () {
    const memory = $(this).html();
    $(this).html(memory);
  });
