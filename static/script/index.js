/**
 * [ref] http://file.wnhsv.cn/tmpl/html/2020101620190019192.html?tar_foid=df6c85db-9d37-6e85-2fec-05efeae52778&from=timeline
 */

(function() {
  function ready() {
    // Safari Mobile 默认不使用:active 状态
    document.body.addEventListener('touchstart', function f() {});

    var titleEl = document.getElementById('tableTitle');
    var tableEl = document.getElementById('tableBody');

    var dialogWrapper = document.getElementById('dialog');
    var dialogMsg = document.getElementById('dialogMsg');

    var title = window.__data.title || ''; // 页面标题
    var table_title = window.__data.table_title || ''; // 表格标题文字
    var message = window.__data.message; // 复制成功提示
    var listData = window.__data.list1 || []; // 列表数据
    var listData1 = window.__data.list2 || []; // 列表数据
    var listData2 = window.__data.list3 || []; // 列表数据
    var listData3 = window.__data.list4 || []; // 列表数据
    var listData4 = window.__data.list5 || []; // 列表数据
    var listData5 = window.__data.list6 || []; // 列表数据

    document.title = title;
    titleEl.innerHTML = table_title;
    dialogMsg.innerHTML = message;
    renderTable1(listData);
    setTimeout(function() {
      addButtonEvent();
    }, 500);
    renderTable2(listData1);
    setTimeout(function() {
      addButtonEvent();
    }, 500);
    renderTable3(listData2);
    setTimeout(function() {
      addButtonEvent();
    }, 500);
    renderTable4(listData3);
    setTimeout(function() {
      addButtonEvent();
    }, 500);
    renderTable5(listData4);
    setTimeout(function() {
      addButtonEvent();
    }, 500);
    renderTable6(listData5);
    setTimeout(function() {
      addButtonEvent();
    }, 500);

    // 渲染表格
    function renderTable1(list) {
      var listHTML = '<tr><td class="table-subtitle" colspan="8">'+ '全年最重磅 迪士尼系列 <br> 双十一钱包榨干机 </br>' +'</td></tr>';

      list.forEach(function(item,index) {
        listHTML += '<tr>';
        listHTML += '<td>'+ item.a1 +'</td>';
        listHTML += '<td><img src="'+ item.a2 +'" alt="" /></td>';
        listHTML += '<td class="number">'+ item.a3 +'</td>';
        listHTML += '<td>'+ item.a4 +'</td>';
        listHTML += index === 0 ? '<td rowspan="' + 3 + '">'+ "因！为！它！是！大！家！都！爱！的！迪！士！尼！呀！  迪！士！尼！可爱实用 性价比超高 礼盒送贴纸再送定制2021绝美台历 颜值无敌 设计走心 配色我爱了你呢？"+'</td>' : '';
        listHTML += '<td class="number">'+ item.a5 +'</td>';
        listHTML += '<td class="number">'+ item.a6 +'</td>';
        listHTML += '<td><button class="copy-btn" data-clipboard-text="'+ item.a7 +'">复制</button></td>';
        listHTML += '</tr>';
      });

      tableEl.innerHTML = listHTML;
    }

    function renderTable2(list) {
      var listHTML = '<tr><td class="table-subtitle" colspan="8">'+ '橘朵1000+眼影产品 闭眼买入股不亏' +'</td></tr>';

      list.forEach(function(item) {
        listHTML += '<tr>';
        listHTML += '<td>'+ item.a1 +'</td>';
        listHTML += '<td><img src="'+ item.a2 +'" alt="" /></td>';
        listHTML += '<td class="number">'+ item.a3 +'</td>';
        listHTML += '<td>'+ item.a4 +'</td>';
        listHTML += '<td>'+ item.a5 +'</td>';
        listHTML += '<td class="number">'+ item.a6 +'</td>';
        listHTML += '<td class="number">'+ item.a7 +'</td>';
        listHTML += '<td><button class="copy-btn" data-clipboard-text="'+ item.a8 +'">复制</button></td>';
        listHTML += '</tr>';
      });

      tableEl.innerHTML += listHTML;
    }

    function renderTable3(list) {
      var listHTML = '<tr><td class="table-subtitle" colspan="8">'+ '高光腮红' +'</td></tr>';

      list.forEach(function(item) {
        listHTML += '<tr>';
        listHTML += '<td>'+ item.a1 +'</td>';
        listHTML += '<td><img src="'+ item.a2 +'" alt="" /></td>';
        listHTML += '<td class="number">'+ item.a3 +'</td>';
        listHTML += '<td>'+ item.a4 +'</td>';
        listHTML += '<td>'+ item.a5 +'</td>';
        listHTML += '<td class="number">'+ item.a6 +'</td>';
        listHTML += '<td class="number">'+ item.a7 +'</td>';
        listHTML += '<td><button class="copy-btn" data-clipboard-text="'+ item.a8 +'">复制</button></td>';
        listHTML += '</tr>';
      });

      tableEl.innerHTML += listHTML;
    }

    function renderTable4(list) {
      var listHTML = '<tr><td class="table-subtitle" colspan="8">'+ '唇膏唇釉 翻过来有小花花哦' +'</td></tr>';

      list.forEach(function(item) {
        listHTML += '<tr>';
        listHTML += '<td>'+ item.a1 +'</td>';
        listHTML += '<td><img src="'+ item.a2 +'" alt="" /></td>';
        listHTML += '<td class="number">'+ item.a3 +'</td>';
        listHTML += '<td>'+ item.a4 +'</td>';
        listHTML += '<td>'+ item.a5 +'</td>';
        listHTML += '<td class="number">'+ item.a6 +'</td>';
        listHTML += '<td class="number">'+ item.a7 +'</td>';
        listHTML += '<td><button class="copy-btn" data-clipboard-text="'+ item.a8 +'">复制</button></td>';
        listHTML += '</tr>';
      });

      tableEl.innerHTML += listHTML;
    }

    function renderTable5(list) {
      var listHTML = '<tr><td class="table-subtitle" colspan="8">'+ '眼线笔 睫毛膏 眉笔 买这三支就够了' +'</td></tr>';

      list.forEach(function(item) {
        listHTML += '<tr>';
        listHTML += '<td>'+ item.a1 +'</td>';
        listHTML += '<td><img src="'+ item.a2 +'" alt="" /></td>';
        listHTML += '<td class="number">'+ item.a3 +'</td>';
        listHTML += '<td>'+ item.a4 +'</td>';
        listHTML += '<td>'+ item.a5 +'</td>';
        listHTML += '<td class="number">'+ item.a6 +'</td>';
        listHTML += '<td class="number">'+ item.a7 +'</td>';
        listHTML += '<td><button class="copy-btn" data-clipboard-text="'+ item.a8 +'">复制</button></td>';
        listHTML += '</tr>';
      });

      tableEl.innerHTML += listHTML;
    }
    function renderTable6(list) {
      var listHTML = '<tr><td class="table-subtitle" colspan="8">'+ '全网最具性价比底妆在这里' +'</td></tr>';

      list.forEach(function(item) {
        listHTML += '<tr>';
        listHTML += '<td>'+ item.a1 +'</td>';
        listHTML += '<td><img src="'+ item.a2 +'" alt="" /></td>';
        listHTML += '<td class="number">'+ item.a3 +'</td>';
        listHTML += '<td>'+ item.a4 +'</td>';
        listHTML += '<td>'+ item.a5 +'</td>';
        listHTML += '<td class="number">'+ item.a6 +'</td>';
        listHTML += '<td class="number">'+ item.a7 +'</td>';
        listHTML += '<td><button class="copy-btn" data-clipboard-text="'+ item.a8 +'">复制</button></td>';
        listHTML += '</tr>';
      });

      tableEl.innerHTML += listHTML;
    }

    // 添加按钮事件
    function addButtonEvent() {
      var clipboard = new ClipboardJS('.copy-btn');
      var dialogBtn = document.getElementById('dialogBtn');

      clipboard.on('success', function(e) {
        dialogWrapper.style.display = 'block'; // dialog show
        e.clearSelection();
      });

      dialogBtn.addEventListener('click', function() {
        dialogWrapper.style.display = 'none'; // dialog hide
      });
    }
  }
  
  window.onload = ready();
})();
