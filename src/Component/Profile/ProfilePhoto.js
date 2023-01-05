import React from 'react';
import GMC  from './GMC.jpeg'



function ProfilePhoto() {
    return (
        <div>
            <img className='image' src={GMC} alt="gmc"/>
        </div>
    );
}

export default ProfilePhoto;