import classNames from 'classnames';
import React, { useRef, useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../core/noorThemeProvider/NoorThemeProvider';
import { objectsToString } from '../../utils/objectsToString';
import { type VideoProps } from './Video.d';
import { IconButton } from '../iconButton/IconButton';
import { TbMaximize, TbPlayerPause, TbPlayerPlay, TbVolume, TbVolume3 } from 'react-icons/tb';
import { Button } from '../button/Button';
import { Progress } from '../progress/Progress'; // Progress komponentini import qilamiz

export const Video = React.forwardRef<HTMLVideoElement, VideoProps>(({ src, className, playIcon, pauseIcon, muteIcon, unmuteIcon, volumeDownIcon, volumeUpIcon, fullScreenIcon, fullWidth, ...rest }, ref) => {
  const { theme } = useTheme();
  const { video } = theme.components;
  const { defaultProps, styles } = video;
  const { base } = styles;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null); // Progress komponenti uchun ref
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  fullWidth = fullWidth ?? defaultProps.fullWidth;
  className = twMerge(defaultProps.className || '', className);

  const videoBase = objectsToString(base.initial);
  const videoClasses = twMerge(classNames(videoBase, {
    [objectsToString(base.fullWidth)]: fullWidth,
  }), className);

  // Video metadatasini yuklash va progressni yangilash
  useEffect(() => {
    const video = videoRef.current;
    console.log(video?.volume)

    const handleLoadedMetadata = () => {
      setDuration(video?.duration || 0);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video?.currentTime || 0);
    };

    video?.addEventListener('loadedmetadata', handleLoadedMetadata);
    video?.addEventListener('timeupdate', handleTimeUpdate);

    // Cleanup: event listenerlarni o'chiramiz
    return () => {
      video?.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video?.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  // Play va Pause
  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      videoRef.current?.pause();
    } else {
      setIsPlaying(true);
      videoRef.current?.play();
    }
  };

  // Fullscreen
  const handleFullscreen = () => {
    videoRef.current?.requestFullscreen();
  };

  // Mute va Unmute
  const handleMuteUnmute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  // play clicked progress
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

  // progress bar time formatter
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="relative">
      <video
        onDoubleClick={handleFullscreen}
        onClick={handlePlayPause}
        muted={isMuted}
        ref={videoRef || ref}
        className={videoClasses}
        src={src}
        {...rest}
      />
      <div className="absolute p-4 bottom-0 flex justify-between w-full gap-2 items-center">
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
          <Progress
            ref={progressRef}
            bar={progressPercentage}
            variant="filled"
            color="primary"
            size="sm"
            className="flex-1 cursor-pointer"
            onClick={handleProgressClick}
          />
          <Button variant="filled" color="secondary" size="sm" className='min-w-[100px]'>
            {formatTime(currentTime)} / {formatTime(duration)}
          </Button>
        </div>
        <IconButton
          size="sm"
          icon={fullScreenIcon || <TbMaximize />}
          onClick={handleFullscreen}
        />
      </div>
    </div>
  );
});