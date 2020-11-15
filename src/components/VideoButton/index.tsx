import React from "react";
import { IVideoButton } from "../../utils/types";

const VideoButton: React.FC<IVideoButton> = ({ id, title}) => {
  return (
    <button className="btn btn-primary js-modal-btn" data-video-id={id}>
      <i className="fas fa-play-circle mr-2"></i>
      {title}
    </button>
  );
};
export default VideoButton;
