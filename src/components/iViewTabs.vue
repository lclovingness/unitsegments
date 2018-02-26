<template>
  <div>
    <Tabs type="card">
      <TabPane label="历史数据检索">
       aa
      </TabPane>

      <TabPane label="自定义代码">
bb
      </TabPane>

    </Tabs>
    <br>
    <br>
    <div class="cvu-tabs cvu-tabs-card">
      <div class="cvu-tabs-bar">
        <!---->
        <div class="cvu-tabs-nav-container">
          <div class="cvu-tabs-nav-wrap" style="position: relative;"><span class="cvu-tabs-nav-prev cvu-tabs-nav-scroll-disabled"><i class="cvu-icon cvu-icon-chevron-left"></i></span> <span class="cvu-tabs-nav-next cvu-tabs-nav-scroll-disabled"><i class="cvu-icon cvu-icon-chevron-right"></i></span>
            <div class="cvu-tabs-nav-scroll">
              <div class="nav-text cvu-tabs-nav">
                <div class="cvu-tabs-ink-bar cvu-tabs-ink-bar-animated" style="display: none; width: 118px; transform: translate3d(0px, 0px, 0px);"></div>
                <div class="cvu-tabs-tab cvu-tabs-tab-active" id="tab_history" @click="execTabHandler">
                  <!---->历史数据检索
                  <!---->
                </div>
                <div class="cvu-tabs-tab" id="tab_code" @click="execTabHandler">
                  <!---->自定义代码
                  <!---->
                </div>
              </div>
            </div><object tabindex="-1" type="text/html" data="about:blank" style="display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: none; padding: 0px; margin: 0px; opacity: 0; z-index: -1000; pointer-events: none;"></object></div>
        </div>
      </div>
      <div class="cvu-tabs-content cvu-tabs-content-animated" style="transform: translateX(0%) translateZ(0px);">
        <div class="cvu-tabs-tabpane">
          aa
        </div>
        <div class="cvu-tabs-tabpane">
          bb
        </div>
      </div>
    </div>


  </div>
</template>

