import { Model, DataTypes } from 'sequelize'

export default class Usuario extends Model {
  static init(sequelize) {
    return super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      token: DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'Usuario',
      tableName: 'usuarios',
      timestamps: true,               // Ativa os campos de tempo
      createdAt: 'created_ad',        // Mapeia o campo do banco
      updatedAt: 'updated_at'         // Mapeia o campo do banco
    })
  }
}
