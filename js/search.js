document.addEventListener('DOMContentLoaded', () => {
  const searchModal = document.getElementById('search-box');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  // 存储所有文章数据
  let allPosts = [];
  
  // 预加载搜索数据
  fetch('/search.xml')
    .then(res => res.text())
    .then(xml => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xml, 'text/xml');
      const items = xmlDoc.querySelectorAll('entry');
      
      allPosts = Array.from(items).map(item => {
        return {
          title: item.querySelector('title').textContent,
          link: item.querySelector('url').textContent,
          content: item.querySelector('content').textContent,
          context: JSON.parse(item.querySelector('search_context').textContent || '{}')
        };
      });
    });
  
  // 打开搜索弹窗
  document.querySelector('#search-icon').addEventListener('click', () => {
    searchModal.style.display = 'block';
    searchInput.focus();
  });
  
  // 关闭弹窗
  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) searchModal.style.display = 'none';
  });
  
  // 搜索逻辑
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      searchResults.innerHTML = '';
      return;
    }
    
    const results = allPosts.filter(post => {
      return (
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        Object.keys(post.content).some(key => key.includes(query))
      );
    });
    
    displayResults(results, query);
  });
  
  function displayResults(results, query) {
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="no-results">没有找到相关结果……换个模糊点儿的关键词试试？</div>';
      return;
    }
    
    let html = '';
    results.forEach(post => {
      // 查找最佳匹配片段
      const bestSnippet = findBestSnippet(post, query);
      
      html += `
        <div class="search-result">
          <a href="${post.link}" class="result-title">${highlightText(post.title, query)}</a>
          <div class="result-snippet">${bestSnippet}</div>
        </div>
      `;
    });
    
    searchResults.innerHTML = html;
  }
  
  function findBestSnippet(post, query) {
    // 查找包含完整查询词的片段
    if (post.context[query]) {
      return highlightText(post.context[query][0], query);
    }
    
    // 查找包含部分查询词的片段
    const queryWords = query.split(/\s+/);
    for (const word of queryWords) {
      if (post.context[word]) {
        return highlightText(post.context[word][0], query);
      }
    }
    
    // 默认返回文章开头片段
    return highlightText(post.content.substring(0, 150) + '...', query);
  }
  
  function highlightText(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }
  
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
});