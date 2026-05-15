const btnLogin = document.getElementById("btn-login");
if (btnLogin) {
    btnLogin.addEventListener("click", () => {
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value;
        const erro  = document.getElementById("msg-erro");
        if (email === "" || !email.includes("@")) {
            erro.textContent = "Digite um e-mail válido.";
            erro.style.color = "red";
            return;
        }
        if (senha.length < 6) {
            erro.textContent = "A senha deve ter pelo menos 6 caracteres.";
            erro.style.color = "red";
            return;
        }
        // Login aprovado
        erro.textContent = "Acesso liberado!";
        erro.style.color = "green";
        setTimeout(() => {
            document.getElementById("tela-login").style.display = "none";
            document.getElementById("conteudo").style.display   = "block";
        }, 800);
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") btnLogin.click();
    });
}
const imgPrincipal = document.querySelector(".imgY31");
if (imgPrincipal) {
    const imagens = [
        "./images/flash-sem_fundo.png",
        "./images/nuvem-Sem_fundo.png",
        "./images/IA-sem_fundo.png"
    ];
    imgPrincipal.style.transition = "opacity 0.3s ease";
    let imagemAtual = 0;
    setInterval(() => {
        imagemAtual = (imagemAtual + 1) % imagens.length;
        // Fade out
        imgPrincipal.style.opacity = "0";
        setTimeout(() => {
            imgPrincipal.src = imagens[imagemAtual];
            // Fade in
            imgPrincipal.style.opacity = "1";
        }, 300);
    }, 3000);
}

const menu = document.querySelector(".menu");
if (menu) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            menu.style.backgroundColor = "rgba(215, 240, 255, 0.95)";
            menu.style.boxShadow       = "0 2px 10px rgba(0, 87, 255, 0.1)";
            menu.style.position        = "sticky";
            menu.style.top             = "0";
            menu.style.zIndex          = "999";
        } else {
            menu.style.backgroundColor = "transparent";
            menu.style.boxShadow       = "none";
        }
    });
}
const links = document.querySelectorAll(".link");
if (links.length > 0) {
    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.letterSpacing = "1px";
        });
        link.addEventListener("mouseout", () => {
            link.style.letterSpacing = "normal";
        });
    });
}
const botoes = document.querySelectorAll(".btns");
if (botoes.length > 0) {
    botoes.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const destino    = btn.getAttribute("href");
            const confirmado = confirm("Deseja acessar essa funcionalidade?");
            if (confirmado) {
                window.open(destino, "_blank");
            }
        });
    });
}
window.addEventListener("load", () => {
    const rodape = document.getElementById("rodape");
    if (rodape) {
        const nome = prompt("Olá! Qual é o seu nome?");
        if (nome && nome.trim() !== "") {
            rodape.textContent = `JOVI Vision AI — Bem-vindo, ${nome}!`;
        }
    }
});