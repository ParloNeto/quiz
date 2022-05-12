import React from 'react';
import Menu from './Menu';
import Produtos from './Produtos';
import Rodape from './Rodape';

const Home = () => {

//variáveis e funçoes do useState
    const [quantidade_itens, adiciona_item ] = React.useState(0);

return(

    <div>

                      <Menu quantidade_itens={quantidade_itens} />

                    <div className="Container">

                         <Produtos quantidade_itens ={quantidade_itens} adiciona_item ={adiciona_item}/>
                        
                    </div>

                <div>

                     <Rodape/>

                </div>


    </div>

);
}

export default Home;