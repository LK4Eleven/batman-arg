// 关键词映射：【匹配关键词数组】: 跳转页面
const keywordJump = [
    {
        words: ["乔·凯米", "丽莎·凯米"],
        link: "zx1.html"
    },
    {
        words: ["常用加密方式", "加密方式", "加密手段", "常用加密方法", "加密方法"],
        link: "codepage.html"
    }
];

// 点击搜索按钮逻辑
btnDom.onclick = function(){
    let word = inputDom.value.trim();
    if (!word) {
        showTip("请输入检索关键词");
        return;
    }

    let targetUrl = null;
    // 遍历规则，只要输入内容包含数组里任意一个词就匹配
    for(let item of keywordJump){
        for(let keyStr of item.words){
            if(word.includes(keyStr)){
                targetUrl = item.link;
                break;
            }
        }
        if(targetUrl) break;
    }

    if(targetUrl){
        window.location.href = targetUrl;
    }else{
        showTip("你看了一圈，刷了会手机，刚才看了什么？");
    }
}

// 输入框回车触发搜索
inputDom.onkeydown = function(e){
    if(e.key === "Enter") btnDom.click();
}
