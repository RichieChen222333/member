<h1>會員系統教學示範</h1>
<h2>此系統包含了前端與後端利用了那些技術與功能, 在這個過程遇到了哪些問題, 您用了哪些技巧解決!</h2>
<ul>
    <li>內包大意包含</li>
    <li>1. 專題功能定義與介紹</li>
    <li>2. 技術收穫與如何解決問題</li>
    <li>3. 細部說明搭配使用的技術</li>
</ul>
<hr>
<h4>API規格表如下圖</h4>
<img src="https://webdemorichie.000webhostapp.com/git_file/mem.png" alt="">
<h3>1. 後端API細部說明</h3>
<ul>
    <li>1. XXX_api: 負責新增檔案</li>
    <li>2. XXX_api: 負責新增檔案</li>
    <li>3. XXX_api: 負責新增檔案</li>
    <li>4. XXX_api: 負責新增檔案</li>
</ul>

<h4>2.前端畫面</h4>
<h3>3.XXX</h3>
<h3>3.XXX</h3>
    
  ```js
    export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      newTodo: '取貨',
      visibility: 'all',
      cacheTitle: '',
      cacheItem: [],
      cacheDecriptionTitle: '',
      cacheDecription: [],
      todos: [
        {
          id: '01',
          title: '開會',
          description: '詳細內容',
          completed: true
        },
        {
          id: '02',
          title: '聚餐',
          description: '詳細內容',
          completed: false
        }
      ]
    }
  },
```

