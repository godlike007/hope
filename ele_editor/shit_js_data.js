const data = [{
    value: 'Permission denied to access property',
    info: '尝试访问无权访问的对象。这很可能出现在使用<iframe>元素时加载了一个不同域名下的页面，这在访问子页面时会违背同源策略。',
    example: `<!DOCTYPE html>
                <html>
                <head>
                    <iframe id="myframe" src="http://www1.w3c-test.org/common/blank.html"></iframe>
                    <script>
                    console.log(document.getElementById('myframe').contentWindow.document);
                    // Error: Permission denied to access property "document"
                    </script>
                </head>
                <body></body>
                </html>`
},
{
    value: 'too much recursion',
    info: '一个调用自身的函数被称作递归函数。一些情况下，递归函数类似于一个循环，都重复地执行一个代码段许多次，都需要一个条件（用于避免无尽循环或此处的无尽递归）。当出现过于深层的递归或无尽递归时，JavaScript将会抛出此错误。',
    example: `<!DOCTYPE html>
                <html>
                <head>
                   
                    <script>
                    function loop(x) {
                        if (x >= 1000000000000)
                          return;
                        // 进行一些操作...
                        loop(x + 1);
                      }
                      loop(0);
                      
                      // InternalError: too much recursion
                    </script>
                </head>
                <body></body>
                </html>`
},
{
    key_demo: `"x" is not defined`,
    value: 'is not defined',
    info: '在某些地方引用一个不存在的变量的时候。当你使用变量的时候，这个变量必须是已经被声明的，或者你可以确保它在你当前的脚本或作用域 (scope) 中可用。',
    notice: '当你加载一个库的时候（例如 jQuery），请确保你在这个库加载完毕后再使用这个库中的变量，如“$”。将你想加载的库的 <script> 标签放置在你的代码前面。',
    example: [{
        name: '变量没有被声明',
        code: `<!DOCTYPE html>
                <html>
                <head>
                
                    <script>
                    foo.substring(1); // ReferenceError: foo is not defined
                    </script>
                </head>
                <body></body>
                </html>`
    }, {
        name: '错误的作用域',
        code: `<!DOCTYPE html>
                <html>
                <head>
                
                    <script>
                    function numbers () { 
                        var num1 = 2, 
                            num2 = 3;
                        return num1 + num2;
                      }
                      
                      console.log(num1); // ReferenceError num1 is not defined.
                    </script>
                </head>
                <body></body>
                </html>`
    }],
}
];
