
/* hamburger menu  */

let hmb_menu = document.getElementById('hamburger_menu');
let gnav = document.getElementById('gnav');
let gnavLinks = document.querySelectorAll('#gnav li')
let htmlScroll = document.querySelector('html');


hmb_menu.addEventListener('click', () => {
  hmb_menu.classList.toggle('active');
  gnav.classList.toggle('open');
  htmlScroll.classList.toggle('scrollPrevent')
})

for (let i = 0; i < gnavLinks.length; i++) {
  let gnavLink = gnavLinks[i];
  gnavLink.addEventListener('click', () => {
    hmb_menu.classList.remove('active');
    gnav.classList.remove('open');
    if(htmlScroll.classList.contains('scrollPrevent')) {
      htmlScroll.classList.remove('scrollPrevent')
    }
  })
}



//スクロールして対象物が、Window内に表示されたらアニメーション用のクラスを付与、それ以外は削除
//input：対象物：.sec p data-animation
//input：スクロールイベント：
//output：クラスの付与 and 削除：.sec p.animate__rubberBand

//対象物を変数animBallsに代入[配列]
let animeTarget = document.querySelectorAll('.animate__animated');


window.addEventListener('scroll', () => {
  for (let i = 0; i < animeTarget.length; i++) {
    //ターゲットのTOPの現在の座標(スクロールしていくと0に近づく)
    let element = animeTarget[i].getBoundingClientRect().top;
    //スクロール中の座標
    let scroll = window.pageYOffset || document.documentElement.scrollTop;
    //WindowのTOPからのターゲットまでの実際の距離（スクロール中変化）
    let offset = element + scroll;
    //現在のブラウザの開いているドキュメントウィンドウの高さ
    let windowHeight = window.innerHeight;
    //ターゲットのアニメーションの種類をdata-animationから取得して変数animeに代入
    let anime = animeTarget[i].dataset.animation;

    //スクロールしてターゲットがウィンドウに現れたら
    if(scroll > offset - windowHeight + 200) {
      //ターゲットのクラスリストに変数animeに入っているクラス名を追加
      animeTarget[i].classList.add(anime, 'visi');
    } else {
      animeTarget[i].classList.remove(anime, 'visi');
    }
  }
})





/*================================
  fileReader
================================*/

//#fileをcapImgに代入
let capImg = document.getElementById('file');
//capImgのchangeイベントでファイルの選択をキャッチ
capImg.addEventListener('change', (e) => {
  //e.targetに格納されている配列形式のfilesオブジェクトの0番目に選択したファイルをfileに代入
  let file = e.target.files[0];
  //FileReaderオブジェクトを作成して変数flrdrに代入
  let flrdr = new FileReader();
  // console.log(flrdr);

  // readAsDataURLメソッドに選択したファイルオブジェクトを渡すと
  // resultプロパティにURL形式でデータが入る
  flrdr.readAsDataURL(file);

  //flrdrの読込がされたら
  flrdr.addEventListener('load', () => {
    //flrdrに代入されているFileReaderオブジェクトのresultプロパティの値を変数urlに代入
    let url = flrdr.result;
    // Imageオブジェクトを作成して変数imgに代入
    let img = new Image();
    // srcにurlを指定する
    img.src = url;
    //サイズ調整CSS側で設定
    // img.height = 400;
    // #img_wrapperにimgオブジェクトを追加
    document.getElementById('img_wrapper').appendChild(img);
  });
});
