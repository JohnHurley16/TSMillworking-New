import React from 'react';

const ImageItem = (post) => {
    const item = post.post
    return (
        <div>
            <div className="post" key={item.key}>
                <div className="post-img">
                    <img
                        className="img-responsive"
                        src={item.media_url}
                        alt=""
                    />
                </div>
                <div className="post-info">
                    <p>{item.caption}</p>
                </div>
            </div>
        </div>
    );
}

export default ImageItem;
