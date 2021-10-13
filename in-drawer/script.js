
/*===================================
  hamburger Menu
===================================*/
//hmb_menuに#hamburger_menuを代入
let hmb_menu = document.getElementById('hamburger_menu');
//gnavに#gnavを代入
let gnav = document.getElementById('gnav');
//gnavLinksに#gnav aを全て代入
let gnavLinks = document.querySelectorAll('#gnav li');
//htmlScrollにhtmlを代入
let htmlScroll = document.querySelector('html');

//hmb_menuをクリックしたら
hmb_menu.addEventListener('click', () => {
  //hmb_menuのクラスリストに.activeを追加
  hmb_menu.classList.toggle('active');
  //gnavのクラスリストに.openを追加
  gnav.classList.toggle('open');
  //htmlScrollのクラスリストに.scrollPreventを追加
  htmlScroll.classList.toggle('scrollPrevent');
})

//gnavLinksの数だけループ
for (let i = 0; i < gnavLinks.length; i++) {
  //i番目のgnavLinksを変数gnavLinkに代入
  const gnavLink = gnavLinks[i];
  //gnavLinkがクリックされたら
  gnavLink.addEventListener('click', () => {
    //hmb_menuのクラスリストから.activeを削除
    hmb_menu.classList.remove('active');
    //gnabのクラスリストから.openを削除
    gnav.classList.remove('open');
    //もしhtmlScrollのクラスリストに.scrollPreventが含まれていたら
    if(htmlScroll.classList.contains('scrollPrevent')) {
      //htmlScrollのクラスリストから.scrollPreventを削除
      htmlScroll.classList.remove('scrollPrevent')
    }
  })
}



/*===================================
  Scroll Animation
===================================*/


//ターゲットを変数animeTargetsに代入(ここでは3つ)
let animeTargets = document.querySelectorAll('.animate__animated');
// console.log(animeTargets);

window.addEventListener('scroll', () => {
  for (let i = 0; i < animeTargets.length; i++) {
    //ターゲットのTOPの現在の座標（スクロールしていくと0に近づく）
    let animeTarget = animeTargets[i].getBoundingClientRect().top;
    //スクロール中の座標
    let scroll = window.pageYOffset || document.documentElement.scrollTop;
    //windowのTOPからのターゲットまでの実際の距離
    let offset = animeTarget + scroll;
    //現在開いているブラウザのドキュメントウィンドウの高さ
    let windowHeight = window.innerHeight;
    //ターゲットのアニメーションの種類をdata-animationから取得して変数animeに代入
    let anime = animeTargets[i].dataset.animation;
    // console.log(anime);
    //スクロールしてターゲットがウィンドウに現れたら
    if(scroll > offset - windowHeight + 200) {
      animeTargets[i].classList.add(anime, 'visi');
    } else {
      animeTargets[i].classList.remove(anime, 'visi');
    }

  }
})




/*===================================
  FileReader
===================================*/

//#fileをcapImgに代入
let capImg = document.getElementById('file');

//capImgのchangeをイベントでファイルの選択をキャッチ
capImg.addEventListener('change', (e) => {
  //e.targetに格納されている配列形式のfilesオブジェクトの
  //0番目に選択したファイルを変数fileに代入
  let file = e.target.files[0];
  //FileReaderオブジェクトを作成して変数flrdrに代入
  let flrdr = new FileReader();
  //readAsDataURLメソッドに選択したファイルオブジェクトを渡すと
  //resultプロパティにURL形式でデータが入る
  flrdr.readAsDataURL(file);
  //flrdrで選択ファイルの読込が完了したら
  flrdr.addEventListener('load', () => {
    //flrdrに代入されたFileReaderオブジェクトの
    //resultプロパティの値を変数urlに代入
    let url = flrdr.result;
    //Imageオブジェクトを作成して変数imgに代入
    let img = new Image();
    //srcにurlを代入する
    img.src = url;
    //#img_wrapperにimgオブジェクトを追加
    document.getElementById('img_wrapper').appendChild(img);
  })
})


