import { useEffect, useRef, useState } from 'react';

const PHONE_QUERY = '(max-width: 640px)';

// Advert video hosted on the site. Computers get the full-width landscape
// (16:9) version; phones get the original portrait (9:16) version, sized to
// fit the screen. Shows the poster with a play button; the video file only
// starts downloading when someone presses play.
export function HeroVideo({ landscape, portrait, title }) {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [isPhone, setIsPhone] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(PHONE_QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(PHONE_QUERY);
    const onChange = (e) => { if (!started) setIsPhone(e.matches); };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [started]);

  const v = isPhone ? portrait : landscape;

  const play = () => {
    setStarted(true);
    videoRef.current?.play();
  };

  return (
    <div
      className="relative overflow-hidden rounded-2xl mx-auto"
      style={{
        aspectRatio: isPhone ? '9 / 16' : '16 / 9',
        // Portrait: as tall as the screen allows while leaving room for the title and buttons
        ...(isPhone ? { height: 'clamp(330px, calc(100svh - 4rem - 340px), 720px)' } : { width: '100%' }),
        backgroundColor: '#000',
        boxShadow: '0 24px 64px rgba(26,22,18,0.22)',
      }}
    >
      <video
        key={v.src}
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={v.src}
        poster={v.poster}
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
            className={`absolute left-1/2 ${isPhone ? 'top-[72%]' : 'top-[66%]'} -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full transition-transform group-hover:scale-110`}
            style={{ backgroundColor: '#F5A100', color: '#111111', boxShadow: '0 12px 32px rgba(0,0,0,0.35)' }}
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
