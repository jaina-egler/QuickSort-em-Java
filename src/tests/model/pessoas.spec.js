import {describe, expect,it,jest} from '@jest/globals'
import PessoaController from '../../controllers/PessoaController.js'
import Pessoa from '../../models/Pessoa.js'

describe( 'Deve retornar o teste de unidade de pessoa', () => {
    afterEach(()=> jest.clearAllMocks());
    const dataPessoa = new Date();
    const objetoPessoa ={
        nome:'Jaina',
        cpf: '01593801203',
        nit: '25140',
        dataNascimento: dataPessoa,
        estrangeiro: false,
        pais: 'Brasil',
        cep: '76980654',
        logradouro: 'RUa 21',
        numero: '4075',
        bairro: 'Cidade verde II',
        cidade: 'Vilhena',
        estado: 'Rondônia',
        telefone: '69-984965854',
        telefoneContato: '6985472045'
    }
    it('Deve instanciar uma nova pessoa', () => {
        const pessoa = new Pessoa(objetoPessoa);
        expect(pessoa).toEqual(expect.objectContaining(objetoPessoa))
    })
    it('Deve fazer uma chamada simulada ao BD', () => {
        const pessoa = new Pessoa(objetoPessoa);
        PessoaController.cadastrarPessoa = jest.fn().mockReturnValue({
            nome:'Jaina',
        cpf: '01593801203',
        nit: '25140',
        dataNascimento: dataPessoa,
        estrangeiro: false,
        pais: 'Brasil',
        cep: '76980654',
        logradouro: 'RUa 21',
        numero: '4075',
        bairro: 'Cidade verde II',
        cidade: 'Vilhena',
        estado: 'Rondônia',
        telefone: '69-984965854',
        telefoneContato: '6985472045'
        });
        const retorno = PessoaController.cadastrarPessoa();
        expect(retorno).toEqual(expect.objectContaining({
            dataNascimento: expect.any(Date),...objetoPessoa,}))
    })
    }
    
)