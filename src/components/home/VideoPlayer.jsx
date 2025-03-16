import React from 'react';
import { FaMusic, FaHeart, FaCommentDots, FaRegBookmark, FaShare } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import './VideoPlayer.css';

const VideoPlayer = ({ data, loading, error }) => {
  // Handle loading and error states
  if (loading) return (
    <div className="h-[60vh] grid place-items-center px-4">
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 rounded-2xl">
        <div className="bg-errie-black rounded-2xl p-8">
          <div className="animate-pulse text-white text-xl md:text-2xl font-semibold">Loading...</div>
        </div>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="h-[60vh] grid place-items-center px-4">
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 rounded-2xl">
        <div className="bg-errie-black rounded-2xl p-8 max-w-md">
          <div className="text-red-500 text-xl md:text-2xl font-semibold mb-2">Error</div>
          <div className="text-white text-sm md:text-base">{error.message}</div>
        </div>
      </div>
    </div>
  );

  function truncateText(text, length = 30) {
    return text.length > length ? text.slice(0, length) + '...' : text;
  };

  const onVideoPress = (event) => {
    const videoElement = event.currentTarget;
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };


  // Function to handle download of media using Blob
  const handleDownload = async (url, filename) => {
    try {
    const response = await fetch(url);
    const blob = await response.blob();
    const urlObject = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = urlObject;
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    window.URL.revokeObjectURL(urlObject);
  } catch (error) {
    console.error('Download failed', error);
  }
};

  // Check if data exists and msg equals 'success'
  if (!data || Object.keys(data).length === 0) {
    return null;
  }

  if (data.msg === 'success') {
    // Accessing the video object from the data
    const video = data.data;
    console.log(video);

    return (
      <div className="h-auto grid place-items-center px-4">
        <div className="p-1 relative h-[550px] w-full max-w-[340px] sm:h-[600px] sm:w-[340px] md:h-[650px] md:w-[360px] lg:h-[700px] lg:w-[380px] my-6 sm:my-10 overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          {/* Single video display */}
          <div className="h-full relative">
            <video
              className="absolute top-0 left-0 object-cover w-full h-full rounded-3xl"
              onClick={onVideoPress}
              src={video.play}
              loop
            ></video>
            <div className="bottom-controls absolute bottom-0 left-0 right-0 p-4">
              {/* Left part */}
              <div className="footer-left">
                <div className="flex flex-col">
                  <div className="relative text-white pointer-events-none">
                    <div className="w-full">
                      <h3 className="text-lg font-semibold mb-1">@{video.author.nickname}</h3>
                      <p className="text-sm font-light mb-2">{truncateText(video.title, 50)}</p>
                      <div className="flex items-center w-full h-fit bg-black bg-opacity-30 rounded-lg p-2">
                        <FaMusic className="w-4 h-4 min-w-[16px] mr-2" />
                        <marquee className="flex items-center w-full" direction="left" scrollamount="2">
                          <span className="text-sm">{video.music_info.title}</span>
                        </marquee>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right part */}
              <div className="absolute right-4 bottom-4 z-50">
                <div className="flex flex-col items-center gap-y-4 text-white">
                  {/* Profile */}
                  <div className="relative">
                    <img
                      src={video.author.avatar}
                      className="w-12 h-12 rounded-full border-2 border-white"
                      alt='Profile'
                    />
                    <IoAdd className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 rounded-full bg-white w-5 h-5 text-[#FF0000]' />
                  </div>
                  
                  {/* Interaction buttons */}
                  <div className="flex flex-col gap-y-4">
                    <button className="flex flex-col items-center">
                      <FaHeart className="w-8 h-8" />
                      <span className="text-xs mt-1">{video.digg_count}</span>
                    </button>
                    <button className="flex flex-col items-center">
                      <FaCommentDots className="w-8 h-8" />
                      <span className="text-xs mt-1">{video.comment_count}</span>
                    </button>
                    <button className="flex flex-col items-center">
                      <FaRegBookmark className="w-8 h-8" />
                      <span className="text-xs mt-1">{video.collect_count}</span>
                    </button>
                    <button className="flex flex-col items-center">
                      <FaShare className="w-8 h-8" />
                      <span className="text-xs mt-1">{video.share_count}</span>
                    </button>
                    <div className="flex flex-col items-center">
                      <img
                        className="animate-spinTheRecord w-8 h-8 rounded-full bg-[#b3afaf] p-1"
                        src="https://static.thenounproject.com/png/934821-200.png"
                        alt='Record Icon'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4 w-full max-w-[340px] sm:max-w-none px-4 sm:px-0">
          <button
            onClick={() => handleDownload(video.music_info.play_url || video.music_info.play, `${video.author.nickname}_audio.mp3`)}
            className="w-full sm:w-auto bg-purple-500 hover:bg-purple-900 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out text-sm sm:text-base min-w-[160px]"
          >
            Download MP3
          </button>
          <button
            onClick={() => handleDownload(video.play, `${video.author.nickname}_video.mp4`)}
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out text-sm sm:text-base min-w-[160px]"
          >
            Download MP4
          </button>
        </div>
      </div>
    );
  } else {
    return data.msg ? (
      <div className="h-auto grid place-items-center">
        <div className="p-1 flex justify-center items-center h-auto w-52 md:h-[500px] md:w-[23%] my-10 overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <p className="text-white font-bold text-xl">{data.msg}</p>
        </div>
      </div>
    ) : null;
  }
};

export default VideoPlayer;
