const defaultBranchName = document.getElementById("branchNameText").value;

// セレクトボックスの要素を作成する関数
const createSelectBox = () => {
  // セレクトボックスの要素を作成
  const selectBox = document.createElement("select");
  selectBox.id = "branchNamePrefix";
  selectBox.setAttribute(
    "style",
    "height: 2.5em; line-height: 1.7rem; background: #ebecf0; color: #172B4D; padding-left: 10px; border: 2px solid #dfe1e6; border-radius: 3.01px; width: 100%; margin-bottom: 10px;"
  );

  // オプションの値とテキストを定義
  const options = [
    { value: "release/", text: "Release" },
    { value: "feature/", text: "Feature" },
    { value: "bugfix/", text: "Bugfix" },
    { value: "hotfix/", text: "Hotfix" },
    { value: "", text: "Other" },
  ];

  // オプションをセレクトボックスに追加
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.text = option.text;
    selectBox.appendChild(optionElement);
  });

  // セレクトボックスをページに追加
  const form = document.querySelector("form");
  form.insertBefore(selectBox, form.firstChild);
  const branchNameText = document.getElementById("branchNameText");
  branchNameText.value = `${options[0].value}${defaultBranchName}`;
  branchNameText.parentNode.insertBefore(selectBox, branchNameText);
};

// セレクトボックスを作成
createSelectBox();

// セレクトボックスの値が変更されたときの処理を行う関数
const handleSelectBoxChange = (event) => {
  const prefix = event.target.value;
  const branchNameText = document.getElementById("branchNameText");
  branchNameText.value = `${prefix}${defaultBranchName}`;
};

// セレクトボックスの値が変更されたときのイベントリスナーを追加
const selectBox = document.querySelector("select");
selectBox.addEventListener("change", handleSelectBoxChange);
