<div class="container-fluid">
    <ul class="submenu nodots nopadding nomarginbottom">
        <li class="col-xs-12 col-sm-4" data-name="ilikedangdut">
        <a href="i-like-dangdut">
            <div class="vertical-align-nofloat">
                <span class="col-xs-4 nopadding"><img class="img-circle img-responsive center-block" src="asset/images/video/ilikedangdut.jpg" alt="I like Dangdut" /></span>
                <span class="col-xs-6 nopadding">I Like Dangdut</span>
            </div>
        </a>
        </li>
        <li class="col-xs-12 col-sm-4" data-name="greetingsindosiar">
        <a href="greetings-indosiar">
            <div class="vertical-align-nofloat">
                <span class="col-xs-4 nopadding"><img class="img-circle img-responsive center-block" src="asset/images/video/kontes-greeting.jpg" alt="Kontes Greetings" /></span>
                <span class="col-xs-6 nopadding">Greetings Indosiar 21</span>
            </div>
        </a>
        </li>
        <li class="col-xs-12 col-sm-4" data-name="videobumper">
        <a href="video-bumper">
            <div class="vertical-align-nofloat">
                <span class="col-xs-4 nopadding"><img class="img-circle img-responsive center-block" src="asset/images/video/bumper.jpg" alt="Bumper" /></span>
                <span class="col-xs-6 nopadding">Video bumper indosiar</span>
            </div>
        </a>
        </li>
    </ul>
</div>
<script>
    function highlightSubMenu() {
      var target = '.submenu > li';
      var url = window.location.href.split('/');
      var urlLastSegment = url[4].split('.');
      var newUrl = urlLastSegment[0];
      $(target + '[data-name="'+ newUrl +'"]').addClass('active').siblings().removeClass('active');
    }
    $(document).ready(function () {
        highlightSubMenu();
    })
</script>