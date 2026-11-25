// ==========================================
//  LINHA DO TEMPO — Interações Retrô
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- 1. Animação de entrada dos eventos ---------- */
    const eventos = document.querySelectorAll('.event');
  
    const observar = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
          observar.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.2 });
  
    eventos.forEach((ev) => observar.observe(ev));
  
    /* ---------- 2. Efeito de "máquina de escrever" nos textos ---------- */
    const textos = document.querySelectorAll('.card-text');
  
    const typeObserver = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          const el = entrada.target;
          const textoOriginal = el.textContent.trim();
          el.textContent = '';
          let i = 0;
  
          const digitar = () => {
            if (i < textoOriginal.length) {
              el.textContent += textoOriginal.charAt(i);
              i++;
              setTimeout(digitar, 18);
            }
          };
          digitar();
          typeObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
  
    textos.forEach((t) => typeObserver.observe(t));
  
    /* ---------- 3. Botão "voltar ao topo" ---------- */
    const botaoTopo = document.createElement('button');
    botaoTopo.textContent = '↑';
    botaoTopo.setAttribute('aria-label', 'Voltar ao topo');
    botaoTopo.classList.add('btn-topo');
    document.body.appendChild(botaoTopo);
  
    // estilos via JS (para não poluir o CSS)
    Object.assign(botaoTopo.style, {
      position: 'fixed',
      bottom: '28px',
      right: '28px',
      width: '54px',
      height: '54px',
      borderRadius: '50%',
      border: '2px solid #c8a04a',
      background: '#1a1410',
      color: '#c8a04a',
      fontSize: '1.5rem',
      cursor: 'pointer',
      opacity: '0',
      pointerEvents: 'none',
      transition: 'all .4s ease',
      zIndex: '100',
      fontFamily: 'Courier Prime, monospace',
      boxShadow: '0 0 20px rgba(200,160,74,.4)'
    });
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        botaoTopo.style.opacity = '1';
        botaoTopo.style.pointerEvents = 'auto';
      } else {
        botaoTopo.style.opacity = '0';
        botaoTopo.style.pointerEvents = 'none';
      }
    });
  
    botaoTopo.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    /* ---------- 4. Efeito de "fita cassete" ao passar o mouse ---------- */
    document.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.style.filter = 'sepia(0.15) contrast(1.05)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.filter = 'none';
      });
    });
  
    /* ---------- 5. Contador regressivo das idades (extra) ---------- */
    const idades = [18, 25, 30, 40, 50];
    const dots = document.querySelectorAll('.event-dot');
  
    dots.forEach((dot, index) => {
      dot.title = `Capítulo: ${idades[index]} anos`;
    });
  
    /* ---------- 6. Mensagem no console (easter egg) ---------- */
    console.log('%c🎞️ Linha do Tempo carregada com sucesso!',
      'background:#1a1410; color:#c8a04a; padding:8px 16px; border-radius:4px; font-family:monospace;');
    console.log('%c"Toda vida merece ser contada como um clássico."',
      'color:#7a5230; font-style:italic; font-family:Georgia;');
  
  });