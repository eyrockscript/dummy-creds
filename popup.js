class DummyCredentialsGenerator {
    constructor() {
        this.usernames = [
            'testuser', 'demouser', 'sampleuser', 'usuario', 'prueba',
            'developer', 'admin', 'guest', 'temp', 'test',
            'demo', 'example', 'sample', 'dummy', 'fake'
        ];
        
        this.adjectives = [
            'cool', 'smart', 'fast', 'super', 'mega', 'ultra',
            'pro', 'elite', 'master', 'ninja', 'rocket', 'turbo',
            'digital', 'cyber', 'tech', 'web', 'net', 'online'
        ];
        
        this.domains = [
            'example.com', 'test.com', 'demo.org', 'sample.net',
            'fake.com', 'dummy.org', 'testing.com', 'tempmail.com',
            'mailinator.com', '10minutemail.com'
        ];
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.generateCredentials();
        this.updatePasswordLengthDisplay();
    }
    
    bindEvents() {
        document.getElementById('generate-btn').addEventListener('click', () => {
            this.generateCredentials();
        });
        
        document.getElementById('copy-all-btn').addEventListener('click', () => {
            this.copyAllCredentials();
        });
        
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.target.getAttribute('data-target');
                this.copyToClipboard(target);
            });
        });
        
        document.getElementById('password-length').addEventListener('input', () => {
            this.updatePasswordLengthDisplay();
            this.generatePassword();
        });
        
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.generatePassword();
            });
        });
    }
    
    generateCredentials() {
        this.generateUsername();
        this.generateEmail();
        this.generatePassword();
    }
    
    generateUsername() {
        const baseUsername = this.getRandomElement(this.usernames);
        const adjective = this.getRandomElement(this.adjectives);
        const number = Math.floor(Math.random() * 9999) + 1;
        
        const usernameVariations = [
            `${baseUsername}${number}`,
            `${adjective}${baseUsername}`,
            `${baseUsername}_${adjective}`,
            `${adjective}_${baseUsername}_${number}`,
            `${baseUsername}${adjective}${number}`
        ];
        
        const username = this.getRandomElement(usernameVariations);
        document.getElementById('username').value = username;
    }
    
    generateEmail() {
        const username = document.getElementById('username').value;
        const domain = this.getRandomElement(this.domains);
        const email = `${username}@${domain}`;
        document.getElementById('email').value = email;
    }
    
    generatePassword() {
        const length = parseInt(document.getElementById('password-length').value);
        const includeUppercase = document.getElementById('include-uppercase').checked;
        const includeLowercase = document.getElementById('include-lowercase').checked;
        const includeNumbers = document.getElementById('include-numbers').checked;
        const includeSymbols = document.getElementById('include-symbols').checked;
        
        let charset = '';
        if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (includeNumbers) charset += '0123456789';
        if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
        
        if (charset === '') {
            charset = 'abcdefghijklmnopqrstuvwxyz';
            document.getElementById('include-lowercase').checked = true;
        }
        
        let password = '';
        
        if (includeUppercase) password += this.getRandomChar('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        if (includeLowercase) password += this.getRandomChar('abcdefghijklmnopqrstuvwxyz');
        if (includeNumbers) password += this.getRandomChar('0123456789');
        if (includeSymbols) password += this.getRandomChar('!@#$%^&*()_+-=[]{}|;:,.<>?');
        
        for (let i = password.length; i < length; i++) {
            password += this.getRandomChar(charset);
        }
        
        password = this.shuffleString(password);
        document.getElementById('password').value = password;
    }
    
    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    
    getRandomChar(charset) {
        return charset[Math.floor(Math.random() * charset.length)];
    }
    
    shuffleString(str) {
        return str.split('').sort(() => Math.random() - 0.5).join('');
    }
    
    updatePasswordLengthDisplay() {
        const length = document.getElementById('password-length').value;
        document.getElementById('length-value').textContent = length;
    }
    
    async copyToClipboard(targetId) {
        const element = document.getElementById(targetId);
        const text = element.value;
        
        try {
            await navigator.clipboard.writeText(text);
            this.showCopyFeedback(targetId);
        } catch (err) {
            element.select();
            document.execCommand('copy');
            this.showCopyFeedback(targetId);
        }
    }
    
    async copyAllCredentials() {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        const allCredentials = `Usuario: ${username}\nEmail: ${email}\nContraseña: ${password}`;
        
        try {
            await navigator.clipboard.writeText(allCredentials);
            this.showCopyFeedback('copy-all-btn');
        } catch (err) {
            const textarea = document.createElement('textarea');
            textarea.value = allCredentials;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            this.showCopyFeedback('copy-all-btn');
        }
    }
    
    showCopyFeedback(elementId) {
        const element = document.getElementById(elementId) || 
                       document.querySelector(`[data-target="${elementId}"]`);
        
        const originalText = element.textContent || element.value;
        const isButton = element.tagName === 'BUTTON';
        
        if (isButton) {
            element.textContent = '✓';
            element.style.backgroundColor = '#4CAF50';
        } else {
            element.style.backgroundColor = '#e8f5e8';
        }
        
        setTimeout(() => {
            if (isButton) {
                element.textContent = originalText === '✓' ? '📋' : originalText;
                element.style.backgroundColor = '';
            } else {
                element.style.backgroundColor = '';
            }
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DummyCredentialsGenerator();
});