async function fetchJobs() {
  const res = await fetch('jobs.json');
  const jobs = await res.json();
  const list = document.getElementById('job-list');
  list.innerHTML = '';
  if (jobs.length === 0) {
    list.innerHTML = '<p>등록된 채용공고가 없습니다.</p>';
    return;
  }
  jobs.forEach(job => {
    const div = document.createElement('div');
    div.className = 'job-item';
    div.innerHTML = `<span class=\"job-title\">${job.title}</span> <span class=\"job-company\">${job.company}</span> <a class=\"job-link\" href=\"${job.url}\" target=\"_blank\">공고보기</a>`;
    list.appendChild(div);
  });
}
window.onload = fetchJobs;
