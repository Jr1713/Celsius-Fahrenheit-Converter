document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const tempInput = document.getElementById('tempInput');
  const conversionType = document.getElementById('conversionType');
  const convertBtn = document.getElementById('convertBtn');
  const resultBox = document.getElementById('result');

  // Conversion functions
  function convertCtoF(celsius) {
    return celsius * (9/5) + 32;
  }
  function convertFtoC(fahrenheit) {
    return (fahrenheit - 32) * (5/9);
  }

  // Main handler
  function handleConvert() {
    const raw = tempInput.value.trim();
    if (raw === '') {
      resultBox.textContent = '⚠️ Please enter a number.';
      return;
    }

    const num = Number(raw);
    if (Number.isNaN(num)) {
      resultBox.textContent = '⚠️ Invalid number. Remove letters or symbols.';
      return;
    }

    const mode = conversionType.value;
    let outputText = '';
    if (mode === 'CtoF') {
      const f = convertCtoF(num);
      outputText = `Result: ${f.toFixed(2)} °F`;
    } else {
      const c = convertFtoC(num);
      outputText = `Result: ${c.toFixed(2)} °C`;
    }

    resultBox.textContent = outputText;
    console.debug('Converted', { input: num, mode, output: outputText });
  }

  // Events
  convertBtn.addEventListener('click', handleConvert);
  tempInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleConvert();
  });

  // Initialization log
  console.info('Temperature Converter initialized');
});
