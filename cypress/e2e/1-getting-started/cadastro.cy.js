describe('Cadastro', () =>{
    it('Usuário deve se tornar um entregador', ()=>{
        cy.viewport(1440,900) //Verificar o tamanho da tela
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href = "/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
        

        //TESTANDO FORMULÁRIOS

        var entregador = {
            nome: 'Amanda Lima',
            cpf: '34600377095',
            email: 'amandalimasiva@outlook.com',
            whatsapp: '11900000000',
            endereco: {
                cep: '04913150',
                rua: 'Rua Antônio Arenso',
                numero: '32',
                complemento: 'Casa 2',
                bairro: 'Jardim Santa Edwiges (Capela do Socorro)',
                cidade_uf: 'São Paulo/SP'
            },
            metodo_entrega: 'Moto',//Metodos de entrega -- Van - Moto
            cnh: 'cnh-digital.jpg'
        }

        cy.get('input[name = "name"]').type(entregador.nome)
        cy.get('input[name = "cpf"]').type(entregador.cpf)
        cy.get('input[name = "email"]').type(entregador.email)
        cy.get('input[name = "whatsapp"]').type(entregador.whatsapp)

        //Endereço
        cy.get('input[name = "postalcode"]').type(entregador.endereco.cep)//CEP do Objeto JS
        cy.get('input[type="button"][value = "Buscar CEP"]').click() //Clicar no botão para achar o endereço
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)


        //Valores preenchidos pelo CEP
        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)


        cy.contains('.delivery-method li', entregador.metodo_entrega).click() //Juntar HTML com CSS

        cy.get('input[accept^="image/"]').attachFile('/imgs/'+ entregador.cnh) // Subir imagem



        cy.get('form button[type="submit"]').click() //Enviar o botão

        //Var de confirmação de mensagem sucesso
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.        '
        
        //DIVS no HTML - '.swal2-container .swal2-html-container'
        cy.get('.swal2-container .swal2-html-container').should('have.text',expectedMessage)

    })


    it('Usuário deve se tornar um entregador', ()=>{
        cy.viewport(1440,900) //Verificar o tamanho da tela
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href = "/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
        

        //TESTANDO FORMULÁRIOS

        var entregador = {
            nome: 'Amanda Lima',
            cpf: '34600377095',
            email: 'amandalimasiva@outlook.com',
            whatsapp: '11900000000',
            endereco: {
                cep: '04913150',
                rua: 'Rua Antônio Arenso',
                numero: '32',
                complemento: 'Casa 2',
                bairro: 'Jardim Santa Edwiges (Capela do Socorro)',
                cidade_uf: 'São Paulo/SP'
            },
            metodo_entrega: 'Moto',//Metodos de entrega -- Van - Moto
            cnh: 'cnh-digital.jpg'
        }

        cy.get('input[name = "name"]').type(entregador.nome)
        cy.get('input[name = "cpf"]').type(entregador.cpf)
        cy.get('input[name = "email"]').type(entregador.email)
        cy.get('input[name = "whatsapp"]').type(entregador.whatsapp)

        //Endereço
        cy.get('input[name = "postalcode"]').type(entregador.endereco.cep)//CEP do Objeto JS
        cy.get('input[type="button"][value = "Buscar CEP"]').click() //Clicar no botão para achar o endereço
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)


        //Valores preenchidos pelo CEP
        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)


        cy.contains('.delivery-method li', entregador.metodo_entrega).click() //Juntar HTML com CSS

        cy.get('input[accept^="image/"]').attachFile('/imgs/'+ entregador.cnh) // Subir imagem



        cy.get('form button[type="submit"]').click() //Enviar o botão

        //Var de confirmação de mensagem sucesso
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.        '
        
        //DIVS no HTML - '.swal2-container .swal2-html-container'
        cy.get('.swal2-container .swal2-html-container').should('have.text',expectedMessage)

    })

})