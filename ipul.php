<?php 

	$pageTitle = "HUT Indosiar 21 | Personality Quiz";
    $pageSubject = "Indosiar Personality Quiz";
    $pageKeywords = "indosiar, indosiar21, HUT, kuis, personality quiz";
	$pageDesc = "Seperti apa tipe PDKT kamu? Yuk ikutan personality quiz http://hut.indosiar.com/ #MenujuIndosiar21";
	$socialShareImg = "http://hut.indosiar.com/asset/images/kuis/personality/ipul.jpg?4362984378";
	include("header.php");

?>

<?php require('nav.php') ?>
<div class="container spacepad" id="kuis-result">
    <div class="col-xs-12 text-center">
        <h2 class="title">Kamu mirip ...</h2></div>
    <div class=" animated bounceInRight vertical-align-nofloat">
        <div class="person-img col-xs-12 col-sm-6"><img class=img-responsive src=asset/images/kuis/personality/ipul.jpg alt="personality ipul"></div>
        <div class="person-desc col-xs-12 col-sm-6">
            <h2>Ipul!</h2>
            <p>Wah! Gaya pdkt kamu mirip banget nih sama Ipul karena kamu orangnya diem. Tapi walaupun kamu diem, kamu tuh orangnya pasti.  Artinya cara kamu pdkt itu udah terencana dengan baik. Pada akhirnya gebetan kamu makin tertarik sama kamu.</p>
            <div class="social-btn twitter right">
                <a href="https://twitter.com/share" data-text="Wah! gue mirip Ipul! Yuk ikutan indosiar personality quiz di " data-url="http://hut.indosiar.com/personality-kuis" class="twitter-share-button" {count} data-size="large">Tweet</a>
            </div>
         	<div class="col-xs-12 nopadding spacepad"><a href="personality-quiz"><button type="button" class="btn btn-primary fullwidth">Coba lagi</button></a></div>
        </div>

    </div>
</div>
<script>
! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');
</script>

<?php require('footer.php') ?>
<?php require('overlay-menu.php') ?>
	</div>
</body>
</html>

