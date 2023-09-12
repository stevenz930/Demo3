import './styles.css'

function VideoInHome(props) {

  return (
    <div className='VideoBlock'>
      <img src={props.videoList.pic} alt='' className='Cover'/>
      <div className='Info'>
        <div className='VideoBlockLeft'>
          <img src={props.videoList.author.avatar} alt='' className='Avatar'/>
        </div>

        <div className='VideoBlockRight'>
          <p className='VideoBlockTitle'>{props.videoList.title}</p>
          <p>{props.videoList.author.name || "Tom"}</p>
          <div className='VideoBlockRightBottom'>
            <p>{props.videoList.views} views</p>
            <p>·</p>
            <p>{props.videoList.uploadTime}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default VideoInHome