// new1
$('.new1').children('p').text('①【僕の甘え】a8-net【登録して欲しい】');
$('.new1').children('.description').text('僕の甘えを書いた記事です。A8-netに登録していない方は是非お願いします！');
$('.images1').attr('src','./a8-net/images/future.jpeg');
$('.more1').attr('href','./a8-net/index.html');
// new1
// new2
$('.new2').children('p').text('②中学生の稼ぎ方【悪用厳禁】');
$('.new2').children('.description').text('中学生のおすすめの稼ぎ方を紹介していきます！是非参考にしてみてください！');
$('.images2').attr('src','./money/images/money.jpeg');
$('.more2').attr('href','./money/index.html');
// new2
// new3
$('.new3').children('p').text('③おすすめ転職するなら【必見】');
$('.new3').children('.description').text('転職サイトをまとめました。ぜひ参考にどうぞ。');
$('.images3').attr('src','./job/images/job.jpg');
$('.more3').attr('href','./job/index.html');
// new3
// ---------------------------------------------------------------------
// おすすめ1
$('.contents').children('.point').text('おすすめ記事6選');
$('.income1').children('.title').text('①ブログって何？');
$('.income1').children('.description').text('そもそもブログって何？という本質をこの記事で解説していきます。');
$('.img1').attr('src','./images/blog.jpeg');
$('.btn1').attr('href','./blog/index.html');
// おすすめ1
// おすすめ2
$('.income2').children('.title').text('②サイト公開の流れ');
$('.income2').children('.description').text('サイトを公開するまでの全体像をこの記事で掴んでもらいます。');
$('.img2').attr('src','./images/publish.jpeg');
$('.btn2').attr('href','./publish/index.html');
// おすすめ2
// おすすめ3
$('.income3').children('.title').text('③サーバー契約');
$('.income3').children('.description').text('サーバーの契約までの手順を細かく解説していきます。');
$('.img3').attr('src','./images/server.jpeg');
$('.btn3').attr('href','./server/index.html');
// おすすめ3
// おすすめ4
$('.income4').children('.title').text('④ドメイン取得');
$('.income4').children('.description').text('サーバーの契約までの手順を細かく解説していきます。');
$('.img4').attr('src','./images/domain.jpeg');
$('.btn4').attr('href','./domain/index.html');
// おすすめ4
// おすすめ5
$('.income5').children('.title').text('⑤ワードプレスのインストール');
$('.income5').children('.description').text('ワードプレスでblogを運営してみましょう！');
$('.img5').attr('src','./images/wp.png');
$('.btn5').attr('href','./wordpress/index.html');
// おすすめ5
// おすすめ6
$('.income6').children('.title').text('サイトマップ');
$('.income6').children('.description').text('このサイトを探索しよう！いろんな記事を用意しています！！');
$('.img6').attr('src','./sitemap/images/sitemap.png');
$('.btn6').attr('href','./sitemap/index.html');
// おすすめ6

// ---------------------------------------------------------------------

// favorite1
$('.favorite1').children('p').text('①僕は高校生で稼いだ【まだ遅くない】');
$('.favorite1').children('.description').text('高校生で稼いだ方法を紹介していきます！');
$('.image').attr('src','./school/images/money.jpeg');
$('.read1').attr('href','./school/index.html');
// favorite1
// favorite2
$('.favorite2').children('p').text('②【最新2022】ブログって何？');
$('.favorite2').children('.description').text('ブログの本質にこの記事では、迫っていきます！');
$('.image2').attr('src','./images/blog.jpeg');
$('.read2').attr('href','./blog/index.html');
// favorite2
// favorite3
$('.favorite3').children('p').text('③ハッカーになるには【真実】');
$('.favorite3').children('.description').text('ハッカーになる近道についてまとめてみました！');
$('.image3').attr('src','./hacker/images/hacker.jpeg');
$('.read3').attr('href','./hacker/index.html');
// favorite3

// ------------------------------------------------------------------------

// archiveのショートカット

$('.archive').children('ul').prepend('<li style="padding:5px;"><a href="./2022・12/index.html">2022 12</a></li>');
// $('.archive').children('ul').prepend('<li style="padding:5px;"><a href="#">2023 1</a></li>');
// $('.archive').children('ul').prepend('<li style="padding:5px;"><a href="#">2023 2</a></li>');
// $('.archive').children('ul').prepend('<li style="padding:5px;"><a href="#">2023 3</a></li>');
// $('.archive').children('ul').prepend('<li style="padding:5px;"><a href="#">2023 4</a></li>');

// archiveのショートカット

// portfolioのショートカット
$('.portfolio').children('ul').prepend('<li style="padding:5px;"><a href="#">作成中</a></li>');
$('.portfolio').children('ul').prepend('<li style="padding:5px;"><a href="#"></a></li>');
$('.portfolio').children('ul').prepend('<li style="padding:5px;"><a href="#"></a></li>');
$('.portfolio').children('ul').prepend('<li style="padding:5px;"><a href="#"></a></li>');
// portfolioのショートカット

// nav
$('#nav-1').html('<a class="nav-link active" aria-current="page" href="#" id="nav-1">home</a>');

$('#nav-2').html('<a class="nav-link active" aria-current="page" href="./profile/index.html" id="nav-2">profile</a>');

$('#nav-3').html('<a class="nav-link active" aria-current="page" href="./sitemap/index.html" id="nav-3">サイトマップ</a>');

// $('.dropdown').children('a').html('<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">作成中</a>');

// menu
// $('.dropdown-menu').children('#menu1').html('<a class="dropdown-item" href="#" id="menu1"></a>');

// $('.dropdown-menu').children('#menu2').html('<a class="dropdown-item" href="#" id="men2"></a>');

// $('.dropdown-menu').children('#menu3').html('<a class="dropdown-item" href="#" id="menu3"></a>');
// menu
// nav