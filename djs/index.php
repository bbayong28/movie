<?php
if (!defined('_INDEX_')) define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/index.php');
    return;
}

if(G5_COMMUNITY_USE === false) {
    include_once(G5_THEME_SHOP_PATH.'/index.php');
    return;
}

include_once(G5_THEME_PATH.'/head.php');
?>


<main class="main_page">
    <section class="main_visual">
        <div class="main_slide">
            <figure class="itm01">이미지1</figure>
            <figure class="itm02">이미지2</figure>
            <figure class="itm03">이미지3</figure>
        </div>
        <div class="slogan">
            <h2>A Grobal Leader in<br />Electronic Maerials & Foaming Agents</h2>
            <p>루미르는 국가 위성사업 분야에서 다양하고
                의미 있는 위성사업에 참여한 실적과 이를 통해
                검증된 제품 기술력을 보유하고 있습니다.
            </p>
    </div>
</section>
<div>
<? echo latest("theme/main_web", "qa",5, 25);?>
<? echo latest("theme/main_photo", "qa",5, 25);?>

</div>
</main>




<?php
include_once(G5_THEME_PATH.'/tail.php');