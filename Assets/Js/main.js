document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('.animated', {
        speed: 120,
        loop: true
    })
    .type('Estevan Chicoski Viera        ', {dlay: 10000})
    .delete(30)
    .go()
})

document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('.dev', {
        speed: 120,
        loop: true
    })
    .type('Web FrontEnd       ', {dlay: 5000})
    .delete(20)
    /*.type('Desktop ', {delay: 2000})
    .delete(8)
    .type('Mobile ', {delay: 2000})
    .delete(7)*/
    .type('Discord Bots ', {delay: 2000})
    .go()
})

/*informações botões*/

function one(){
    document.getElementById("title").innerHTML = 'Sobre Mim';
    document.getElementById("texto").innerHTML = 'Eu sou Estevan Chicoski Vieira. Atualmente trabalho com marketing/prospects em uma agência web de minha cidade, mas estou a procura de uma vaga meio período para Programador FrontEnd.';
}

function two(){
    document.getElementById("title").innerHTML = 'Conhecimentos'
    document.getElementById("texto").innerHTML = 'Atualmente tenho conhecimeto em Html, Css, Sass, JavaScript, Lua (básico), Magento, Cpanel e Wordpress. E também tenho conhecimento básico em Php, Sql, PhpMyAdmin, React, Vue e NodeJs. Estou estudando Python e aprofundando meus conhcimentos em ReactJs'
}

function three(){
    document.getElementById("title").innerHTML = 'Experiência'
    document.getElementById("texto").innerHTML = 'Tenho experiência profissional com marketing, vendas, suporte técnico, dev. wordpress e dev. flutter (Android e IOs), também tenho experiência acadêmica desenvolvendo projetos pessoasis em Html, Scss (Css) e Js.'
}

function four(){
    document.getElementById("title").innerHTML = 'Pretendo'
    document.getElementById("texto").innerHTML = 'Futuramente pretendo aprofundar meus conhecimentos em JavaScript, ReactJs e principalmente em Python. Quero estudar Machine Learning e Redes Neurais Artificiais em Python. Também pretendo estudar C#, NestJs, NextJs e GO.'
}