const todoInput = document.getElementById("taskInput");
const addbtn = document.getElementById("addBtn");
const todolist = document.getElementById("taskList");

// todolistのHTML要素をローカルストレージにあるtodoというラベルを目印に取得する
todolist.innerHTML = localStorage.getItem("todo");


// 目標；入力したテキストをリストとして、タスクに追加
addbtn.addEventListener("click", function () {
  const taskName = todoInput.value; //入力されたものをここに定義
  todolist.appendChild(document.createElement("li")).textContent = taskName;
  // todoというラベル（関数名みたいなもの）で、todolistのHTML要素を保存する.空白にする前に保存しないといけない。
    localStorage.setItem("todo", todolist.innerHTML);
  todoInput.value = ""; // taskNameを削除する命令をする
  console.log(todolist);
});

// 一旦削除ボタンだけを作成する
// やっていることは1行目と同じ。今度は要素を作った。
// 参照先はliというタグ。”で囲むのは文字列として認識してもらって、htmlのコードの名から探してもらうため。
const nobtn =document.createElement("button");
//nobtnにボタン要素を表示させる
todolist.appendChild(nobtn);