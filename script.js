let interval = setInterval(()=>{
  if (vueApp && vueApp?.loc) {
    console.log("APPLYING...");
    vueApp.loc.ui_game_killedby = `<h2>BLOSSOMED BY</h2> <p class='text_yellow nospace'>{0}</p>`;
    vueApp.loc.ui_game_youkilled = "<h3>YOU BLOSSOMED</h3> <p class='text_yellow nospace'>{0}</p>"
    clearInterval(interval);
  };
}, 100);

(function () {
    const addScript = () => {
        document.head.innerHTML += `<style>

:root {
    --ss-vip-yellow: white !important;
    --ss-blue5: white !important;
}

#logo {
    content: url(https://raw.githubusercontent.com/QuackshotYT/Blossom-v2.1/8649ae596aea0148992ea07dc2acbb5d86e633a4/pink_logo.svg);
    filter: drop-shadow(1mm 2mm 0mm rgba(0, 0, 0, .3));
}

#ss_background,
#gameDescription,
.load_screen,
#progress-container {
  background: url("https://raw.githubusercontent.com/QuackshotYT/Blossom-v2.1/refs/heads/main/beautifull-cherry-blossom-background-free-vector.jpg") !important;
  position: absolute !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  width: 100% !important;
  height: 100% !important;
}

div.media-tabs-content.front_panel.roundme_sm {
  background: #ffa0eb !important;
  background-size: cover !important;
}

.front_panel {
  border: var(--ss-space-sm) solid white;
}

body .btn_blue,
body .btn_green,
body .ss_bigtab,
body .ss_bigtab.selected,
body .button_blue {
  background: pink !important;
  border: 0.2em solid !important;
  color: white !important;
}

body .btn_yolk,
body .btn_red,
body .btn_blue1
body .text_blue5 {
  background: pink !important;
  border: 0.2em solid !important;
  color: white !important;
}

h3.text_blue3 {
    color: pink !important;
}

h3.text_blue8 {
    color: pink !important;
}

p.text_blue5 {
    color: white !important;
}

p.text_blue3 {
    color: white !important;
}

li.text_blue5 {
    color: white !important;
}

button.bg_blue6 {
    background: none !important;
}

.morestuff {
  background-color: pink !important;
  border: 0.2em solid !important;
}

.ss_bigtab:hover {
  color: white !important;
}

#stat_item {
  background: pink;
}

#stat_item h4,
.stat_stat {
  color: grey;
}

.news_item:nth-child(odd), .stream_item:nth-child(odd) {
    background: pink !important;
    color: white !important;
}

.stream_item:hover,
.news_item.clickme:hover {
  background: pink !important;
}

#weapon_select:nth-child(1n + 0) .weapon_img {
  background: pink !important;
  border: 3px solid grey !important;
}

#popupTipDay #weapon_select:nth-child(1n + 0) .weapon_img {
  background: pink !important;
  border: 3px solid grey !important;
}

body h3,
body h1,
body h2,
body h4,
body h5,
body h6,
body .front_panel h3,
body #equip.equipped_slots h3,
body #item_grid h3 {
  color: #ffb7c5 !important;
}

label,
.label {
  color: #ffb7c5 !important;
}

.egg_count {
  color: white;
}

.account_eggs {
  background: pink;
}


.box_blue2 {
  background-color: pink;
}

.pause-bg,
.play-panel-panels-join,
.play-panel-panels.roundme_md,
.play-panel-panels {
    background: url(https://raw.githubusercontent.com/QuackshotYT/Blossom-v2.1/refs/heads/main/beautifull-cherry-blossom-background-free-vector.jpg) !important;
}

#maskmiddle {
    background: url("https://raw.githubusercontent.com/QuackshotYT/Blossom-v2.1/refs/heads/main/bqocNc2.png")
    center center no-repeat !important;
    background-size: contain !important;
    width: 100vh !important;
    height: 100vh !important;
}

.bevel_green {
    box-shadow: none !important;
}

.bevel_blue {
    box-shadow: none !important;
}

.bevel_yolk {
    box-shadow: none !important;
}

.bevel_red {
    box-shadow: none !important;
}

.bevel_yolk {
    box-shadow: none !important;
}

.bevel_blue_light {
    box-shadow: none !important;
}

.ss_button {
    border-color: white !important;
    background: pink !important;
    color: white !important;
    box-shadow: none !important;
}

.bg_blue6 {
    background-color: pink !important;
}

.option-box {
    padding: var(--ss-space-md) 0;
    bottom: 4em;
    right: -50%;
    z-index: 1;
    border: 0.33em solid white !important;
    box-shadow: none !important;
}

div.bg_blue6 {
    background-color: pink !important;
    border: 0.12em solid white !important;
}

div.bg_blue3 {
    background-color: #f6bec9 !important;
}

button.common-box-shadow {
    box-shadow: none;
}
h4.common-box-shadow {
    box-shadow: none;
}

div.common-box-shadow {
    box-shadow: none;
}

h4.text_blue5 {
    color: pink !important;
}

.nospace text_yellow_bright font-size-lg font-nunito dynamic-text {
    color: white !important;
}

.player-challenges-container {
    background: linear-gradient(278deg, pink 0, #f2e5e5 100%) !important;
}

.ss_smtab {
    color: white !important;
    background: pink !important;
}

.ss_smtab.selected, .ss_smtab:hover {
    background: #b2868e !important;
}

.tab-content .media-item:nth-child(2n) {
    background: #fff !important;
    color: pink'
}

.media-item-border {
    border-bottom: none !important;
}

.house-ad-wrapper,
.player-challenge-single-action-claimed,
.player-challenge-single-action-claimed:before,
.equip-item-banner.shadow,
#item_mask,
.player-challenge-tool-tip .tool-tip-text {
    display: none;
}

.main-nav-item-bg {
    fill: #ffc1cb !important;
}

.main-menu-button .menu-icon {
    fill: white !important;
}

.main-menu-button {
    color: white !important;
}

.current-screen .main-nav-item-bg, .main-menu-button:hover .main-nav-item-bg {
    fill: #b2868e !important;
}

.player-challenges-container .player-challenge-single {
    border-bottom: none !important;
}

.content-wrap.f_col.f_space_between {
    color: #b2868e !important;
}

article.media-item.news_item.clickme.media-item-border {
    color: #b2868e !important;
}

#equip_grid .grid-item.is-premium {
    border: none;
}

#equip_itemtype .selected, .ico_itemtype.selected {
    background: #b2868e !important;
}

.firebaseui-input, .ss_field {
    border: var(--ss-common-border-width) solid white;
}

#account_panel .svg-icon {
    fill: white !important;
}

#game_screen:not(.is-paused) #inGameUI {
    top: 3.5em;
}

button.pause-screen-btn-spectate {
    box-shadow: none !important;
}

.is-paused .pause-ui-element {
    background-color: pink !important;
}

.chat-player-name {
    color: #b2868e !important;
}

#chatIn {
    color: white !important;
}

#inGameUI {
    background-color: #b2868e6e !important;
}

.crosshair.normal {
    background: pink !important;
}

.shotReticle.fill.normal {
    border-color: pink;
}

#reticleDot {
    background: pink !important;
}

.player-challenge-single .checkmark-wrap {
    border-top: 3em solid #b2868e !important;
}

input.firebaseui-input,
input.ss_field {
    border: var(--ss-common-border-width) solid #fff !important;
    color: #f8aecf !important;
    box-shadow: inset .3em .3em .03em #b2868e30 !important;
}

.ico_itemtype {
    border-color: white !important;
    background: pink !important;
}

#equip_grid .grid-item:not(.morestuff) {
    background: #fcdee6 !important;
    border: var(--ss-common-border-width) solid white !important;
}

#equip_grid .grid-item.is-premium {
    background: linear-gradient(278deg, pink 0, #f2e5e5 100%) !important;
}

.is-premium .equip-item-banner,
.item-tag-vipitem .equip-item-banner {
    color: pink !important;
    background: white !important;
}

.egg-color-select {
    background: linear-gradient(0deg, pink 0, #f2e5e5 100%) !important;
}

div#settingsPopup,
div#leaveGameConfirmPopup,
div#shareLinkPopup,
div#tutorialPopup,
div#gameOptionsPopup,
div#genericPopup,
div#firebaseSignInPopup,
div#switchTeamPopup,
div#giveStuffPopup,
div#playerActionsPopup,
div#reportPlayerPopup,
div#redeemCodePopup,
div#chicknWinner,
div#banPlayerPopup {
    background: linear-gradient(278deg, #f5ced5 0, #f2e5e5 100%) !important;
}

.popup_close,
.popup_lg h1,
h1.text_gold.shadow_bluebig4,
h3#popup_title {
    text-shadow: none !important;
}

p.spinner-tips.LoadingMsgs {
    color: pink !important;
    text-shadow: none !important;
}

.loading-progress-outer {
    background: pink !important;
}

div#limited-un-vaulted {
    background: linear-gradient(180deg, #f5ced5 0, #f2e5e5 100%) !important;
}

span#shellStreakCaptionStreak {
    color: white;
}

.common-box-shadow {
    box-shadow: none !important;
}

#healthContainer {
    background: #0c576f !important;
}

#giveStuffPopup.twitchDrops .egg-give-stuff, #giveStuffPopup.twitchDrops .grid-item {
    background-color: pink !important;
}

#giveStuffPopup.twitchDrops footer {
    background-color: none !important;
}

#giveStuffPopup.twitchDrops {
    border-color: white !important;
}

i.fas.fa-egg.text_gold.vip-egg {
    color: white;
}

.player-challenge-single-progress-bar.bg_yellow.roundme_md {
    background-color: pink !important;
}

#stamp-controls .button {
    background-color: pink;
    box-shadow: none;
}

#stamp-controls .button .arrow {
    fill: white;
}

#giveStuffPopup.twitchDrops footer {
    background: none !important;
}

.ss_select {
    border: var(--ss-common-border-width) solid white;
    box-shadow: none !important;
    background: pink;
    color: white;
}

#footer_links_panel a, #footer_links_panel button {
    color: white;
}

.chw-circular-timer-countdown {
    color: pink !important;
}

i.fas.fa-egg.fa-spin.fa-2x {
    color: pink !important;
}

.loading-progress-bar,
#progressBar {
    background: pink !important;
}

.giveStuffPopup-content .equip_icon,
.primary .equip_icon,
.secondary .equip_icon {
    filter: drop-shadow(0 1mm 0 rgba(10, 87, 113, .4)) !important;
}

</style>`
    }
    document.body ? addScript() : document.addEventListener("DOMContentLoaded", e => addScript());
})();
