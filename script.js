
document.addEventListener('DOMContentLoaded', function() {
    const CONFIG = {
        ADMIN_PASSWORD: "gabriel123", 
        BACKUP_INTERVAL: 5 
    };

  
    const adminModal = document.getElementById('adminModal');
    const adminAccessBtn = document.getElementById('adminAccessBtn');
    const closeModal = document.querySelector('.close-modal');
    const loginSection = document.getElementById('loginSection');
    const messagesSection = document.getElementById('messagesSection');
    const adminPassword = document.getElementById('adminPassword');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const exportBtn = document.getElementById('exportBtn');
    const messagesList = document.getElementById('messagesList');
    const form = document.querySelector('.form');


   
    adminAccessBtn?.addEventListener('click', () => {
        adminModal.style.display = 'block';
        adminPassword.focus();
    });

  
    closeModal?.addEventListener('click', () => {
        adminModal.style.display = 'none';
    });
/ Login
    loginBtn?.addEventListener('click', () => {
        if (adminPassword.value === CONFIG.ADMIN_PASSWORD) {
            loginSection.style.display = 'none';
            messagesSection.style.display = 'block';
            loadMessages();
        } else {
            showNotification('Senha incorreta!', 'error');
        }
    });

   
    logoutBtn?.addEventListener('click', () => {
        messagesSection.style.display = 'none';
        loginSection.style.display = 'block';
        adminPassword.value = '';
        adminModal.style.display = 'none';
    });

   
    exportBtn?.addEventListener('click', () => {
        autoBackup();
        showNotification('Backup exportado com sucesso!', 'success');
    });


    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
           const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),  
            project: formData.get('project'),
            message: formData.get('message'),
            timestamp: new Date().getTime()
    };

           
            if (!data.name || !data.phone || !data.message) {
                showNotification('Preencha todos os campos obrigatórios!', 'error');
                return;
            }

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;

           
            setTimeout(() => {
                if (saveMessage(data)) {
                    showNotification('Mensagem enviada com sucesso!', 'success');
                    form.reset();
                } else {
                    showNotification('Erro ao enviar mensagem. Tente novamente.', 'error');
                }
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }



    function showNotification(message, type = 'info') {
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('toggleCertificates');
  const wrapper = document.getElementById('certificatesWrapper');

  if (toggleBtn && wrapper) {
    toggleBtn.addEventListener('click', function() {
      const isOpen = wrapper.classList.toggle('open');

      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

   
    });
  }
});


console.log('Sistema de mensagens carregado!');
