        const playBtn = document.getElementById('play-btn');
        const ipDisplay = document.getElementById('ip-display');
        
        playBtn.addEventListener('click', function() {
            navigator.clipboard.writeText('mc.novatime.pp.ua')
                .then(() => {
                    ipDisplay.classList.add('show');
                    
                    setTimeout(() => {
                        ipDisplay.classList.remove('show');
                    }, 1500);
                })
                .catch(err => {
                    const tempInput = document.createElement('input');
                    tempInput.value = 'mc.novatime.pp.ua';
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                    
                    ipDisplay.classList.add('show');
                    setTimeout(() => {
                        ipDisplay.classList.remove('show');
                    }, 1500);
                });
        });
        
        const rulesLink = document.getElementById('rules-link');
        const launcherLink = document.getElementById('launcher-link');
        const donateNavLink = document.getElementById('donate-nav-link');
        
        function handleLinkClick(e, link) {
            e.preventDefault();
            link.classList.add('loading');
            
            setTimeout(() => {
                window.location.href = link.href;
            }, 800);
        }
        
        rulesLink.addEventListener('click', (e) => handleLinkClick(e, rulesLink));
        launcherLink.addEventListener('click', (e) => handleLinkClick(e, launcherLink));
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                document.querySelector('.server-title').classList.add('animate__pulse');
            }, 1000);
            
            const video = document.querySelector('.video-background');
            video.volume = 1.0;
        });
        
        const offerModal = document.getElementById('offer-modal');
        const donateModal = document.getElementById('donate-modal');
        const offerLink = document.getElementById('offer-link');
        const donateLink = document.getElementById('donate-link');
        const offerClose = document.getElementById('offer-close');
        const donateClose = document.getElementById('donate-close');
        
        function toggleModal(modal, show) {
            if (show) {
                modal.style.display = 'flex';
                setTimeout(() => {
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }, 10);
            } else {
                modal.classList.remove('active');
                setTimeout(() => {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }, 300);
            }
        }
        
        offerLink.addEventListener('click', (e) => {
            e.preventDefault();
            toggleModal(offerModal, true);
        });
        
        donateLink.addEventListener('click', (e) => {
            e.preventDefault();
            toggleModal(donateModal, true);
        });
        
        donateNavLink.addEventListener('click', (e) => {
            e.preventDefault();
            toggleModal(donateModal, true);
        });
        
        offerClose.addEventListener('click', () => {
            toggleModal(offerModal, false);
        });
        
        donateClose.addEventListener('click', () => {
            toggleModal(donateModal, false);
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === offerModal) {
                toggleModal(offerModal, false);
            }
            if (e.target === donateModal) {
                toggleModal(donateModal, false);
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                toggleModal(offerModal, false);
                toggleModal(donateModal, false);
            }
        });
        
        function preloadImages() {
            const images = [
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png',
                'images/elite.png',
                'images/legend.png',
                'images/knight.png',
                'images/hero.png',
                'images/master.png',
                'images/titan.png',
                'images/emperor.png',
                'images/phantom.png',
                'images/shadow.png',
                'images/mythical.png',
                'images/celestial.png',
                'images/monarch.png',
                'images/d-helper.png'
            ];
            
            images.forEach(img => {
                new Image().src = img;
            });
        }
        
        window.addEventListener('load', preloadImages);