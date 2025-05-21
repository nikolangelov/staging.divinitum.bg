import { onCleanup, onMount } from "solid-js";

export const VideoPlayer = (props: { src: string }) => {
  let videoRef: HTMLVideoElement | undefined;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef && !videoRef.src) {
            videoRef.src = props.src;
            videoRef.play().catch(() => {}); // avoid autoplay error if disallowed
          } else if (!entry.isIntersecting && videoRef) {
            videoRef.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef) observer.observe(videoRef);

    onCleanup(() => {
      observer.disconnect();
    });
  });

  return (
    <div class="flex justify-center items-center mt-0 lg:mt-20 max-w-[1400px] mx-auto">
      <video
        ref={(el) => (videoRef = el)}
        class="w-full h-[250px] sm:h-[400px] md:h-[600px] lg:h-[700px] xl:h-[750px] bg-transparent"
        controls
        muted
        autoplay
        playsinline
        preload="none" // critical for page speed
      />
    </div>
  );
};
