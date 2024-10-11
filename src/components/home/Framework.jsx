import React from 'react';
import { FaMusic, FaHeart, FaCommentDots, FaRegBookmark, FaShare } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import './Framework.css';

const Framework = ({ data, loading, error }) => {
  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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

  // Function to handle download of media
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

  // Check if data.msg equals 'success'
  if (data.msg === 'success') {
    // Accessing the video object from the data
    const video = data.data;
    console.log(video);

    return (
      <div className="h-auto grid place-items-center">
        <div className="p-1 relative h-96 w-52 md:h-[500px] md:w-[23%] my-10 overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          {/* Single video display */}
          <div className="h-full relative">
            <video
              className="absolute top-0 left-0 object-fill w-full h-full rounded-3xl"
              onClick={onVideoPress}
              src={video.play}
              loop
            ></video>
            <div className="bottom-controls">
              {/* Left part */}
              <div className="footer-left">
                <div className="flex flex-col mb-10">
                  <div className="relative text-white flex flex-grow-1 pointer-events-none ml-[5px]">
                    <div className="w-[100%]">
                      <h3>@{video.author.nickname}</h3>
                      <p className="text-sm font-light">{truncateText(video.title)}</p>
                      <div className="flex items-center w-[100%] h-fit">
                        <FaMusic className="w-8" />
                        <marquee className="flex items-center w-[100%]" direction="left" scrollamount="2">
                          <span className="text-sm text-[#fff]">{video.music_info.title}</span>
                        </marquee>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Left part end */}

              {/* Right part */}
              <div className="absolute right-0 footer-right z-50">
                <div className="w-full mr-5 mb-9 text-white">
                  {/* Icons start */}
                  <div className="flex flex-col justify-end items-center text-center mt-[5px]">
                    <img
                      src={video.author.avatar}
                      className="mb-[25px] rounded-full border-2 border-solid border-white flex justify-center items-center w-10 h-10"
                      alt='Profile'
                    />
                    <IoAdd className='rounded-full bg-white flex justify-center items-center mt-[-32px] mb-[15px] w-[15px] h-[15px] text-[#FF0000]' />
                  </div>
                  <div className="flex flex-col justify-end items-center text-center mt-[5px]">
                    <FaHeart className="w-7 h-7" />
                    <p className="font-light text-sm mt-[2px]">{video.digg_count}</p>
                  </div>
                  <div className="flex flex-col justify-end items-center text-center mt-[5px]">
                    <FaCommentDots className="w-7 h-7 text-white" />
                    <p className="font-light text-sm mt-[2px]">{video.comment_count}</p>
                  </div>
                  <div className="flex flex-col justify-end items-center text-center mt-[5px]">
                    <FaRegBookmark className="w-7 h-7" />
                    <p className="font-light text-sm mt-[2px]">{video.collect_count}</p>
                  </div>
                  <div className="flex flex-col justify-end items-center text-center mt-[5px]">
                    <FaShare className="w-7 h-7" />
                    <p className="font-light text-sm mt-[2px]">{video.share_count}</p>
                  </div>
                  <div className="flex flex-col justify-end items-center text-center mt-[5px]">
                    <img
                      className="animate-spinTheRecord w-10 h-10 p-[5px] rounded-full bg-[#b3afaf]"
                      src="https://static.thenounproject.com/png/934821-200.png"
                      alt='Record Icon'
                    />
                  </div>
                  {/* Icons end */}
                </div>
              </div>
              {/* End right part */}
            </div>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex space-x-4 mb-4">
          {/* <button
            onClick={() => handleDownload(video.music_info.play, `${video.author.nickname}.mp3`)}
            className="bg-purple-500 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded"
          >
            Download MP3
          </button> */}
          <button
            onClick={() => handleDownload(video.play, `${video.author.nickname}.mp4`)}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Download MP4
          </button>
        </div>

      </div>
    );
  } else {
    return <div className="h-auto grid place-items-center">
        <div className="p-1 flex justify-center items-center h-auto w-52 md:h-[500px] md:w-[23%] my-10 overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <p className="text-white font-bold text-xl">{data.msg}</p>
        </div>
        </div>;
  }
};

export default Framework;
