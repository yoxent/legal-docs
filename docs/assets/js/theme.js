(() => {
  const key = "theme-preference";
  const select = document.getElementById("themeSelect");
  if (!select) return;

  const isValid = (value) => value === "system" || value === "light" || value === "dark";

  const readPref = () => {
    try {
      const v = localStorage.getItem(key);
      return isValid(v) ? v : "system";
    } catch {
      return "system";
    }
  };

  const writePref = (value) => {
    try {
      localStorage.setItem(key, value);
    } catch {
      // ignore (storage blocked)
    }
  };

  const applyPref = (value) => {
    if (value === "light" || value === "dark") {
      document.documentElement.dataset.theme = value;
    } else {
      delete document.documentElement.dataset.theme;
    }
  };

  const pref = readPref();
  select.value = pref;
  applyPref(pref);

  select.addEventListener("change", () => {
    const v = isValid(select.value) ? select.value : "system";
    writePref(v);
    applyPref(v);
  });
})();
