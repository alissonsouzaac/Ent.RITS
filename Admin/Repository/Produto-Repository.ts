import { IProduto } from '../Contracts/IProduto';
import { IProdutoRepository } from '../Contracts/IProdutoRepository';
import Produto from '../Models/Produto';

class ProdRepository implements IProdutoRepository<IProduto> {
    save = async (data: IProduto): Promise<any> => {
        return Produto.create(data)
      };  

    getAll = async (): Promise<IProduto[] | undefined> => Produto.find();

    getByCod = async (cod: Object): Promise<IProduto | undefined> => Produto.findOne(cod);
    
    search = async (search: Object): Promise<IProduto[]> => 
    Produto.find(search);

    update = async (cod: String, fields: Object): Promise<IProduto | undefined> => 
    Produto.updateOne(cod, fields);

    delete = async (cod: String): Promise<IProduto | undefined> => Produto.deleteOne(cod);

}

export default ProdRepository;