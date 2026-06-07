// --- Mouse Tracking Flashlight Effect ---
document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
  document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
});

const terminalTemplates = {
  'huggingface-cli': `
        <div class="cli-white"><span class="cli-dim">(venv) elvis@macbook Doria %</span> doria install huggingface-cli</div>
        <div class="cli-cyan">[*] Doria is scanning 'huggingface-cli' before install...</div>
        <div class="cli-cyan">[*] Fetching package metadata...</div>
        <div class="cli-cyan">[*] Running static analysis (AST scan)...</div>
        <div class="cli-pink">[*] Running ML threat intelligence...</div>
        <br>
        <div class="cli-cyan">----------------------------------------</div>
        <div class="cli-white">DORIA THREAT REPORT</div>
        <div class="cli-cyan">----------------------------------------</div>
        <div class="cli-white">Package:     huggingface-cli</div>
        <div class="cli-red">Decision:    THREAT DETECTED</div>
        <div class="cli-red">Action:      BLOCK</div>
        <br>
        <div class="cli-white">ML Model 1 (Behavior):   3.0% threat probability  <span class="cli-green">[CLEAN]</span></div>
        <div class="cli-white">ML Model 2 (NLP/Name):  99.8% threat probability  <span class="cli-red">[TRIGGERED]</span></div>
        <div class="cli-white">AST Findings:           Empty payload detected</div>
        <div class="cli-cyan">----------------------------------------</div>
        <br>
        <div class="cli-red">[!] BLOCKED: Doria has blocked the installation of 'huggingface-cli'.</div>
        <div class="cli-white">&nbsp;&nbsp;&nbsp;&nbsp;Reason: Known LLM hallucination pattern (Slopsquat).</div>
        <div class="cli-white">&nbsp;&nbsp;&nbsp;&nbsp;30,000+ malicious downloads recorded by researchers.</div>
        <br>
        <div class="cli-green">&nbsp;&nbsp;&nbsp;&nbsp;💡 Did you mean 'huggingface_hub[cli]'?</div>
      `,
  'huggingface_hub': `
        <div class="cli-white"><span class="cli-dim">(venv) elvis@macbook Doria %</span> doria install huggingface_hub[cli]</div>
        <div class="cli-cyan">[*] Doria is scanning 'huggingface_hub' before install...</div>
        <div class="cli-cyan">[*] Fetching package metadata...</div>
        <div class="cli-cyan">[*] Running static analysis (AST scan)...</div>
        <div class="cli-pink">[*] Running ML threat intelligence...</div>
        <br>
        <div class="cli-cyan">----------------------------------------</div>
        <div class="cli-white">DORIA THREAT REPORT</div>
        <div class="cli-cyan">----------------------------------------</div>
        <div class="cli-white">Package:     huggingface_hub</div>
        <div class="cli-green">Decision:    SAFE</div>
        <div class="cli-green">Action:      ALLOW</div>
        <br>
        <div class="cli-white">ML Model 1 (Behavior):   0.4% threat probability  <span class="cli-green">[CLEAN]</span></div>
        <div class="cli-white">ML Model 2 (NLP/Name):   0.0% threat probability  <span class="cli-green">[CLEAN]</span></div>
        <div class="cli-white">AST Findings:           0 issue(s) detected</div>
        <div class="cli-cyan">----------------------------------------</div>
        <br>
        <div class="cli-green">[+] Package is safe. Proceeding with install...</div>
        <br>
        <div class="cli-white">Installing collected packages: fsspec, pyyaml, typing-extensions, filelock...</div>
        <div class="cli-green">Successfully installed huggingface-hub-0.23.0</div>
      `
};

function triggerScanSimulation(key) {
  document.querySelectorAll('.terminal-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('tab-' + key).classList.add('active');

  const body = document.getElementById('term-body');
  body.innerHTML = '<div class="cli-dim">Initializing engine...</div>';

  setTimeout(() => {
    body.innerHTML = terminalTemplates[key];
  }, 350);
}

window.addEventListener('DOMContentLoaded', () => {
  triggerScanSimulation('huggingface-cli');
});
