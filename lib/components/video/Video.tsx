import classNames from 'classnames';
import React, { useRef, useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../core/noorThemeProvider/NoorThemeProvider';
import { objectsToString } from '../../utils/objectsToString';
import { type VideoProps } from './Video.d';
import { IconButton } from '../iconButton/IconButton';
import { TbMaximize, TbPlayerPause, TbPlayerPlay, TbVolume, TbVolume3, TbVolume2 } from 'react-icons/tb';
import { Progress } from '../progress/Progress';
import { AnimatePresence, motion } from 'framer-motion';

export const Video = React.forwardRef<HTMLVideoElement, VideoProps>(({ src, className, playIcon, pauseIcon, muteIcon, unmuteIcon, volumeDownIcon, volumeUpIcon, fullScreenIcon, fullWidth, ...rest }, ref) => {
  const { theme } = useTheme();
  const { video } = theme.components;
  const { defaultProps, styles } = video;
  const { base } = styles;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const volumeProgressRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const [isShowControl, setIsShowControl] = useState<boolean>(false)

  fullWidth = fullWidth ?? defaultProps.fullWidth;
  className = twMerge(defaultProps.className || '', className);

  const videoBase = objectsToString(base.initial);
  const videoContainerClasses = objectsToString(base.container)
  const videoClasses = twMerge(classNames(videoBase, {
    [objectsToString(base.fullWidth)]: fullWidth,
  }), className);

  useEffect(() => {
    const video = videoRef.current;

    const handleLoadedMetadata = () => {
      setDuration(video?.duration || 0);
      setVolume(video?.volume || 1);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video?.currentTime || 0);
    };

    video?.addEventListener('loadedmetadata', handleLoadedMetadata);
    video?.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video?.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video?.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      videoRef.current?.pause();
    } else {
      setIsPlaying(true);
      videoRef.current?.play();
    }
  };

  const handleFullscreen = () => {
    videoRef.current?.requestFullscreen();
  };

  const handleMuteUnmute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      if (!isMuted) {
        setVolume(0);
        videoRef.current.volume = 0;
      } else if (videoRef.current.volume === 0) {
        setVolume(0.5);
        videoRef.current.volume = 0.5;
      }
    }
  };

  const handleVolumeUp = () => {
    if (videoRef.current) {
      const newVolume = Math.min(volume + 0.1, 1);
      setVolume(newVolume);
      videoRef.current.volume = newVolume;
      if (isMuted && newVolume > 0) {
        setIsMuted(false);
        videoRef.current.muted = false;
      }
    }
  };

  const handleVolumeDown = () => {
    if (videoRef.current) {
      const newVolume = Math.max(volume - 0.1, 0);
      setVolume(newVolume);
      videoRef.current.volume = newVolume;
      if (newVolume === 0 && !isMuted) {
        setIsMuted(true);
        videoRef.current.muted = true;
      }
    }
  };

  const handleVolumeProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const volumeBar = volumeProgressRef.current;
    if (volumeBar && videoRef.current) {
      const rect = volumeBar.getBoundingClientRect();
      const pos = Math.max(0, Math.min((e.clientX - rect.left) / rect.width, 1)); // Ensure pos is between 0 and 1
      const newVolume = pos;
      setVolume(newVolume);
      videoRef.current.volume = newVolume;
      if (newVolume > 0 && isMuted) {
        setIsMuted(false);
        videoRef.current.muted = false;
      } else if (newVolume === 0 && !isMuted) {
        setIsMuted(true);
        videoRef.current.muted = true;
      }
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressRef.current;
    if (progressBar && videoRef.current) {
      const rect = progressBar.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      const newTime = pos * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleShowControl = (type: "enter" | "leave") => {
    if (type === "enter") {
      setIsShowControl(true)
    } else {
      setTimeout(() => {
        setIsShowControl(false)
      }, 3000)
    }
  }

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;
  const volumePercentage = volume * 100;

  // controll show/hide
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <div className={videoContainerClasses} onMouseEnter={() => handleShowControl("enter")} onMouseLeave={() => handleShowControl("leave")}>
      <video
        onDoubleClick={handleFullscreen}
        onClick={handlePlayPause}
        muted={isMuted}
        ref={videoRef || ref}
        className={videoClasses}
        src={src}
        {...rest}
      />
      <AnimatePresence>
        {
          isShowControl &&
          <motion.div key="content"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ duration: 0.3 }}
            className="absolute bg-gradient-to-t from-black to-transparent p-4 bottom-0 w-full h-16 flex justify-between gap-2 items-center">
            <div className="flex gap-2 items-center w-full">
              <IconButton
                size="sm"
                icon={isPlaying ? pauseIcon || <TbPlayerPause /> : playIcon || <TbPlayerPlay />}
                onClick={handlePlayPause}
              />
              <IconButton
                size="sm"
                icon={isMuted ? unmuteIcon || <TbVolume /> : muteIcon || <TbVolume3 />}
                onClick={handleMuteUnmute}
              />
              <IconButton
                size="sm"
                icon={volumeDownIcon || <TbVolume3 />}
                onClick={handleVolumeDown}
              />
              <IconButton
                size="sm"
                icon={volumeUpIcon || <TbVolume2 />}
                onClick={handleVolumeUp}
              />
              {/* <Progress
            ref={volumeProgressRef}
            bar={volumePercentage}
            variant="filled"
            color="secondary"
            size="sm"
            className="w-20 cursor-pointer"
            onClick={handleVolumeProgressClick}
          /> */}
              <Progress
                ref={progressRef}
                bar={progressPercentage}
                variant="filled"
                color="primary"
                size="sm"
                className="flex-1 cursor-pointer"
                onClick={handleProgressClick}
              />
              <span className='min-w-[100px] text-white text-center'>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            <IconButton
              size="sm"
              icon={fullScreenIcon || <TbMaximize />}
              onClick={handleFullscreen}
            />
          </motion.div>
        }
      </AnimatePresence>
    </div>
  );
});
