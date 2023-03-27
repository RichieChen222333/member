<h1>會員系統教學示範</h1>
<h2>此系統包含了前端與後端利用了那些技術與功能, 在這個過程遇到了哪些問題, 您用了哪些技巧解決!</h2>
<h4>API規格表如下圖</h4>
<img src="https://webdemorichie.000webhostapp.com/git_file/mem.png" alt="">
<h3>1. 後端API細部說明</h3>:
<ul>
    <li>1. XXX_api: 負責新增檔案</li>
    <li>2. XXX_api: 負責新增檔案</li>
    <li>3. XXX_api: 負責新增檔案</li>
    <li>4. XXX_api: 負責新增檔案</li>
</ul>

<h4>2.前端畫面</h4>
<h3>3.XXX</h3>

<h3>某段程式碼介紹</h3>
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
  methods: {
    addTodo() {
      console.log("eee");
      const timestamp = Math.floor(Date.now());
      const value = this.newTodo;
      this.todos.push({
        id: timestamp,
        title: value,
        description: '詳細內容',
        completed: false
      });
    },
    removeTodo(todo) {
      const vm = this;
      var newIndex = vm.todos.find((item) => {
        return todo.id == item.id
      });
      vm.todos.splice(newIndex, 1);
    },
    editDecription(item) {
      this.cacheDecriptionTitle = item;
      this.cacheDecription = item.title;
    },
    editTodo(item) {
      this.cacheItem = item;
      this.cacheTitle = item.title;
    },
    doneTodo(item) {
      item.title = this.cacheTitle;
      this.cacheTitle = '';
      this.cacheItem = '';
    },
    cancelTodo() {
      this.cacheTitle = '';
      this.cacheItem = '';
    },
    destory() {
      this.todos = [];
    }
  },
  computed: {
    filterTodo() {
      const vm = this;
      if (vm.visibility == 'all') {
        return vm.todos
      } else if (vm.visibility == 'active') {
        const activeTodo = [];
        vm.todos.forEach((item) => {
          if (!item.completed) {
            activeTodo.push(item)
          }
        });
        return activeTodo;
      } else if (vm.visibility == 'completed') {
        const completedTodo = [];
        vm.todos.forEach((item) => {
          if (item.completed) {
            completedTodo.push(item)
          }
        });
        return completedTodo;
      }
    },
    countActive() {
      let active = 0;
      this.todos.forEach((item) => {
        if (!item.completed) {
          active++;
        }
      });
      return active;
    }
  }
}
```
