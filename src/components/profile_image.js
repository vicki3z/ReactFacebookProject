import React from 'react';

const ProfileImage = () => {
  const imageUrl = 'http://placehold.it/200x200';

  return (
    <div>
      <img className="img-thumbnail" src={imageUrl} />
    </div>
  )
}

export default ProfileImage;
