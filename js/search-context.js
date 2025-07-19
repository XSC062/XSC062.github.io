// 文件路径: /scripts/01-search-context.js
const cheerio = require('cheerio');

module.exports = function(hexo) {
  hexo.extend.filter.register('after_post_render', function(data) {
    // 添加调试日志
    hexo.log.debug(`Processing post: ${data.title}`);
    
    if (data.search_context) return data;
    
    try {
      const $ = cheerio.load(data.content, { decodeEntities: false });
      const text = $.text();
      
      // 创建包含关键词上下文的索引
      data.search_context = {};
      
      // 提取关键词周围的上下文片段（优化版）
      const wordPattern = /\b[\w']+\b/g; // 更好的单词匹配
      let match;
      
      while ((match = wordPattern.exec(text)) !== null) {
        const word = match[0].toLowerCase();
        if (word.length < 3) continue; // 忽略短词
        
        if (!data.search_context[word]) {
          data.search_context[word] = [];
        }
        
        const index = match.index;
        // 提取关键词前后各50个字符作为上下文
        const start = Math.max(0, index - 50);
        const end = Math.min(text.length, index + word.length + 50);
        
        let snippet = text.substring(start, end);
        
        // 确保片段以完整单词开始/结束
        if (start > 0) {
          snippet = '...' + snippet;
        }
        if (end < text.length) {
          snippet = snippet + '...';
        }
        
        // 保留最多3个片段
        if (data.search_context[word].length < 3) {
          data.search_context[word].push(snippet.replace(/\s+/g, ' '));
        }
      }
      
      hexo.log.info(`Generated search context for: ${data.title}`);
    } catch (e) {
      hexo.log.error(`Error processing search context for ${data.title}:`, e);
    }
    
    return data;
  });
};