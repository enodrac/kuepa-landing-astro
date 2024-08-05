function initOurStories() {
  document.getElementById(`close_video_player`).addEventListener(`click`, () => {
    document.getElementById(`custom_video_player`).classList.add(`custom_hidden`);
  });
  [...document.getElementsByClassName(`clickeable_samuelVideo`)]?.map((item) => {
    item.addEventListener(`click`, () => {
        document.getElementById(`custom_video_player`).classList.remove(`custom_hidden`);
        document.getElementById(`story_player`).src = 'https://d1lkn153fcyomr.cloudfront.net/AtZJPsLvZTrSBAflSB1N.mp4';
    });
  });
  [...document.getElementsByClassName(`clickeable_niniVideo`)]?.map((item) => {
    item.addEventListener(`click`, () => {
        document.getElementById(`custom_video_player`).classList.remove(`custom_hidden`);
        document.getElementById(`story_player`).src = 'https://d1lkn153fcyomr.cloudfront.net/mkNiBjkW9A0XpcDOxbeQ.mp4';
    });
  });
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initOurStories);
}