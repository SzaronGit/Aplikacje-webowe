function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.querySelector(".scrollup").style.display = "block";
    } else {
        document.querySelector(".scrollup").style.display = "none";
    }
}



//zawijanie
const hamburger = document.querySelector(".mobilenav");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});




// CLOCK
const clockEl = document.querySelector('.zegar');
function updateClock(){
    const now = new Date();
    const hh = String(now.getHours()).padStart(2,'0');
    const mm = String(now.getMinutes()).padStart(2,'0');
    const ss = String(now.getSeconds()).padStart(2,'0');
    if(clockEl) clockEl.textContent = `${hh}:${mm}:${ss}`;
}
updateClock();
setInterval(updateClock, 1000);


// CONTACT FORM: validation & submit handling
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');
if(form){
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.email.value.trim();
        const message = form.message.value.trim();
        const topic = form.topic.value;

        // simple validation
        if(!email || !email.includes('@') || !/\.[a-z]{2,}$/i.test(email)) {
            feedback.textContent = 'Proszę podać poprawny adres e-mail.';
            feedback.style.color = 'crimson';
            return;
        }
        if(!message || message.length < 5) {
            feedback.textContent = 'Wiadomość jest za krótka.';
            feedback.style.color = 'crimson';
            return;
        }

        // emulate successful send, save to localStorage as "sent"
        const sent = JSON.parse(localStorage.getItem('sentMessages') || '[]');
        sent.push({ email, topic, message, date: new Date().toISOString() });
        localStorage.setItem('sentMessages', JSON.stringify(sent));

        feedback.textContent = 'Dziękujemy — wiadomość została zapisana!';
        feedback.style.color = 'green';
        form.reset();
    });

    const clearBtn = document.getElementById('clear-btn');
    if(clearBtn) clearBtn.addEventListener('click', () => {
        form.reset();
        feedback.textContent = '';
    });
}



window.addEventListener('scroll', function() {
    const sidebar = document.querySelector("aside");
    const footer = document.querySelector("footer");
    const article = document.querySelector("article");

    const sidebarTop = sidebar.offsetTop;
    const footerTop = footer.offsetTop;

    const sidebarHeight = sidebar.offsetHeight;
    const scrollY = window.scrollY;

    if (scrollY > 253 && scrollY + sidebarHeight < footerTop) {
        sidebar.style.position = 'fixed';
        sidebar.style.top = '0';
        article.style.marginLeft = sidebar.offsetWidth + 20 +'px';
    }

    else if (scrollY + sidebarHeight >= footerTop) {
        sidebar.style.position = 'absolute';
        sidebar.style.top = (footerTop - sidebarHeight) + 'px';
    }
    else {
        sidebar.style.position = 'static';
        article.style.marginLeft = '20px'
    }

});

