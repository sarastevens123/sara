
export default function ProfileImage() {
    const pic = require('./headshot.jpeg');
    return (
        <div>
            <img src={pic} alt="Sara's picture" className='profileimage' />
        </div>
        
    );
}
