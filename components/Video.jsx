'use client';

import Image from 'next/image';
import play from '@/assets/play.svg';
import cover from '@/assets/video-cover.jpg';
import { useRef, useState } from 'react';

export default function VideoBlock({ src }) {
  const [videoShow, setVideoShow] = useState(true);
  const video = useRef();

  function handleVideoShow() {
    video.current.play();
    setVideoShow((prevState) => !prevState);
    video.current.play();
  }

  return (
    <div className="video-wrap">
      {videoShow && (
        <div className="video-cover flex justify-center items-center">
          <div className="video-cover-image">
            <Image src={cover} alt=" " />
          </div>
          <button
            className="video-play flex justify-center items-center"
            onClick={handleVideoShow}
          >
            Watch video
            <Image src={play} alt=" " />
          </button>
        </div>
      )}

      <video controls ref={video}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
