 const senhaHash = "706cd158340e53b830554bf40fae9126b5647066807498d58dc3908fd66b3824";
    async function verificarSenha() {
      const input = prompt("Digite a senha para acessar o Sistema:");
      if (!input) {
        alert("Senha necessária!");
        return;
      }
      const enc = new TextEncoder();
      const data = enc.encode(input);
      const hashBuf = await crypto.subtle.digest('SHA-256', data);
      const hashArr = Array.from(new Uint8Array(hashBuf));
      const hashHex = hashArr.map(b=>b.toString(16).padStart(2,'0')).join('');
      if (hashHex === senhaHash) {
        document.body.style.display = 'flex';
      } else {
        alert("Senha incorreta! Acesso negado.");
document.write("<body class='acesso-negado' style='background-color: #000000; text-align: center;'><h1 id='negado' style='color: #e74c3c;font-size: 3rem;font-family: \"Courier New\", monospace;text-shadow: 0 0 5px #e74c3c;letter-spacing: 2px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);'>Acesso negado.</h1></body>");    }
      }
        
document.addEventListener('DOMContentLoaded', verificarSenha);