import type {
    TVideoClassname,
    TVideoFullscreenIcon,
    TVideoFullWidth,
    TVideoMuteIcon,
    TVideoPauseIcon,
    TVideoPlayIcon,
    TVideoUnmuteIcon,
    TVideoVolDownIcon,
    TVideoVolUpIcon,
  } from '../../types/components/video';
  
  type CrossOrigin = 'anonymous' | 'use-credentials' | '' | undefined;
  
  export interface VideoProps extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, 'crossOrigin'> {
    className?: TVideoClassname; 
    playIcon?: TVideoPlayIcon;
    pauseIcon?: TVideoPauseIcon;
    muteIcon?: TVideoMuteIcon;
    unmuteIcon?: TVideoUnmuteIcon;
    volumeUpIcon?: TVideoVolUpIcon;
    volumeDownIcon?: TVideoVolDownIcon;
    fullScreenIcon?: TVideoFullscreenIcon;
    fullWidth?: TVideoFullWidth;
    crossOrigin?: CrossOrigin;
  }