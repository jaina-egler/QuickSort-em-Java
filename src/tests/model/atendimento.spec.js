import {describe, expect,it,jest} from '@jest/globals'
import AtendimentoController from '../../controllers/AtendimentoController.js'
import Atendimento from '../../models/Atendimento.js'
import mongoose from 'mongoose'

describe( 'Deve retornar o teste de unidade de um atendimento', () => {
    afterEach(()=> jest.clearAllMocks());
    const oid = mongoose.Schema.Types.ObjectId.get()
    const dataAtendimento = new Date();
    const objetoAtendimento ={
        oid_pessoa: oid,
        nome: "Jaina",
        cpf: "01593801203",
        nit: "12365",
        tipo: "Tipo 1",
        observacao: "Atendimento presencial",
        dataAtendimento: dataAtendimento
    }
    it('Deve instanciar um novo atendimento', () => {
        const atendimento = new Atendimento(objetoAtendimento);
        expect(atendimento).toEqual(expect.objectContaining(objetoAtendimento))
    })
    it('Deve fazer uma chamada simulada ao BD', () => {
        const atendimento = new Atendimento(objetoAtendimento);
        AtendimentoController.cadastrarAtendimento = jest.fn().mockReturnValue({
        oid_pessoa: oid,
        nome: "Jaina",
        cpf: "01593801203",
        nit: "12365",
        tipo: "Tipo 1",
        observacao: "Atendimento presencial",
        dataAtendimento: dataAtendimento
        });
        const retorno = AtendimentoController.cadastrarAtendimento();
        expect(retorno).toEqual(expect.objectContaining({
            dataAtendimento: expect.any(Date),...objetoAtendimento,}))
    })
    }
    
)