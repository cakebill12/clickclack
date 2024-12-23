const videoContainer = document.getElementById("video-container");
const upArrow = document.getElementById("up-arrow");
const downArrow = document.getElementById("down-arrow");

// Load videos from videos.json
fetch("videos.json")
  .then((response) => response.json())
  .then((videos) => {
    videos.forEach((video) => {
      const videoBox = document.createElement("div");
      videoBox.classList.add("video-box");

      const videoElement = document.createElement("video");
      videoElement.src = video.url;
      videoElement.autoplay = true;
      videoElement.loop = true;
      videoElement.muted = true;
      videoElement.controls = false;

      const title = document.createElement("div");
      title.classList.add("video-title");
      title.textContent = video.title;

      const uploader = document.createElement("div");
      uploader.classList.add("video-uploader");
      uploader.textContent = `Uploaded by ${video.uploader}`;

      videoBox.appendChild(videoElement);
      videoBox.appendChild(title);
      videoBox.appendChild(uploader);
      videoContainer.appendChild(videoBox);
    });
  });

// Scroll logic
let currentScroll = 0;

function scrollVideos(direction) {
  const videoHeight = videoContainer.firstChild.offsetHeight;
  currentScroll += direction * videoHeight;

  videoContainer.scrollTo({
    top: currentScroll,
    behavior: "smooth",
  });
}

upArrow.addEventListener("click", () => scrollVideos(-1));
downArrow.addEventListener("click", () => scrollVideos(1));
