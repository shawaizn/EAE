import { useState } from 'react';

// Lightweight YouTube player: shows the thumbnail with a play button and only
// loads YouTube's player when clicked, so the page stays fast.
export function YouTubeLite({ id, title }) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      style={{
        aspectRatio: '16 / 9',
        background: 'linear-gradient(135deg, #2a221b 0%, #1a1612 100%)',
        boxShadow: '0 24px 64px rgba(26,22,18,0.18)',
      }}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 w-full h-full"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={thumb}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => {
              // Not every video has a max-resolution thumbnail; fall back, then give up.
              if (thumb.includes('maxresdefault')) setThumb(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`);
              else setThumb('');
            }}
            style={{ display: thumb ? 'block' : 'none' }}
          />
          <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full text-white transition-transform group-hover:scale-110"
            style={{ backgroundColor: '#c17f3a', boxShadow: '0 12px 32px rgba(0,0,0,0.3)' }}
          >
            <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10 ml-1" fill="currentColor" aria-hidden="true">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
