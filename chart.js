(() => {
  const counts = {
    all: {male: [1198, 2691], female: [557, 1835]},
    A: {male: [512, 825], female: [89, 108]}
  };
  const refresh = () => {
    const sample = document.querySelector('input[name="sample"]:checked').value;
    for (const [group, [admitted, applicants]] of Object.entries(counts[sample])) {
      const rate = (100 * admitted / applicants).toFixed(1) + '%';
      document.getElementById(group + '-rate').textContent = rate;
      document.getElementById(group + '-bar').style.width = rate;
      document.getElementById(group + '-count').textContent =
        admitted.toLocaleString('en-US') + ' of ' + applicants.toLocaleString('en-US') + ' admitted';
    }
  };
  document.querySelectorAll('input[name="sample"]').forEach(input => input.addEventListener('change', refresh));
  refresh();
})();
