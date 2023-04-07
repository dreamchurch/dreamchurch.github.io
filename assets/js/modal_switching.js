//  This code resolves an issue with bootstrap modal switching
// https://stackoverflow.com/a/60301670
$('.portfolio-modal').on('shown.bs.modal', function () {
  $('body').addClass('modal-open');
});

// $('.modal').on('hide.bs.modal', function () {
//   const $modal = $(this);
//   // return early if there were no embedded YouTube videos
//   // if ($modal.find('iframe').length === 0) return;
//   const html = $modal.html();
//   $modal.html(html);
// });

// $('.modal').on('hide.bs.modal', function (e) {
//   $('body').addClass('modal-open');
//   $('.embed-container').children('iframe').attr('src', '');
// });
