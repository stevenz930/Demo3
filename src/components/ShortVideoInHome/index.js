import './styles.css'

function ShortVideoInHome(props) {

  return (
    <div className='ShortVideoBlock'>
      <img src={props.shortVideoList.pic} alt='' className='Cover'/>
      <div className='ShortVideoBlockInfo'>
        <p className='ShortVideoBlockTitle'>{props.shortVideoList.title}</p>
        <p className='ShortVideoBlockViews'>{props.shortVideoList.views} views</p>
      </div>
    </div>
  );
}

export default ShortVideoInHome