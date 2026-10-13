import { useRef, useState } from 'react';

// Portrait (9:16) video hosted on the site. Shows the poster with a play
// button; the video file only starts downloading when someone presses play.
export function HeroVideo({ src, poster, title }) {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    setStarted(true);
    videoRef.current?.play();
  };

  return (
    <div
      className="relative h-full overflow-hidden rounded-2xl"
      style={{
        aspectRatio: '9 / 16',
        backgroundColor: '#000',
        boxShadow: '0 24px 64px rgba(26,22,18,0.22)',
      }}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        poster={poster}
        preload="none"
        playsInline
        controls={started}
        aria-label={title}
      />
      {!started && (
        <button
          type="button"
          onClick={play}
          className="group absolute inset-0 w-full h-full"
          aria-label={`Play video: ${title}`}
        >
          <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
          <span
            className="absolute left-1/2 top-[72%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full text-white transition-transform group-hover:scale-110"
            style={{ backgroundColor: '#c17f3a', boxShadow: '0 12px 32px rgba(0,0,0,0.35)' }}
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9 ml-1" fill="currentColor" aria-hidden="true">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
