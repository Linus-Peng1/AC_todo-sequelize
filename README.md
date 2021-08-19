# AC_todo-sequelize

<br>

此專案為提供使用者一個網路記事本工具，可以新稱、編輯各待辦事項，並可標註已完成項目。

測試會員: 
* email: root@example.com
* password: 12345678

<br>

## 產品功能

1. 需登入會員使用，可以註冊新帳號，或者可以透過 Facebook Login 直接登入。
2. 使用者可以在首頁瀏覽屬於自己的 todo list
3. 使用者可以新增/編輯/刪除任一筆 todo

<br>

## 網頁畫面

![image](https://raw.githubusercontent.com/Linus-Peng1/AC_todo-sequelize/main/todo-sequelize_1.PNG)

![image](https://raw.githubusercontent.com/Linus-Peng1/AC_todo-sequelize/main/todo-sequelize_2.PNG)

<br>

## 建置環境

<br>

* node.js : 10.15.0
* express: 4.17.1
* express-handlebars: 5.3.2
* express-session: ^1.17.2
* passport: ^0.4.1
* MySQL: ^8.0.25
* mysql2: ^2.3.0
* sequelize: ^6.6.5

<br>

## 安裝流程

<br>

1. 開啟終端機(terminal)，利用 git clone 將專案下載至本機
```
git clone https://github.com/Linus-Peng1/AC_todo-sequelize.git
```
2. 進入存放此專案資料夾
```
cd todo-sequelize
```
3. 安裝套件
```
npm install
```
4. 環境變數

* 設定環境變數檔案，將 .env.example 檔名改為 .env。
* 若要使用 facebook login 功能，需先至 Facebook for Developers 中建立應用程式，並將應用程式編號和密鑰分別輸入至 .env 檔案中的 FACEBOOK_ID 和 FACEBOOK_SECRET。

5. 建立資料庫

開啟 MySQL workbench 並連線至本地資料庫，輸入下列指令建立資料庫
```
drop database if exists todo_sequelize;
create database todo_sequelize;
use todo_sequelize;
```
PS: 預設資料庫名稱為 todo_sequelize，若需更改資料庫名稱或其他資料庫相關設定，可至 config.js 檔案中修改。

6. 建立資料庫 table
```
npx sequelize db:migrate
```

7. 建立種子資料
```
npx sequelize db:seed:all
```

8. 啟動網頁伺服器
```
npm run dev
```
9. 出現下列訊息，即可點選連結開啟網頁
```
App is running on http://localhost:3000
```
