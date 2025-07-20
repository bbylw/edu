# 海外高等教育风险识别与院校甄别权威指南

这是一个开源的静态网页项目，旨在帮助计划出国留学的学生、家长及教育工作者识别海外高等教育中存在的风险，特别是"文凭工厂"（Diploma Mill）和各类资质存疑的院校。

## ✨ 项目特色

- 📊 **分级警示系统**：三级风险分类，从黑名单到灰色地带
- 🔍 **智能筛选**：支持按国家、风险等级快速筛选
- 📱 **响应式设计**：完美适配桌面和移动设备
- 🚀 **快速加载**：优化的静态页面，加载速度极快
- ⌨️ **键盘友好**：支持键盘导航和快捷键操作

## 🎯 核心功能

- **风险院校数据库**：收录500+已识别的风险院校
- **五步验证法**：系统的尽职调查方案
- **官方资源链接**：直达各国教育部认证网站
- **案例分析**：深度解析典型教育欺诈案例

## 🚀 快速开始

### 本地开发

```bash
# 克隆项目
git clone https://github.com/bbylw/edu.git
cd edu

# 启动本地服务器（需要Python）
npm run dev
# 或者直接使用Python
python -m http.server 3000
```

### 部署到 Cloudflare Pages

1. **Fork 本项目**到你的 GitHub 账户
2. 登录 [Cloudflare Pages](https://pages.cloudflare.com/)
3. 点击 **Create a project** -> **Connect to Git**
4. 选择你 Fork 的仓库
5. 配置设置：
   - **Framework preset**: None
   - **Build command**: 留空
   - **Build output directory**: 留空
6. 点击 **Save and Deploy**

几分钟后，你的网站就会在 `https://your-project.pages.dev` 上线！

## 📁 项目结构

```
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # 交互功能（精简版）
├── package.json        # 项目配置
├── .gitignore          # Git忽略文件
└── README.md           # 项目说明
```

## 🛠️ 技术栈

- **HTML5**: 语义化标记
- **CSS3**: 现代样式和响应式设计
- **Vanilla JavaScript**: 轻量级交互功能
- **Cloudflare Pages**: 静态网站托管

## 📊 数据来源

本指南的数据来源于：
- 中国教育部官方公告
- 各国教育监管机构数据库
- 权威媒体调查报道
- 公开的法律文件和判决

## 🤝 如何贡献

欢迎贡献更新和改进！

1. Fork 本项目
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

### 贡献指南

- 添加新的风险院校时，请提供可靠的信息来源
- 确保所有链接都是有效的
- 遵循现有的代码风格和结构
- 测试你的更改在不同设备上的显示效果

## 📝 免责声明

本指南所有信息均来自公开渠道，仅供参考，不构成法律或教育建议。在做出任何重大教育决策之前，请务必通过本指南中提到的官方权威机构进行最终核实。

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🔗 相关链接

- [中国教育部教育涉外监管信息网](http://jsj.moe.gov.cn/)
- [中国留学服务中心](http://www.cscse.edu.cn/)
- [美国教育部](https://www.ed.gov/)
- [英国学生办公室](https://www.officeforstudents.org.uk/)
- [澳大利亚TEQSA](https://www.teqsa.gov.au/)

## 📞 联系我们

如果你发现任何错误或有改进建议，请：
- 提交 [Issue](https://github.com/bbylw/edu/issues)
- 发送 Pull Request
- 联系项目维护者

---

**⚠️ 重要提醒**: 在选择海外院校时，请务必通过官方渠道进行验证，不要仅依赖单一信息源。
