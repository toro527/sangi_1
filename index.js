/*common */
var imageUrl = 'https://susu-worcation.com/wp-content/themes/susu/images';
var siteUrl = 'https://susu-worcation.com/';


Vue.use(Buefy, {
  defaultIconPack: 'fas',
})
/*スクロール高さ*/
var hightMixin = {
  data: function () {
    return {
      visible: false
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
      if (!this.visible) {
        this.visible = window.scrollY > 100;
      } else if (window.scrollY < 90) {
        this.visible = !this.visible;
      }
    },
  }
}
/*header*/
new Vue({
  el:'#header',

  data () {
    return {
      ActiveBtn: false,
      isActive:false,
      inWidth : window.innerWidth,
      pageUrl : window.location.pathname,

      /*mainvisual_img:'',
      mainvisual_img_sp:'',
      mainvisual_height:'',      */
      mainMenu:[
        { name:'コンセプト',url:'#concept'},
        { name:'施設案内',url:'#susu'},
        { name:'利用プラン',url:'#plan'},
        { name: 'アクセス',url: '#access'},
        { name: '周辺情報',url: '#area-map'},
        { name:'お知らせ',url:'#news'},
        /*
        { name:'メンバー紹介',url:'#plan'},
        { name: '会社概要',url: '#company'},
        { name: '周辺情報',url: '#around'},
        /*
        { name: 'プライバシーポリシー',url: '/privacy-policy/'  },
        { name:'会社概要',url:'/about/'},
        { name: 'お問い合わせ',url: siteUrl + '/contact/'},*/

      ],
    }
  },
  methods: {

    clickMenuSp() {
      this.ActiveBtn = !this.ActiveBtn
    },
    clickCloseMenu() {
      this.ActiveBtn = false
    },
    resize: function() {
        //画面のサイズが変更になる時の処理
        this.fullheight = window.innerHeight*0.5+'px';
        this.spheight = window.innerHeight*0.3 +'px';
      },
  },
})

/*footer*/
new Vue ({
  el:'#footer',
  data: () => ({
    inWidth : window.innerWidth,
    footerMenu:[
      { name:'コンセプト',url:'#concept'},
      { name:'施設案内',url:'#susu'},
      { name:'利用プラン',url:'#plan'},
      { name: 'アクセス',url: '#access'},
      { name: '周辺情報',url: '#area-map'},
      { name:'お知らせ',url:'#news'},
      { name:'会社概要',url:'https://ayami-souzou-kuukan.com/about-ayami-kentikukoubou/'},
        /*
        { name: 'プライバシーポリシー',url: '/privacy-policy/'  },
        { name:'会社概要',url:'/about/'},
        { name: 'お問い合わせ',url: siteUrl + '/contact/'},*/

      ],
  })
})

/*top */
var imageUrl = 'https://susu-worcation.com/wp-content/themes/susu/images';
var siteUrl = 'https://susu-worcation.com/';

//concept
new Vue ({
	el: '#concept',
  data (){
		return {
			inHeight:window.innerHeight,
			inWidth : window.innerWidth,
      pageUrl : window.location.pathname,
			contents:[
				imageUrl + '/top/concept_img01.jpg',
				imageUrl + '/top/concept_img02.jpg',
				imageUrl + '/top/concept_img03.jpg',
				imageUrl + '/top/concept_img04.jpg',
				imageUrl + '/top/concept_img06.jpg',
				imageUrl + '/top/concept_img07.jpg',
				imageUrl + '/top/concept_img08.jpg',
				imageUrl + '/top/concept_img09.jpg',
				imageUrl + '/top/concept_img10.jpg',
				imageUrl + '/top/concept_img11.jpg',
				imageUrl + '/top/concept_img12.jpg',
			]
		}
	}
})
//floor
new Vue ({
	el: '#shisetumap',
  data (){
		return {
			inHeight:window.innerHeight,
			inWidth : window.innerWidth,
			places:[
				'①コワーキングスペース（共同）',
				'②卵の部屋（会議室・個室）',
				'③キッチン（共同）',
				'④テラス席（共同）',
				'⑤トイレ（共同）',
				'⑥寝室（宿泊者のみ）',
				'⑦お風呂（宿泊者のみ）',
				'⑧パーキングスペース 車最大8台',
				'⑨2階バルコニー（共同',
			],
		}
	}
})

