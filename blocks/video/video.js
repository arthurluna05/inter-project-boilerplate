export default function decorate(block) {
  const content = block.querySelector('div > div');

const videoUrl =
  content.querySelector('p a')?.href ||
  content.querySelector('p').textContent.trim();
  content.querySelector('p').remove();

  const video = document.createElement('video');

  video.className = 'video-background';

  video.setAttribute('autoplay', '');
  video.setAttribute('muted', '');
  video.setAttribute('loop', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('preload', 'auto');

  video.muted = true;

  video.innerHTML = `
    <source src="${videoUrl}" type="video/webm">
  `;

  block.prepend(video);

  content.classList.add('video-content');
}