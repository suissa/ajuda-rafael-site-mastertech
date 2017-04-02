# How To Do

## Content

Primeiramente devemos adicionar um classe para **TODOS**  os links que possuem 
conteúdo a serem *"baixado"*, no nosso exemplo é: `conteudo-link'`.

Vamos ver 2 exemplos usando o [load do jQuery](http://api.jquery.com/load/):


```js

$( "#result" ).load( "ajax/test.html" );

```

```js

$( "#result" ).load( "ajax/test.html", function() {
  alert( "Load was performed." );
});

```


Vamos utilizar o segundo exemplo pois nos retorna algo após o carregamento, porém 
perceba que em `#result` é onde o conteúdo carregado irá ser *mostrado*. 
Então vamos mudar para `#content`, pois adicionaremos isso no `index.html`:

```html
<section id="content">
    
</section>
```

Então nosso exemplo ficará assim:

```js

$( "#content" ).load( "ajax/test.html", function() {
  alert( "Load was performed." );
});

```

Agora vamos criar a função que pega o valor do HTML (`"ajax/test.html"`), para isso precisamos 
adicionar a classe `conteudo-link` em cada **link** do menu, adicionando o atributo `title` como 
o nome do HTML que possui esse conteúdo, por exemplo:

```html

<li><a class="conteudo-link" href="" title="algoritmo_01">Introdução</a></li>

```


**Irá buscar o conteúdo em: `conteudos/algoritmo_01.html`!**

Agora chegamos no ponto chave:

> Como pegar o nome de cada conteúdo a partir do link?

Agora vamos entender como pensar para solucionar esse problema:

> Primeiro pensamos em qual evento precisamos.
> 
> - O *click* pois é no *click* do *link* que pegamos o nome do conteúdo.
> 
>  Depois precisamos de um identificados desse elemento.
>  
>  - A classe:  `conteudo-link`.
>  
>  Para finalizar, precisamos saber qual atributo possui o valor que precisamos. 
>  
>  - É o atributo:  `title`.
> 


Sabendo disso podemos montar a seguinte função:

```js
 
var selector = 'a.conteudo-link'
var event = 'click'

$( selector ).on( event , function() {
    const conteudo = $(this).attr('title');
    const PATH = 'conteudos/'+conteudo+'.html';

    $( "#content" ).load( PATH, function() {
      alert( "DE OK e leia seu conteúdo carregado!" );
    });

    return false;
})

```


Perceba que a `const PATH` contém o caminho completo até o conteúdo, onde 
o seu valor principal vem de `$(this).attr('title')`. Para exemplificar de uma forma 
lúdica, o valor de `this`  é o valor de cada *click* no link em questão, ou seja, para 
cada *link* clickado o valor do atributo `title` será diferente.

Agora basta criar cada conteúdo em HTML seapadamente na pasta `conteudos` com 
nome simples de serem linkados no `index.html`