//floor
new Vue ({
	el: '#floor',
  data (){
		return {
			inHeight:window.innerHeight,
			inWidth : window.innerWidth,
			places:[
				'①コワーキングスペース（共同）',
				'②卵の部屋（会議室・個室）',
				'③キッチン（共同）',
				'④テラス席（共同）',
				'⑤トイレ（共同）',
				'⑥寝室（宿泊者のみ）',
				'⑦お風呂（宿泊者のみ）',
				'⑧パーキングスペース 車最大8台',
				'⑨2階バルコニー（共同',
			],
			details:[
				{
					til:'外観：自然界をモチーフにした鳥の巣',img:imageUrl+'/top/floor_img02n.jpg',
					text:[
						'<span>居場所ができ囲われている事で、安心し楽しく穏やかな気持ちになる。',
						'<span>直線は自然界には存在しないため、全体のデザインを曲線にすることで、より自然界にいるような気持ちになる。',
						'<span>周りの風景より際立つため、期待感が膨らみ興味を持たれやすい。<br>小さい丸窓や変形アール窓からさらなるワクワクへなる。',
						],
				},
				{
					til:'玄関：開けた瞬間視線が通る解放感',img:imageUrl+'/top/floor_img03n.jpg',
					text:[
						'<span>期待感ワクワク感を感じる事ができる。',
						'<span>室内に入った途端、視界が通り光や風を感じられる。',
						],
				},
			],
			naisou:[
				'鳥のすみか<br>　→目的にあったそのとき気分で居場所を選ぶ。',
				// ',
				'卵の部屋<br>　→曲線で包まれているイメージの中ではで、穏やかで優しい気持ちになる。',
				'キッチン、テラス<br>　→アイランド型キッチンみんなで会話を楽しみながら作業できます。そのまま外に出られBBQも合わせて行うことができます。',
				'バルコニー<br>　→外の天気や自然を感じjながらリラックスし集中できるバルコニーです。',
			],
			modal1:[
				{
					img:imageUrl + '/top/sumika1.jpg',
					text:'<span>コミュニケーション</span><br>→　自分の心地よい「居場所」を無意識に探す仕掛けを施している。<br>→　その日・その時の気分で自由に選択出来る事でポジテイブに感じる。',
					text2:	'<span>パーソナルスペース</span><br>→　人にはそれぞれストレスを感じない他人との距離があり、人によりその距離は異なる。<br>→　居心地のいい距離感で共存できる空間になっている。',
				},
				{
					img:imageUrl + '/top/sumika2.jpg',
					text:'<span>奇跡の杉材</span><br>→　杉材や無垢材からの香りや感触で、リラックス効果が高まります。天井に使用することで効果がさらに発揮する<br>※奇跡の杉材(自然乾燥材)杉の学名「クリプトメリア・ジャポニカ」=隠された日本の宝',
					text2:'<span>クリエイティブ思考</span><br>→　高さのある吹き抜け空間で発想力が生まれる（インスピレーション）',
				},
				{
					img:imageUrl + '/top/sumika3n.jpg',
					text:'<span>自分にとって心地良い距離</span><br>→　巣箱（大・中・小）高さに変化を付ける事で、視線が交わらずちょうどよい距離を保てる。<br>→　天井が高く明るい大空間にいると、人は活動的になる。<br>また、気分転換の時に寝そべったりでき色んな体勢を取れることで発想が生まれます。'
				}
			],
			modal2:[
				{
					img:imageUrl + '/top/main_3_sp.jpg',
					text:'<span>小鳥がお出迎えする通路</span><br>→　卵の部屋へ向かう通路は、小鳥がお出迎えするしてくれて、期待感が膨らみます。',
					text2:	'→　会議室、ワークスペースへ室内から向かう時の通路には、アールデザイン<br>→　間接照明兼明り取りの壁とし閉塞感を無くした。<br>→　突き当りの壁には、夜は照明で植栽をライトアップさせ、昼間は大きな窓で人を引き付け行きたくさせる。',
				},
				{
				img:imageUrl + '/top/floor_img05.jpg',
				text:'<span>白い卵に包まれた部屋</span><br>→　吹き抜けの空間で圧迫感はなく包まれている安心感が満たされる。<br>→　インスピレーションがわきやすい。<br>→　五感と触感が感じられる真っ白な空間。<br>→　お母さんのお腹の中にいるような安心を感じられる。',

				}
			],
			modal3:[
				{
					img:imageUrl + '/top/floor_img06n.jpg',
					text:'<span>ワイワイキッチン</span><br>→　壁に沿ったべンチは、会話が活発になる。会話をしながら、料理をしたり、準備・片付けができる、誰もがそのキッチンに立ち共に作業できるアイランドキッチン。',
					text2:	'→　少人数、大人数、ランチ、ディナーなど他業種の交流の場としても活用、本棚もみんなで共有できるように目線の位置に。',
				},
				{
				img:imageUrl + '/top/floor_img07n.jpg',
				text:'<span>アウトドアリビング</span><br>→　ダイニングキッチンの続き間として、お天気のいいときは、自然と一体化してくつろげるスペースをご用意。<br>→　こ四季折々の植物や虫に触れあうことで、動物の一員であることを感じさせてくれるスペース<br>→　バーベキューやイベントなどお楽しみができる<br>→　夜間は樹木が全てライトアップされ、春は桜、秋は柿、キュウイ、キンカン収穫できる',
				}
			],
			modal4:[
				{
					img:imageUrl + '/top/floor_img08n.jpg',
					text:'2階のベランダ・1階のバルコニー部分、2階のバルコニー部分は、	窓辺にデスクやテーブルを設けています。',
				},
				{
				img:imageUrl + '/top/floor_img09n.jpg',
				text:'<span>見晴バルコニー</span><br>→　是非そこで想像力を掻き立てるような発想の場を生み出して頂きたいと思います。<br>	仕事以外に誰かとつながってリラックスしたり、新しい自分を発見したり、という時に是非使ってください。	',
				}
			],
			sumikaActive:false,
			eggActive:false,
			kicinActive:false,
			balActive:false,

		}
	}
})


//plan
new Vue ({
	el: '#plan',

})
//cta
new Vue({
	el:'#cta',
})
//cta2
new Vue({
	el:'#cta2',
})
//company
new Vue({
	el:'#company',
})

