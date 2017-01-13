import React from 'react';

const VideoDetail = ({video}) => {
	if (!video) {
		return <div className="search-start">Start typing to search videos ...</div>;
	}

	const videoId = video.id.videoId;
	const src = `https://www.youtube.com/embed/${videoId}`;

	return (
			<div className="video-detail col-md-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={src}></iframe>
				</div>
				<div className="details">
					<div className="details-title">{video.snippet.title}</div>
					<div className="details-desc">{video.snippet.description}</div>
				</div>
			</div>
		);

};

export default VideoDetail;
