const menu = [
    {
      name: 'Home',
      link: '/',
      items: []
    },
    {
      name: 'About',
      link: '/about',
      items: []
    },
    {
      name: 'Products',
      link: '/products',
      items: [
        {
          name: 'Product 1',
          link: '/products/1',
          items: []
        },
        {
          name: 'Product 2',
          link: '/products/2',
          items: [
            {
              name: 'Product 2.1',
              link: '/products/2/1',
              items: []
            },
          ]
        },
      ]
    },
    {
      name: 'Services',
      link: '/services',
      items: [
        {
          name: 'Service 1',
          link: '/services/1',
          items: [
            {
              name: 'Service 1.1',
              link: '/services/1/1',
              items: []
            },
          ]
        },
        {
          name: 'Service 2',
          link: '/services/2',
          items: [
            {
              name: 'Service 2.1',
              link: '/services/2/1',
              items: []
            },
            {
              name: 'Service 2.2',
              link: '/services/2/2',
              items: []
            },
          ]
        },
      ]
    },
]

// Prueba de recorrido de menu console log (recursivo)
function menuRecursivo (menu) {
    for (let i = 0; i < menu.length; i++) {
        console.log(menu[i].name);
        if (menu[i].items.length > 0) {
            menuRecursivo(menu[i].items);
        }
    }
}



function menuRecursivoDOM (menu, ul) {
    for (let i = 0; i < menu.length; i++) {
        
        // componentes del menu
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', menu[i].link);
        const sub = document.createTextNode(menu[i].name);
        a.appendChild(sub);
        li.appendChild(a);
        ul.appendChild(li);

        // si tiene submenus
        if (menu[i].items.length > 0) {
            // nuevo ul
            const newUl = document.createElement('ul');
            //newUl.setAttribute('id', menu[i].name);
            //console.log(menu[i].name);
            //console.log(newUl.id);
            menuRecursivoDOM(menu[i].items, newUl);
        }
    }
}

// Prueba de recorrido de menu DOM (recursivo)
const ulInicial = document.getElementById('menu');
menuRecursivoDOM(menu, ulInicial);


//menuRecursivo(menu);

alert('Revisa la consola');

