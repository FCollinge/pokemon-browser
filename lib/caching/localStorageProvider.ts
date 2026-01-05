export function localStorageProvider() {
  const key = 'pokemon-browser-cache';
  // Only use localStorage in the browser
  if (typeof window === "undefined" || typeof localStorage === "undefined") {
    return new Map<string, any>();
  }
  const map = new Map<string, any>(JSON.parse(localStorage.getItem(key) || '[]'));
  window.addEventListener('beforeunload', () => {
    localStorage.setItem(key, JSON.stringify(Array.from(map.entries())));
  });
  return map;
}