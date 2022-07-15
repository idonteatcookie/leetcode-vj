import{t as n}from"./index.d10dbfeb.js";const t=n(`<div class="problem"><div class="code-box"><h4 class="title">2336. \u65E0\u9650\u96C6\u4E2D\u7684\u6700\u5C0F\u6570\u5B57</h4><p>\u73B0\u6709\u4E00\u4E2A\u5305\u542B\u6240\u6709\u6B63\u6574\u6570\u7684\u96C6\u5408 <code>[1, 2, 3, 4, 5, ...]</code> \u3002</p>

<p>\u5B9E\u73B0 <code>SmallestInfiniteSet</code> \u7C7B\uFF1A</p>

<ul>
	<li><code>SmallestInfiniteSet()</code> \u521D\u59CB\u5316 <strong>SmallestInfiniteSet</strong> \u5BF9\u8C61\u4EE5\u5305\u542B <strong>\u6240\u6709</strong> \u6B63\u6574\u6570\u3002</li>
	<li><code>int popSmallest()</code> <strong>\u79FB\u9664</strong> \u5E76\u8FD4\u56DE\u8BE5\u65E0\u9650\u96C6\u4E2D\u7684\u6700\u5C0F\u6574\u6570\u3002</li>
	<li><code>void addBack(int num)</code> \u5982\u679C\u6B63\u6574\u6570 <code>num</code> <strong>\u4E0D</strong> \u5B58\u5728\u4E8E\u65E0\u9650\u96C6\u4E2D\uFF0C\u5219\u5C06\u4E00\u4E2A <code>num</code> <strong>\u6DFB\u52A0</strong> \u5230\u8BE5\u65E0\u9650\u96C6\u4E2D\u3002</li>
</ul>

<p>&nbsp;</p>

<p><strong>\u793A\u4F8B\uFF1A</strong></p>

<pre><strong>\u8F93\u5165</strong>
["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest"]
[[], [2], [], [], [], [1], [], [], []]
<strong>\u8F93\u51FA</strong>
[null, null, 1, 2, 3, null, 1, 4, 5]

<strong>\u89E3\u91CA</strong>
SmallestInfiniteSet smallestInfiniteSet = new SmallestInfiniteSet();
smallestInfiniteSet.addBack(2); // 2 \u5DF2\u7ECF\u5728\u96C6\u5408\u4E2D\uFF0C\u6240\u4EE5\u4E0D\u505A\u4EFB\u4F55\u53D8\u66F4\u3002
smallestInfiniteSet.popSmallest(); // \u8FD4\u56DE 1 \uFF0C\u56E0\u4E3A 1 \u662F\u6700\u5C0F\u7684\u6574\u6570\uFF0C\u5E76\u5C06\u5176\u4ECE\u96C6\u5408\u4E2D\u79FB\u9664\u3002
smallestInfiniteSet.popSmallest(); // \u8FD4\u56DE 2 \uFF0C\u5E76\u5C06\u5176\u4ECE\u96C6\u5408\u4E2D\u79FB\u9664\u3002
smallestInfiniteSet.popSmallest(); // \u8FD4\u56DE 3 \uFF0C\u5E76\u5C06\u5176\u4ECE\u96C6\u5408\u4E2D\u79FB\u9664\u3002
smallestInfiniteSet.addBack(1); // \u5C06 1 \u6DFB\u52A0\u5230\u8BE5\u96C6\u5408\u4E2D\u3002
smallestInfiniteSet.popSmallest(); // \u8FD4\u56DE 1 \uFF0C\u56E0\u4E3A 1 \u5728\u4E0A\u4E00\u6B65\u4E2D\u88AB\u6DFB\u52A0\u5230\u96C6\u5408\u4E2D\uFF0C
 // \u4E14 1 \u662F\u6700\u5C0F\u7684\u6574\u6570\uFF0C\u5E76\u5C06\u5176\u4ECE\u96C6\u5408\u4E2D\u79FB\u9664\u3002
smallestInfiniteSet.popSmallest(); // \u8FD4\u56DE 4 \uFF0C\u5E76\u5C06\u5176\u4ECE\u96C6\u5408\u4E2D\u79FB\u9664\u3002
smallestInfiniteSet.popSmallest(); // \u8FD4\u56DE 5 \uFF0C\u5E76\u5C06\u5176\u4ECE\u96C6\u5408\u4E2D\u79FB\u9664\u3002</pre>

<p>&nbsp;</p>

<p><strong>\u63D0\u793A\uFF1A</strong></p>

<ul>
	<li><code>1 &lt;= num &lt;= 1000</code></li>
	<li>\u6700\u591A\u8C03\u7528 <code>popSmallest</code> \u548C <code>addBack</code> \u65B9\u6CD5 <strong>\u5171\u8BA1</strong> <code>1000</code> \u6B21</li>
</ul>
</div></div>`),l=()=>t.cloneNode(!0);export{l as default};
