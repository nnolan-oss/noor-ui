import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../core/noorThemeProvider/NoorThemeProvider';
import { objectsToString } from '../../utils/objectsToString';
import { type VideoProps } from './Video.d';
import { IconButton } from '../iconButton/IconButton';
import { TbMaximize, TbPlayerPause, TbPlayerPlay, TbVolume, TbVolume3 } from 'react-icons/tb';
import { Button } from '../button/Button';

export const Video = React.forwardRef<HTMLVideoElement, VideoProps>(({ src, className, playIcon, pauseIcon, muteIcon, unmuteIcon, volumeDownIcon, volumeUpIcon, fullScreenIcon, fullWidth, ...rest }, ref) => {
  const { theme } = useTheme();
  const { video } = theme.components;
  const { defaultProps, styles } = video;
  const { base } = styles;

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isMuted, setIsMuted] = useState<boolean>(false)

  fullWidth = fullWidth ?? defaultProps.fullWidth;
  className = twMerge(defaultProps.className || "", className);

  const videoBase = objectsToString(base.initial)
  const videoClasses = twMerge(classNames(videoBase, {
    [objectsToString(base.fullWidth)]: fullWidth,
  }), className)

  // play and pause
  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false)
      videoRef.current?.pause()
    } else {
      setIsPlaying(true);
      videoRef.current?.play()
    }
  }

  // fullscreen
  const handleFullscreen = () => {
    videoRef.current?.requestFullscreen()
  }

  // mute, unmute
  const handleMuteUnmute = () => {
    setIsMuted(!isMuted)
  }


  return (
    <div className="relative">
      <video muted={isMuted} ref={videoRef || ref} className={videoClasses} src={src} {...rest} />
      <div className='absolute p-4 bottom-0 flex justify-between w-full gap-2'>
        <div className='flex gap-2 items-center'>
          <IconButton size='sm' icon={isPlaying ? <TbPlayerPause /> : <TbPlayerPlay />} onClick={handlePlayPause} />
          <IconButton size='sm' icon={isMuted ? <TbVolume /> : <TbVolume3 />} onClick={handleMuteUnmute} />
          <Button variant="filled" color="secondary" size='sm'>12:00</Button>
        </div>

        <IconButton size='sm' icon={<TbMaximize />} onClick={handleFullscreen} />
      </div>
    </div>
  )
})
