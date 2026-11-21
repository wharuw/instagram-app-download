(() => {
  const config = window.APP_CONFIG;
  const error = document.getElementById('config-error');
  if (!config || typeof config.appName !== 'string' || !config.appName.trim() ||
      !/^[A-Za-z][A-Za-z0-9_]*(?:\.[A-Za-z][A-Za-z0-9_]*)+$/.test(config.androidPackageName || '') ||
      !/^[1-9]\d{5,14}$/.test(config.iosAppId || '')) {
    error.hidden = false;
    return;
  }
  const urls = {
    android: 'https://play.google.com/store/apps/details?id=' + encodeURIComponent(config.androidPackageName),
    ios: 'https://apps.apple.com/app/id' + config.iosAppId
  };
  document.getElementById('app-title').textContent = config.appName;
  document.title = config.appName + ' 다운로드';
  document.getElementById('year').textContent = new Date().getFullYear();
  for (const platform of ['android', 'ios']) document.getElementById(platform + '-link').href = urls[platform];
  const ua = navigator.userAgent;
  const ios = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1);
  const preferred = /Android/i.test(ua) ? 'android' : ios ? 'ios' : null;
  const downloads = document.getElementById('downloads');
  if (preferred) {
    downloads.prepend(document.getElementById(preferred));
    document.getElementById(preferred === 'ios' ? 'android' : 'ios').classList.add('secondary');
  }
  downloads.hidden = false;
  const status = document.getElementById('copy-status');
  const manual = document.getElementById('manual-copy');
  const field = document.getElementById('store-url');
  for (const button of document.querySelectorAll('[data-platform]')) {
    button.addEventListener('click', async () => {
      const url = urls[button.dataset.platform];
      field.value = url;
      manual.hidden = false;
      status.textContent = '';
      try {
        if (!navigator.clipboard?.writeText) throw Error('Clipboard unavailable');
        await navigator.clipboard.writeText(url);
        status.textContent = '다운로드 주소를 복사했습니다. 브라우저 주소창에 붙여넣으세요.';
      } catch {
        status.textContent = '자동 복사를 사용할 수 없습니다. 아래 주소를 직접 복사하세요.';
        field.focus();
        field.select();
        field.setSelectionRange(0, field.value.length);
      }
    });
  }
})();
