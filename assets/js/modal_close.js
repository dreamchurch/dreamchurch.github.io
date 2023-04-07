//
// any modals with embedded <iframe> we can assume need reset
// <https://stackoverflow.com/a/52315492>
//
// $('body').on('hide.bs.modal', '.modal', function () {
//   const $modal = $(this);
//   // return early if there were no embedded YouTube videos
//   if ($modal.find('iframe').length === 0) return;
//   const html = $modal.html();
//   $modal.html(html);
// });

// https://discourse.webflow.com/t/how-to-stop-youtube-video-after-closing-modal/52020
// $('.close-modal').click(function (e) {
//   e.preventDefault();
//   $('.embed-container').children('iframe').attr('src', '');
// });

// https://stackoverflow.com/a/22613424/19059775
$('.portfolio-modal').on('hidden.bs.modal', function () {
  callPlayer('yt-player', 'stopVideo');
});
