import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('./database.js');

const tbl_livro = sequelize.define('tbl_livro', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    cod_livro: {
      type: DataTypes.INTEGER,      
      allowNull: false
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,   
    },
    preco: {
        type: DataTypes.DECIMAL,
        allowNull: false,   
    },
    imagem_peq: {
        type: DataTypes.STRING,
        allowNull: false,  
    },
    imagem_grd: {
        type: DataTypes.STRING,
        allowNull: false,  
    },
    detalhes: {
        type: DataTypes.STRING,
        allowNull: false,  
    } 
});


await sequelize.sync();
