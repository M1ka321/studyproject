import React from 'react';

const Profile = () => {
  const user =  {
    name: 'Dog',
    img: 'https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg'
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <img className='img' src={user.img}/>
    </div>
  );
};

export default Profile;