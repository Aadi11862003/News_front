import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    fetch('http://localhost:5000/videos')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const iframe = entry.target;
          const player = iframe.contentWindow;
          if (entry.isIntersecting) {
            player.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          } else {
            player.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((iframe) => {
      if (iframe) {
        observer.observe(iframe);
      }
    });

    return () => {
      videoRefs.current.forEach((iframe) => {
        if (iframe) {
          observer.unobserve(iframe);
        }
      });
    };
  }, [videos]);

  const opts = {
    height: '360',
    width: '850',
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
    },
  };

  const onReady = (event, index) => {
    videoRefs.current[index] = event.target.getIframe();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-5 ">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Bharat News</h1>
        <div className="overflow-y-scroll max-h-screen space-y-6 p-4 bg-white rounded-lg shadow-lg">
          {videos.map((video, index) => (
            <div key={video._id} className="w-full p-8   bg-gray-200 rounded-lg shadow-md flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">{video.title}</h2>
              <div className="w-full flex justify-center">
                <YouTube
                  videoId={video.videoId}
                  opts={opts}
                  onReady={(event) => onReady(event, index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;







