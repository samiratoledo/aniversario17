function copyPix() {
      const key = document.querySelector('.pix .key').innerText;
      navigator.clipboard.writeText(key).then(() => {
        const btn = document.querySelector('.pix button');
        const original = btn.innerText;
        btn.innerText = 'Copiado!';
        setTimeout(() => { btn.innerText = original; }, 1800);
      });
    }