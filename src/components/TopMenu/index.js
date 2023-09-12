import './styles.css'

function TopMenu(props) {

  return (
    <div className='TopMenu'>
      <div className='TopMenuBar'>

        <div className='TopMenuLeft'>
          
        </div>
  
        <div className='TopMenuMiddle'>
        <form className='SearchBox'>
          <input type='text' placeholder='Search' name='search' />
        </form>
        <div className='SearchBtn'>
          <svg t="1692621319779" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3404" width="24" height="24"><path d="M416 192C537.6 192 640 294.4 640 416S537.6 640 416 640 192 537.6 192 416 294.4 192 416 192M416 128C256 128 128 256 128 416S256 704 416 704 704 576 704 416 576 128 416 128L416 128z" fill="#272636" p-id="3405"></path><path d="M832 864c-6.4 0-19.2 0-25.6-6.4l-192-192c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l192 192c12.8 12.8 12.8 32 0 44.8C851.2 864 838.4 864 832 864z" fill="#272636" p-id="3406"></path></svg>
        </div>
        <div className='VoiceSearchBtn'>
          <svg t="1692630503949" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5347" width="24" height="24"><path d="M512 597.333333c70.613333 0 127.573333-57.386667 127.573333-128l0.426667-256c0-70.826667-57.173333-128-128-128-70.613333 0-128 57.173333-128 128l0 256c0 70.613333 57.386667 128 128 128zM738.133333 469.333333c0 128-108.16 217.6-226.133333 217.6-117.76 0-226.133333-89.6-226.133333-217.6l-72.533333 0c0 145.706667 116.053333 266.026667 256 286.72l0 139.946667 85.333333 0 0-139.946667c139.946667-20.693333 256-141.013333 256-286.72l-72.533333 0z" fill="#444444" p-id="5348"></path></svg>
        </div>
        </div>
  
        <div className='TopMenuRight'>
        <div className='TopMenuBtn'>
          <svg t="1692631034705" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15055" width="24" height="24"><path d="M682.666667 170.666667a42.666667 42.666667 0 0 1 42.666666 42.666666v179.2l222.421334-155.733333a21.333333 21.333333 0 0 1 33.578666 17.493333v515.413334a21.333333 21.333333 0 0 1-33.578666 17.493333L725.333333 631.466667V810.666667a42.666667 42.666667 0 0 1-42.666666 42.666666H85.333333a42.666667 42.666667 0 0 1-42.666666-42.666666V213.333333a42.666667 42.666667 0 0 1 42.666666-42.666666h597.333334z m-42.666667 85.333333H128v512h512V256zM341.333333 341.333333h85.333334v128h128v85.333334H426.624L426.666667 682.666667H341.333333l-0.042666-128H213.333333v-85.333334h128V341.333333z m554.666667 35.882667l-170.666667 119.466667v30.634666l170.666667 119.466667V377.173333z" p-id="15056"></path></svg>
        </div>
        <div className='TopMenuBtn'>
          <svg t="1692631093905" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16111" width="24" height="24"><path d="M803.904 779.904l-63.04-82.752c-16.832-18.56-26.24-43.52-26.24-69.376V434.56c0-61.952-20.736-118.4-57.728-158.912a189.248 189.248 0 0 0-62.976-45.568 212.096 212.096 0 0 0-164.928 0c-23.68 10.496-44.8 25.728-62.848 45.44-37.12 40.704-57.792 97.088-57.792 159.104v193.28c0 25.92-9.536 50.688-26.752 70.016l-62.848 82.624 585.152-0.576zM128 759.04l86.848-114.304 2.816-3.328a19.584 19.584 0 0 0 5.44-13.568V434.56c0-82.688 28.288-159.744 80.064-216.576a271.872 271.872 0 0 1 91.392-65.92c72.192-32 161.792-32 233.984 0 34.56 15.36 65.28 37.568 91.264 65.92 51.84 56.832 80 133.824 80 216.64v193.28c0 4.992 1.856 9.6 4.288 12.16l3.264 3.712 87.296 114.56 1.344 106.88-767.68 0.768L128 759.04z m213.184 179.712h341.12V1024H341.12v-85.312zM426.496 0h170.496v85.312H426.496V0z" fill="#262626" p-id="16112"></path></svg>
        </div>
        <button className='TopMenuAvatarBtn'>
          <img className='TopMenuAvatar' src='https://picsum.photos/32' alt=''/>
        </button>
        </div>
      </div>

      <div className='TopMenuCategory'>
        <div className='CategoryBtn CategoryBtnActive'><p>All</p></div>
        <div className='CategoryBtn'><p>Live</p></div>
        <div className='CategoryBtn'><p>Music</p></div>
        <div className='CategoryBtn'><p>Gaming</p></div>
        <div className='CategoryBtn'><p>Playlists</p></div>
        <div className='CategoryBtn'><p>Love songs</p></div>
        <div className='CategoryBtn'><p>Game shows</p></div>
        <div className='CategoryBtn'><p>Chill-out music</p></div>
        <div className='CategoryBtn'><p>Meditation music</p></div>
        <div className='CategoryBtn'><p>Variety shows</p></div>
        <div className='CategoryBtn'><p>Comedy</p></div>
        <div className='CategoryBtn'><p>Recently uploaded</p></div>
      </div>
    </div>
  );
}

export default TopMenu