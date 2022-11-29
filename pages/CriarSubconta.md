# Criando Subconta
<hr>

Para criar uma <b>Subconta</b> será necessário acessar o menu <b>Marketplace</b> e logo após acessar o menu <b>Incluir Subconta</b>, conforme apresentamos na imagem abaixo.

<img src="../imagens/CadastroSub01.png" style="display:block; margin-left:auto; margin-right:auto;">

A seguir será necessário preencher todas as informações da criação da <b>Subconta</b>:<br>
As primeiras informações solicitadas aqui são os dados referente a empresa.<br>
<b style="color: #FF7F00; font-size:18px">Todos os campos com (*) são obrigatórios.</b>
<img src="../imagens/CadastroSub02.png" style="display:block; margin-left:auto; margin-right:auto;">

<b>IMPORTANTE: Temos a opção de dar acesso restrito ao painel para esta Subconta, basta marcar o checkbox com esta informação.</b>


Abaixo, serão solicitadas algumas informações do <b>responsável legal</b> pela empresa perante a <b>Receita Federal</b>.<br>
Além de um <b>contato técnico</b> totalmente opcional.

<img src="../imagens/CadastroSub03.png" style="display:block; margin-left:auto; margin-right:auto;">

Após, será possível informar os <b>dados bancários</b> e uma <b>logo</b> para Subconta, caso seja de interesse do <b>Marketplace</b>.<br>
Estes campos são de preenchimento opcional e poderão ser preenchidos pelo responsável pela empresa posteriormente.

<img src="../imagens/CadastroSub04.png" style="display:block; margin-left:auto; margin-right:auto;">

O próximo passo é credenciar as <b>formar de pagamento</b> que esta Subconta poderá usar.<br>
Todas as formas de pagamento abaixo podem ser Habilitadas ou Desabilitadas, depende do interesse do <b>Marketplace</b>.

<img src="../imagens/CadastroSub05.png" style="display:block; margin-left:auto; margin-right:auto;">

*Recomendamos fortemente a utilização do serviço de antifraude para evitar chargebacks*


Ao Habilitar, cada opção de pagamento aparecerá a imagem abaixo.

<select onchange="document.getElementById('preview1').src = this.value" style="display:block; margin-left: auto; margin-right: auto; height: 30px; border-style:none none solid none; border-color: #002F4D;">

<option hidden>Selecione a forma de pagamento:</option>
<option value="../imagens/TaxaSub01.png">Boleto</option>
<option value="../imagens/TaxaSub02.png">Cartão de Crédito</option>
<option value="../imagens/TaxaSub03.png">Criptomoeda</option>
<option value="../imagens/TaxaSub04.png">PIX</option>
<option value="../imagens/TaxaSub05.png">Antecipação de Saldo</option>
</select>
<br>
<img id="preview1" height="100%" style="display:block; margin-left: auto; margin-right: auto;">

<b style="font-size: 20px;">1ª Opção - Repassar o valor da taxa para a Subconta</b>

Para isso basta marcar o checkbox, neste caso,<b> a nota com o valor da taxa que estamos cobrando será emitida contra a subconta</b>.

<b style="font-size: 20px;">2ª Opção - Para não repassar a taxa para Subconta</b>

Para isso você não deverá marcar o checkbox e incluir no campo "taxa em valor/percentual" o valor que deseja repassar para a subconta, <b>neste caso a nota sobre a taxa cobrada será emitida contra a conta do Marketplace.</b>

Após definir a taxa de cada forma de pagamento, basta clicar em <b>Salvar Taxas</b>.<br>
*Exemplo boleto:*

<img src="../imagens/CadastroSub06.png" style="display:block; margin-left:auto; margin-right:auto;">

Assim que todas as formas de pagamentos estiverem informadas e as taxas definidas, basta clicar em <b>Salvar</b> no canto inferior direito da tela.

<img src="../imagens/CadastroSub07.png" style="display:block; margin-left:auto; margin-right:auto;">

<b style="font-size: 25px;">Pronto, a Subconta está criada.</b>

<my-footer></my-footer>