<style>


  .cvu-tabs {
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    color: #495060;
    zoom:1}

  .cvu-tabs:after,.cvu-tabs:before {
    content: "";
    display: table
  }

  .cvu-tabs:after {
    clear: both;
    visibility: hidden;
    font-size: 0;
    height: 0
  }

  .cvu-tabs-bar {
    outline: 0
  }

  .cvu-tabs-ink-bar {
    height: 2px;
    box-sizing: border-box;
    background-color: #2d8cf0;
    position: absolute;
    left: 0;
    bottom: 1px;
    z-index: 1;
    transition: transform .3s ease-in-out;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0
  }

  .cvu-tabs-bar {
    border-bottom: 1px solid #dddee1;
    margin-bottom: 16px
  }

  .cvu-tabs-nav-container {
    margin-bottom: -1px;
    line-height: 1.5;
    font-size: 14px;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    zoom:1}

  .cvu-tabs-nav-container:after,.cvu-tabs-nav-container:before {
    content: "";
    display: table
  }

  .cvu-tabs-nav-container:after {
    clear: both;
    visibility: hidden;
    font-size: 0;
    height: 0
  }

  .cvu-tabs-nav-container-scrolling {
    padding-left: 32px;
    padding-right: 32px
  }

  .cvu-tabs-nav-wrap {
    overflow: hidden;
    margin-bottom: -1px
  }

  .cvu-tabs-nav-scroll {
    overflow: hidden;
    white-space: nowrap
  }

  .cvu-tabs-nav-right {
    float: right;
    margin-left: 5px
  }

  .cvu-tabs-nav-prev {
    position: absolute;
    line-height: 32px;
    cursor: pointer;
    left: 0
  }

  .cvu-tabs-nav-next {
    position: absolute;
    line-height: 32px;
    cursor: pointer;
    right: 0
  }

  .cvu-tabs-nav-scrollable {
    padding: 0 12px
  }

  .cvu-tabs-nav-scroll-disabled {
    display: none
  }

  .cvu-tabs-nav {
    padding-left: 0;
    margin: 0;
    float: left;
    list-style: none;
    box-sizing: border-box;
    position: relative;
    transition: transform .5s ease-in-out
  }

  .cvu-tabs-nav:after,.cvu-tabs-nav:before {
    display: table;
    content: " "
  }

  .cvu-tabs-nav:after {
    clear: both
  }

  .cvu-tabs-nav .cvu-tabs-tab-disabled {
    pointer-events: none;
    cursor: default;
    color: #ccc
  }

  .cvu-tabs-nav .cvu-tabs-tab {
    display: inline-block;
    height: 100%;
    padding: 8px 16px;
    margin-right: 16px;
    box-sizing: border-box;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    transition: color .3s ease-in-out
  }

  .cvu-tabs-nav .cvu-tabs-tab:hover {
    color: #57a3f3
  }

  .cvu-tabs-nav .cvu-tabs-tab:active {
    color: #2b85e4
  }

  .cvu-tabs-nav .cvu-tabs-tab .cvu-icon {
    width: 14px;
    height: 14px;
    margin-right: 8px
  }

  .cvu-tabs-nav .cvu-tabs-tab-active {
    color: #2d8cf0
  }

  .cvu-tabs-mini .cvu-tabs-nav-container {
    font-size: 14px
  }

  .cvu-tabs-mini .cvu-tabs-tab {
    margin-right: 0;
    padding: 8px 16px;
    font-size: 12px
  }

  .cvu-tabs .cvu-tabs-content-animated {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    will-change: transform;
    transition: transform .3s ease-in-out
  }

  .cvu-tabs .cvu-tabs-tabpane {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    transition: opacity .3s;
    opacity: 1
  }

  .cvu-tabs .cvu-tabs-tabpane-inactive {
    opacity: 0;
    height: 0
  }

  .cvu-tabs.cvu-tabs-card>.cvu-tabs-bar .cvu-tabs-nav-container {
    height: 32px
  }

  .cvu-tabs.cvu-tabs-card>.cvu-tabs-bar .cvu-tabs-ink-bar {
    visibility: hidden
  }

  .cvu-tabs.cvu-tabs-card>.cvu-tabs-bar .cvu-tabs-tab {
    margin: 0;
    margin-right: 4px;
    height: 31px;
    padding: 5px 16px 4px;
    border: 1px solid #dddee1;
    border-bottom: 0;
    border-radius: 4px 4px 0 0;
    transition: all .3s ease-in-out;
    background: #f8f8f9
  }

  .cvu-tabs.cvu-tabs-card>.cvu-tabs-bar .cvu-tabs-tab-active {
    height: 32px;
    padding-bottom: 5px;
    background: #fff;
    transform: translateZ(0);
    border-color: #dddee1;
    color: #2d8cf0
  }

  .cvu-tabs.cvu-tabs-card>.cvu-tabs-bar .cvu-tabs-nav-wrap {
    margin-bottom: 0
  }

  .cvu-tabs.cvu-tabs-card>.cvu-tabs-bar .cvu-tabs-tab .cvu-icon-ios-close-empty {
    width: 0;
    height: 22px;
    font-size: 22px;
    margin-right: 0;
    color: #999;
    text-align: right;
    vertical-align: middle;
    overflow: hidden;
    position: relative;
    top: -1px;
    -ms-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    transition: all .3s ease-in-out
  }

  .cvu-tabs.cvu-tabs-card>.cvu-tabs-bar .cvu-tabs-tab .cvu-icon-ios-close-empty:hover {
    color: #444
  }

  .cvu-tabs.cvu-tabs-card>.cvu-tabs-bar .cvu-tabs-tab-active .cvu-icon-ios-close-empty,.cvu-tabs.cvu-tabs-card>.cvu-tabs-bar .cvu-tabs-tab:hover .cvu-icon-ios-close-empty {
    width: 14px;
    transform: translateZ(0)
  }

  .cvu-tabs-no-animation>.cvu-tabs-content {
    -ms-transform: none!important;
    transform: none!important
  }

  .cvu-tabs-no-animation>.cvu-tabs-content>.cvu-tabs-tabpane-inactive {
    display: none
  }

</style>

<script>
  const d = (id) => {
    return document.getElementById(id)
  };
  export default {
    name: 'iViewTabs',
    data:function() {
      return {

      }
    }
    ,
    watch: {

    },

    methods:{

      execTabHandler(obj)
      {
        let evt = window.event || e;
        let idN = evt.target.id;
        if(idN == "tab_history"){
          evt.target.setAttribute("class", "cvu-tabs-tab cvu-tabs-tab-active");
          d("tab_code").setAttribute("class", "cvu-tabs-tab");
        }else{
          evt.target.setAttribute("class", "cvu-tabs-tab cvu-tabs-tab-active");
          d("tab_history").setAttribute("class", "cvu-tabs-tab");
        }
      }

    }

  }

</script>

