export default `
§ page.welcome.step1: 在项目的根目录运行命令
§ page.welcome.step3: 拖放
§ page.welcome.step4: log.txt 文件到本页
§ page.welcome.description: Git 创建文件 log.txt. 它包含用于构建报表的数据。 运行命令  git shortlog -s -n -e 如果你不需要报告。 创建文件 [.mailmap|https://git-scm.com/docs/gitmailmap] 在项目的根源，结合员工统计.
§ page.welcome.warning1: 该服务不会存储或传输您的数据。 所有计算都在您的计算机上执行.
§ page.welcome.warning2: 该服务不收集项目的统计数据。 你可以看 [源代码|https://github.com/bakhirev/assayo].
§ page.common.words.title: 词汇统计
§ page.common.words.description: 最流行的词。 发生$1次.
§ page.common.commits.title: Количество Commits по дням
§ page.common.commits.description: ($1) 拥有最多 Commits 数的工作日.
§ page.common.commits.title2: $1 完成了 Commits: $2
§ page.common.filter.allUsers: 没关系
§ page.print.modal.title: 我们打印出来的是什么?
§ page.print.modal.page: 当前页面
§ page.print.modal.type: 当前部分
§ page.print.modal.all: 所有统计数字
§ page.print.modal.cancel: 取消
§ page.print.tableOfContents: 目录
§ page.print.title: Git仓库报告
§ page.print.sub_title: «$1»
§ page.print.description: 报告的数据是从历史记录中获得的 Commits.
§ page.team.author.title: 雇员统计数字
§ page.team.author.description1: 部分统计数字 (工作的速度，花费的钱等。.) 不考虑具有"助理"类型的员工，因为这不是项目中的永久角色。 他们的工作微不足道，可以忽略。.
§ page.team.author.description2: 默认排序是按任务和组数排序 (现任、被解雇、帮助雇员).
§ page.team.author.types: 工作类别
§ page.team.author.commits: Commits
§ page.team.author.commitsSmall: commits
§ page.team.author.tasks: 任务
§ page.team.author.tasksSmall: 任务
§ page.team.author.workedLosses: 有和没有commits的日子
§ page.team.author.worked: 工作
§ page.team.author.losses: 没有commits的日子
§ page.team.author.days: 天数
§ page.team.author.daysForTask: 每项任务的天数
§ page.team.author.scopes: 修改
§ page.team.author.moneyAll: 我拿到钱了
§ page.team.author.moneyWorked: 工作了
§ page.team.author.moneyLosses: 多付
§ page.team.hours.title: 每周每一天的工作分配
§ page.team.month.title: 项目工作日历
§ page.team.scope.title: 按模块划分的统计数字
§ page.team.scope.scope: 修改
§ page.team.scope.days: 工作天
§ page.team.scope.authorsDays: 人日
§ page.team.scope.tasks: 任务
§ page.team.scope.commits: Commits
§ page.team.scope.commitsSmall: commits
§ page.team.scope.types: 工作类别
§ page.team.scope.authors: 个人贡献
§ page.team.scope.cost: 成本
§ page.team.type.title: 按任务类型划分的统计信息
§ page.team.type.description: *个人贡献* 它是按数字计算的 Commits, 而不是修改的字符串或文件的体积。 因此，您还应该查看"文件分析"部分以评估更改的规模。
§ page.team.type.type: 工作类别
§ page.team.type.tasks: 任务
§ page.team.type.tasksSmall: 任务
§ page.team.type.days: 天数
§ page.team.type.daysSmall: 天数
§ page.team.type.authorsDays: 人日
§ page.team.type.commits: Commits
§ page.team.type.authors: 个人贡献
§ page.team.total.titleA: 工作范围
§ page.team.total.titleB: 成本
§ page.team.total.daysWorked.title: 人日
§ page.team.total.daysWorked.description: 只考虑制作它们的日子 Commits
§ page.team.total.commits.title: commits
§ page.team.total.commits.description: 删除的分支不算数
§ page.team.total.daysLosses.title: 没有的日子 commits
§ page.team.total.daysLosses.description: 所有的日子都是负数: 假期、周末、假期、休息日 Commits
§ page.team.total.employment.title: 工作/退出
§ page.team.total.employment.description: 如果员工在一个月内没有完成任何工作 Commits, 他被认为被解雇了
§ page.team.total.moneyAll.title: 普通
§ page.team.total.moneyAll.description: 工资费用总额
§ page.team.total.moneyWorked.title: 实际
§ page.team.total.moneyWorked.description: 实际工作天数乘以平均工资
§ page.team.total.moneyLosses.title: 可能多付
§ page.team.total.moneyLosses.description: 带薪工作日, 何时 Commits 没有
§ page.team.total.weekendPayment.title: 周末工作
§ page.team.total.weekendPayment.description: 周末工作多付总额
§ page.team.total.workSpeed.title: 每天的任务
§ page.team.total.workSpeed.description: 团队与当前员工的平均工作速度
§ page.team.total.moneySpeed.title: 每月
§ page.team.total.moneySpeed.description: 现职工作人员的预计薪金支付额，不包括税项和有关费用
§ page.team.total.description1: *人日* — 这是一个员工一个工作日的工作。 例如，在一个日历日，一个由三名员工组成的团队在三个工作日内发出大量的工作量.
§ page.team.total.description2: *旷工的日子* 只有工作日计算在 Commits 可以做到. 周末、公众假期及假期不包括在计算内.
§ page.team.total.description3: 卡片 *工作和退出* 显示经常参与工作的员工的实际组成。 此外，还有"助手—-这些是员工，通常是不同的专业，有时可以这样做 Commits 到项目.
§ page.team.total.description4: *多付* 只有工作日计算在 Commits 可以做到. 周末、公众假期和假期不包括在计算中. 这就是为什么多付+实际成本！=一般. 总费用包括周末、公众假期和假期的付款。
§ page.team.total.description5: *周末工作* 它是由系数x2计算从支付一个正常的一天。 上面显示的是多付（x1），因为在这种情况下，处理的事实并不有趣。 我们不是在看预算燃烧的速度。 我们正在考虑在提高工作速度时多付的款项.
§ page.team.tree.title: 项目树，考虑到选定的过滤器
§ page.team.tree.filters.author: 雇员
§ page.team.tree.filters.commits: 数量 Commits
§ page.team.tree.filters.help: 最低数量 Commits, 雇员在档案中所做的
§ page.team.tree.filters.all: 所有员工
§ page.team.tree.add: 谁加的
§ page.team.tree.change: 谁改变了它
§ page.team.tree.remove: 谁删除了它
§ page.team.tree.line: 线条
§ page.team.tree.lineAdd: 补充道
§ page.team.tree.lineRemove: 改变了
§ page.team.week.title: 按周划分的统计数字
§ page.team.week.date: 日期
§ page.team.week.numberTasks: 任务数量
§ page.team.week.people: 人数
§ page.team.week.line: 换线
§ page.team.week.days: 日起 Commits 而没有
§ page.team.week.lossesDetails: 谁不 Commits
§ page.team.week.add: 补充道
§ page.team.week.change: 改变了
§ page.team.week.remove: 已删除
§ page.team.week.hasCommits: 是 Commits
§ page.team.week.hasNotCommits: 不是这样的 Commits
§ page.team.week.days: 天数
§ page.team.week.tasks: 任务
§ page.team.pr.task: 任务
§ page.team.pr.tasks: 任务
§ page.team.pr.firstCommitTime: 第一个 Commits
§ page.team.pr.lastCommitTime: 最后一次
§ page.team.pr.workDays: 发展的日子
§ page.team.pr.delayDays: 等待输液的日子
§ page.team.pr.commits: Commits
§ page.team.pr.date: 注射日期
§ page.team.pr.mergeAuthor: 填写
§ page.team.pr.author: 雇员
§ page.team.pr.middleTimeRelease: 平均派递时间 (天数)
§ page.team.pr.work: 发展
§ page.team.pr.delay: 期望
§ page.team.pr.days: 天数
§ page.team.pr.oneTaskDays: 花在一项任务上的时间
§ page.team.pr.description1: *花在一项任务上的时间* 这是从第一个到最后一个的时间差 Commits 按任务划分. 如果之间有几天的休息时间也没关系 Commits 还是不是. 任何一个事实 Commits 增加时间.
§ page.team.pr.description2: *轮候时间* 这是最后一次之间的时间 Commits 通过输入代码. 它显示了实际的空闲等待的东西.
§ page.team.pr.description3: *为什么显示开发时间* 无需拆分为编码和代码审查? 然后，向业务显示代码的实际交付时间。 测试的期望，对审查的评论，DevOps问题和流程的其他不完善之处已经在这一时期制定.
§ page.team.pr.statByAuthors: 雇员统计数字
§ page.team.pr.longDelay: 长时间等待输液
§ page.team.tasks.task: 任务
§ page.team.tasks.author: 第一篇的作者 Commits
§ page.team.tasks.from: 第一个 Commits
§ page.team.tasks.to: 最后一次 Commits
§ page.team.tasks.daysInWork: 工作中的日子
§ page.team.tasks.commits: 数量 Commits
§ page.team.tasks.pr: 注射日期
§ page.team.tasks.prAuthor: 灌
§ page.team.tasks.prDelayDays: 等待输液的日子
§ page.team.tasks.comments: 评论
§ page.person.print.photo.title: 照片
§ page.person.print.photo.description: 拍照的地方
§ page.person.total.title: 主要特点
§ page.person.total.daysWorked.title: 工作天
§ page.person.total.daysWorked.description: 只考虑制作它们的日子 Commits
§ page.person.total.tasks.title: 任务
§ page.person.total.tasks.description: 如果 Commits 正确签名
§ page.person.character.title: 性格
§ page.person.achievement.title: 进展情况
§ page.person.achievement.positive: 积极
§ page.person.achievement.normal: 中立
§ page.person.achievement.negative: 负面
§ page.person.achievement.description: 员工取得的负面成绩越多，情况就越有可能非标准。 可能值得改变其操作模式，任务或报告。 你应该和他谈谈，看看有什么问题妨碍了他的工作.
§ page.person.gets.title: 被带走的木屐:
§ page.person.gets.description: «被带走的木屐» 在这种情况下，它意味着第一个离开 Commits 到"美丽"数字的问题.
§ page.person.business.days.title: 工作天
§ page.person.business.days.description: 只考虑制作它们的日子 Commits
§ page.person.business.tasks.title: 任务
§ page.person.business.tasks.description: 如果 Commits 正确签名
§ page.person.business.losses.title: 没有的日子 Commits
§ page.person.business.losses.description: 所有日子减去：假期，周末，假期，休息日 Commits
§ page.person.business.commits.title: Commits
§ page.person.business.commits.description: 删除的分支不算数
§ page.person.business.time.description: 从第一到最后的时间 Commits (包括非工作日)
§ page.person.business.time.title: 项目日:
§ page.person.business.time.dismissed: (被解雇)
§ page.person.business.time.staff: (不在团队中)
§ page.person.business.achievements: 进展情况
§ page.person.changes.title: 进展情况
§ page.person.changes.description: 
使用某些类型的格式，git将字符串标记为"已删除"和"已添加",
虽然事实上他们已经被"改变"。 因此，如果你已经做了很多重构,
git可以显示统计信息的少量变化，以及实际结果
将在"已删除"和"已添加"行中标记为跳转.
§ page.person.changes.description: 名单 Commits 以及那一天他们的变化数量:
§ page.person.commits.title: 名单 Commits:
§ page.person.money.title.total: 一直如此
§ page.person.money.title.middle: 平均成本
§ page.person.money.moneyAll.title: 收到
§ page.person.money.moneyAll.description: 工程项目的采购订单估计金额 (请参阅设置)
§ page.person.money.moneyWorked.title: 工作了
§ page.person.money.moneyWorked.description: 实际工作天数乘以平均po
§ page.person.money.moneyLosses.title: 可能多付
§ page.person.money.moneyLosses.description: 没有的日子 Commits 乘以平均po
§ page.person.money.tasks.title: 任务
§ page.person.money.tasks.description: 关闭任务的数量到一天的成本
§ page.person.money.commits.title: Commits
§ page.person.money.commits.description: 数量 Commits 到一个工作日的成本
§ page.person.speed.task: 平均一项任务是
§ page.person.speed.max: 每日最高速度
§ page.person.speed.days.title: 天数
§ page.person.speed.days.description: 这意味着如果 Commits 正确签名
§ page.person.speed.commits.title: Commits
§ page.person.speed.commits.description: 最大值和最小值的10％已被切断
§ page.person.speed.line.title: 代码行
§ page.person.speed.line.description: 最大值和最小值的10％已被切断
§ page.person.speed.tasks.title: 任务
§ page.person.speed.tasks.description: 任务可能没有完成，但它的工作应该是
§ page.person.speed.maxCommits.title: Commits
§ page.person.speed.maxCommits.description: 任务可能没有完成，但它的工作应该是
§ page.person.hours.title: 分布情况 Commits 在一周的每一天
§ page.person.week.date: 日期
§ page.person.week.tasks: 任务数量
§ page.person.week.workDays: 日起 Commits
§ page.person.week.taskInDay: 每天的任务
§ page.person.week.days: 天数
§ page.person.week.workDay: 平日
§ page.person.week.weekends: 周末
`;
