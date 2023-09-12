import './App.css';
import VideoInHome from './components/VideoInHome'
import SideMenu from './components/SideMenu'
import TopMenu from './components/TopMenu'
import ShortVideoInHome from './components/ShortVideoInHome'

function App() {
  const videoList = [
    {
      id: 1,
      pic: 'https://picsum.photos/seed/1/329/185',
      title: 'blue image',
      author: {
        name: 'Tom',
        avatar: 'https://picsum.photos/seed/1/36'
      },
      views: '110k',
      uploadTime: '10 months ago'
    },
    {
      id: 2,
      pic: 'https://picsum.photos/seed/2/329/185',
      title: 'red image',
      author: {
        name: 'Tony',
        avatar: 'https://picsum.photos/seed/2/36'
      },
      views: '15k',
      uploadTime: '4 days ago'
    },
    {
      id: 3,
      pic: 'https://picsum.photos/seed/3/329/185',
      title: 'gray image',
      author: {
        name: 'Mary',
        avatar: 'https://picsum.photos/seed/3/36'
      },
      views: '5876',
      uploadTime: '34 minutes ago'
    },
    {
      id: 4,
      pic: 'https://picsum.photos/seed/4/329/185',
      title: 'green image',
      author: {
        name: 'Jane',
        avatar: 'https://picsum.photos/seed/4/36'
      },
      views: '20',
      uploadTime: '2 yeats ago'
    },
  ]
  
  const shortVideoList = [
    {
      id: 1,
      pic: 'https://picsum.photos/seed/5/214/379',
      title: 'gray image',
      views: '110k'
    },
    {
      id: 2,
      pic: 'https://picsum.photos/seed/6/214/379',
      title: 'title 1',
      views: '15k'
    },
    {
      id: 3,
      pic: 'https://picsum.photos/seed/7/214/379',
      title: 'title 2',
      views: '5876'
    },
    {
      id: 4,
      pic: 'https://picsum.photos/seed/8/214/379',
      title: 'title 3',
      views: '20'
    },
  ]


  return (
    <main className='container'>
      <TopMenu />
      <SideMenu />
      <div className='main'>
        <div className='mainItem'>
          {
            videoList.length > 0 && videoList.map(
              (videoList) => (<VideoInHome videoList={videoList} key={videoList.id}/>)
            )
          }
          {
            videoList.length > 0 && videoList.map(
              (videoList) => (<VideoInHome videoList={videoList} key={videoList.id}/>)
            )
          }
        </div>

        <div className='mainItemShortTitle'>
          <svg t="1692868146094" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4939" width="24" height="24"><path d="M382.464 278.528v322.56l279.552-161.28zM204.8 860.16h614.4v76.8H204.8z" fill="#d81e06" p-id="4940"></path><path d="M30.72 87.04v701.44h962.56V87.04H30.72z m885.76 624.64H107.52V163.84h808.96v547.84z" fill="#d81e06" p-id="4941"></path></svg>
          <p>Shorts</p>
        </div>
        
        <div className='mainItemShort'>
          {
            shortVideoList.length >0 && shortVideoList.map(
              (shortVideoList) => (<ShortVideoInHome shortVideoList={shortVideoList} key={shortVideoList.id}/>)
            )
          }
          {
            shortVideoList.length >0 && shortVideoList.map(
              (shortVideoList) => (<ShortVideoInHome shortVideoList={shortVideoList} key={shortVideoList.id}/>)
            )
          }
          {
            shortVideoList.length >0 && shortVideoList.map(
              (shortVideoList) => (<ShortVideoInHome shortVideoList={shortVideoList} key={shortVideoList.id}/>)
            )
          }
        </div>
        
        <div className='viewMore'>
            <svg t="1692868782742" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5995" width="24" height="24"><path d="M830.24 340.688l11.328 11.312a16 16 0 0 1 0 22.624L530.448 685.76a16 16 0 0 1-22.64 0L196.688 374.624a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l288.496 288.496 288.512-288.496a16 16 0 0 1 22.624 0z" fill="#000000" p-id="5996"></path></svg>
        </div>

        <div className='mainItem'>
          {
            videoList.length > 0 && videoList.map(
              (videoList) => (<VideoInHome videoList={videoList} key={videoList.id}/>)
            )
          }
          {
            videoList.length > 0 && videoList.map(
              (videoList) => (<VideoInHome videoList={videoList} key={videoList.id}/>)
            )
          }
          {
            videoList.length > 0 && videoList.map(
              (videoList) => (<VideoInHome videoList={videoList} key={videoList.id}/>)
            )
          }
          {
            videoList.length > 0 && videoList.map(
              (videoList) => (<VideoInHome videoList={videoList} key={videoList.id}/>)
            )
          }
        </div>

      </div>
    </main>
  );
}

export default App;
