const homeScreen = require("../pages/home.screen");
const loginScreen = require("../pages/login.screen");
const storeScreen = require("../pages/store.screen");
let url = 'http://lojaebac.ebaconline.art.br/';
let email = 'lojaebacqe@gmail.com';
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ';


describe('Acessar painel administrativo', () => {
    it('Deve fazer login com credenciais válidas', async () => {
        const btnSkip = await $('id:button_skip');
        if (btnSkip === true) {
            await homeScreen.btnSkip();
        }
        await homeScreen.btnLogIn();

        await loginScreen.informarUrl(url);
        await loginScreen.btnContinue();
        await loginScreen.aguardarModal('Checking site address');

        await loginScreen.inserirEmail(email);
        await loginScreen.btnContinueLogin();

        await loginScreen.inserirSenha(senha);
        await loginScreen.btnContinue();
        //await loginScreen.aguardarModal('Logging in');

        await loginScreen.aguardarModalLogin();
        await storeScreen.validarTituloTela('EBAC - Shop');
    });
});