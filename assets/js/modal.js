/**
 * Modal System for Resume & Certificate Viewers
 */
document.addEventListener('DOMContentLoaded', () => {
  // Modal DOM elements
  const resumeModal = document.getElementById('resumeModal');
  const certModal = document.getElementById('certModal');
  const projectModal = document.getElementById('projectModal');

  // Resume Modal Triggers
  document.querySelectorAll('[data-action="open-resume"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openResumeModal();
    });
  });

  // Certificate Modal Triggers
  document.querySelectorAll('[data-action="view-cert"]').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const title = card.getAttribute('data-cert-title');
      const issuer = card.getAttribute('data-cert-issuer');
      const image = card.getAttribute('data-cert-image');
      const date = card.getAttribute('data-cert-date');
      const credentialId = card.getAttribute('data-cert-id');
      const desc = card.getAttribute('data-cert-desc');
      openCertModal({ title, issuer, image, date, credentialId, desc });
    });
  });

  // Project Modal Triggers
  document.querySelectorAll('[data-action="view-project"]').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const title = card.getAttribute('data-project-title');
      const category = card.getAttribute('data-project-category');
      const date = card.getAttribute('data-project-date');
      const desc = card.getAttribute('data-project-desc');
      const highlights = card.getAttribute('data-project-highlights');
      const stack = card.getAttribute('data-project-stack');
      openProjectModal({ title, category, date, desc, highlights, stack });
    });
  });

  // Generic Close Handlers
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  document.querySelectorAll('[data-action="close-modal"]').forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  function openResumeModal() {
    if (!resumeModal) return;
    const iframe = resumeModal.querySelector('#resumePdfViewer');
    if (iframe && !iframe.getAttribute('src')) {
      iframe.setAttribute('src', 'assets/docs/sharath-resume.pdf#toolbar=1&navpanes=0');
    }
    resumeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function openCertModal(data) {
    if (!certModal) return;
    const imgEl = certModal.querySelector('#certModalImg');
    const titleEl = certModal.querySelector('#certModalTitle');
    const issuerEl = certModal.querySelector('#certModalIssuer');
    const dateEl = certModal.querySelector('#certModalDate');
    const idEl = certModal.querySelector('#certModalId');
    const descEl = certModal.querySelector('#certModalDesc');
    const downloadBtn = certModal.querySelector('#certModalDownload');

    if (imgEl && data.image) imgEl.src = data.image;
    if (titleEl) titleEl.textContent = data.title || 'Certificate of Achievement';
    if (issuerEl) issuerEl.textContent = data.issuer || 'Credential Issuer';
    if (dateEl) dateEl.textContent = data.date || '2025';
    if (idEl) idEl.textContent = data.credentialId || 'VERIFIED-CREDENTIAL';
    if (descEl) descEl.textContent = data.desc || '';
    if (downloadBtn && data.image) {
      downloadBtn.setAttribute('href', data.image);
      downloadBtn.setAttribute('download', (data.title || 'certificate').replace(/\s+/g, '-').toLowerCase());
    }

    certModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function openProjectModal(data) {
    if (!projectModal) return;
    const titleEl = projectModal.querySelector('#projModalTitle');
    const catEl = projectModal.querySelector('#projModalCategory');
    const dateEl = projectModal.querySelector('#projModalDate');
    const descEl = projectModal.querySelector('#projModalDesc');
    const stackEl = projectModal.querySelector('#projModalStack');
    const highlightsEl = projectModal.querySelector('#projModalHighlights');

    if (titleEl) titleEl.textContent = data.title;
    if (catEl) catEl.textContent = data.category;
    if (dateEl) dateEl.textContent = data.date;
    if (descEl) descEl.textContent = data.desc;
    
    if (stackEl && data.stack) {
      const skills = data.stack.split(',');
      stackEl.innerHTML = skills.map(s => `<span class="tech-tag">${s.trim()}</span>`).join('');
    }

    if (highlightsEl && data.highlights) {
      const points = data.highlights.split('|');
      highlightsEl.innerHTML = points.map(p => `<li><i class="fas fa-check-circle" style="color:var(--success);margin-right:8px;"></i>${p.trim()}</li>`).join('');
    }

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  window.closeAllModals = function() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    document.body.style.overflow = '';
  };
});
