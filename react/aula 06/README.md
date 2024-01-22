## React - Aula 06
### Context API
### Exercício Prático
<hr/>
01 - Após a introdução teórica da aula sobre Context API, modifique o arquivo para que o Componente Carrinho receba o estado cart diretamente do contexto criado em CartContext e forneça o método setCart no componente Card, também fornecido pelo contexto CartContext, para que ao modificar o número de items do Card o carrinho receba essa informação através da mudança do estado Cart.<br/>
<br/>
<hr/>
<br/>
02 - Crie um contexto para modificar o tema da aplicação entre a versão light e dark. O contexto deverá ter como estado theme e método de modificação setTheme. O estado inicial deverá ser uma string 'light'. O setTheme do contexto deverá ser utilizado no componente Header e nele, deverá existir um botão para modificação do tema. Importe o theme do contexto em todos componentes que necessitem desse estado para que o tema seja modificado.
<br/>
<br>
<hr/>
<br/>
03 - Modifique os contextos Cart e Theme para que ambos sejam persistidos localmente. (Desafio)