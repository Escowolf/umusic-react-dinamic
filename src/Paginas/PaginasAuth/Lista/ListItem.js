import styledComponents from "styled-components";

const ItemContainer = styledComponents.div`
    border-radius: 4px;
    background-color: #fff;
    height: 120px;
    width: 262px;
    color: #29303b;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 10px;
`;

const Thumbnail = styledComponents.img`
    width: auto;
    height: 100%;
    border: 0;
    vertical-align: middle;
    float: left;
    margin-right: 10px;
`;

const TitlePane = styledComponents.div`
    font-weight: 700;
    margin-bottom: 5px;
`;

const PricePane = styledComponents.div`
    margin-bottom: 5px;
`;

const ItemLink = styledComponents.a`
    text-decoration: none;
`;

function ListItem(props) {
    return (
        <ItemLink href="https://www.luiztools.com.br/livro-nodejs-amazon" title="Clique para comprar">
            <ItemContainer>
                <Thumbnail src="https://m.media-amazon.com/images/I/4110e7iseFL.jpg" />
                <TitlePane>Programação Web com Node.js</TitlePane>
                <PricePane>R$ 14.99</PricePane>
            </ItemContainer>
        </ItemLink>
    );
  }
  
  export default ListItem;