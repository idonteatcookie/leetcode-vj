import { Component } from 'solid-js'
import './index.scss'

const contestDetailOverview: Component = () => {
  return (
    <div class="problem">
      <div class="code-box">
        <h4 class="title">2336. 无限集中的最小数字</h4>
        <p>
          现有一个包含所有正整数的集合 <code>[1, 2, 3, 4, 5, ...]</code> 。
        </p>
        \n\n
        <p>
          实现 <code>SmallestInfiniteSet</code> 类：
        </p>
        \n\n
        <ul>
          \n\t
          <li>
            <code>SmallestInfiniteSet()</code> 初始化{' '}
            <strong>SmallestInfiniteSet</strong> 对象以包含{' '}
            <strong>所有</strong> 正整数。
          </li>
          \n\t
          <li>
            <code>int popSmallest()</code> <strong>移除</strong>{' '}
            并返回该无限集中的最小整数。
          </li>
          \n\t
          <li>
            <code>void addBack(int num)</code> 如果正整数 <code>num</code>{' '}
            <strong>不</strong> 存在于无限集中，则将一个 <code>num</code>{' '}
            <strong>添加</strong> 到该无限集中。
          </li>
          \n
        </ul>
        \n\n<p>&nbsp;</p>\n\n
        <p>
          <strong>示例：</strong>
        </p>
        \n\n
        <pre>
          <strong>输入</strong>\n[\"SmallestInfiniteSet\", \"addBack\",
          \"popSmallest\", \"popSmallest\", \"popSmallest\", \"addBack\",
          \"popSmallest\", \"popSmallest\", \"popSmallest\"]\n[[], [2], [], [],
          [], [1], [], [], []]\n<strong>输出</strong>\n[null, null, 1, 2, 3,
          null, 1, 4, 5]\n\n<strong>解释</strong>\nSmallestInfiniteSet
          smallestInfiniteSet = new
          SmallestInfiniteSet();\nsmallestInfiniteSet.addBack(2); // 2
          已经在集合中，所以不做任何变更。\nsmallestInfiniteSet.popSmallest();
          // 返回 1 ，因为 1
          是最小的整数，并将其从集合中移除。\nsmallestInfiniteSet.popSmallest();
          // 返回 2 ，并将其从集合中移除。\nsmallestInfiniteSet.popSmallest();
          // 返回 3 ，并将其从集合中移除。\nsmallestInfiniteSet.addBack(1); //
          将 1 添加到该集合中。\nsmallestInfiniteSet.popSmallest(); // 返回 1
          ，因为 1 在上一步中被添加到集合中，\n // 且 1
          是最小的整数，并将其从集合中移除。\nsmallestInfiniteSet.popSmallest();
          // 返回 4 ，并将其从集合中移除。\nsmallestInfiniteSet.popSmallest();
          // 返回 5 ，并将其从集合中移除。
        </pre>
        \n\n<p>&nbsp;</p>\n\n
        <p>
          <strong>提示：</strong>
        </p>
        \n\n
        <ul>
          \n\t
          <li>
            <code>1 &lt;= num &lt;= 1000</code>
          </li>
          \n\t
          <li>
            最多调用 <code>popSmallest</code> 和 <code>addBack</code> 方法{' '}
            <strong>共计</strong> <code>1000</code> 次
          </li>
          \n
        </ul>
        \n
      </div>
    </div>
  )
}

export default contestDetailOverview
