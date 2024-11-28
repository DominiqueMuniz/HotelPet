document.addEventListener('DOMContentLoaded', function () {
    const navItems = [
        { text: 'Home', link: '/Login/login.html' },
        { text: 'Pet', link: '/Pets/pets.html' },
        { text: 'Usuários', link: '/Usuarios/usuarios.html' },
        { text: 'Configurações', link: '/Configurações/configuracoes.html' },
        { text: 'Reservas', link: '/Reservas/reservas.html' }
    ];

    const navList = document.getElementById('nav-list');

    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a'); 

        a.textContent = item.text; 
        a.href = item.link;        

        li.appendChild(a); 
        navList.appendChild(li);
    });
});
