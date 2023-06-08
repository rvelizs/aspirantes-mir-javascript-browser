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



function menuRecursivoDOM (menu, padre) {
    const ul = document.createElement('ul');
    ul.setAttribute('id', padre.name);
    padre.appendChild(ul);
    menu.forEach(element => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', element.link);
        a.textContent = element.name;
        li.appendChild(a);
        ul.appendChild(li);
        // si existen subtemas
        if (element.items.length > 0) {
            menuRecursivoDOM(element.items, li);
        }
    });
}

// Prueba de recorrido de menu DOM (recursivo)
menuRecursivoDOM(menu, document.getElementById('menu'));


//menuRecursivo(menu);

alert('Revisa la consola');

