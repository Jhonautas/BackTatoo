import Usuario from "../models/Usuario.js"

class UsuarioController {
    async store(req, res) {
        const { nome, email, senha } = req.body
        try {
            const usuario = await Usuario.create({ nome, email, senha })
            console.log(usuario)
            return res.status(201).json(usuario)
        } catch (error) {
            console.error('Erro em store:', error) // 👈 adicionado
            return res.status(500).json({ error: 'Erro ao criar usuário' })
        }
    }

    async index(req, res) {
        try {
            const usuarios = await Usuario.findAll()
            return res.status(200).json(usuarios)
        } catch (error) {
            console.error('Erro em index:', error) // 👈 adicionado
            return res.status(500).json({ error: 'Erro ao listar usuários' })
        }
    }

    async show(req, res) {
        const { email } = req.params
        try {
            const usuario = await Usuario.findOne({ where: { email } })
            if (!usuario) {
                return res.status(404).json({ error: 'Usuário não encontrado' })
            }
            return res.status(200).json(usuario)
        } catch (error) {
            console.error('Erro em show:', error) // 👈 adicionado
            return res.status(500).json({ error: 'Erro ao buscar usuário' })
        }
    }

    async update(req, res) {
        const { email } = req.params
        const { nome, senha } = req.body
        try {
            const usuario = await Usuario.findOne({ where: { email } })
            if (!usuario) {
                return res.status(404).json({ error: 'Usuário não encontrado' })
            }
            usuario.nome = nome || usuario.nome
            usuario.senha = senha || usuario.senha
            await usuario.save()
            return res.status(200).json(usuario)
        } catch (error) {
            console.error('Erro em update:', error) // 👈 adicionado
            return res.status(500).json({ error: 'Erro ao atualizar usuário' })
        }
    }

    async delete(req, res) {
        const { id } = req.params
        try {
            const usuario = await Usuario.findByPk(id)
            if (!usuario) {
                return res.status(404).json({ error: 'Usuário não encontrado' })
            }
            await usuario.destroy()
            return res.status(200).json({ message: 'Usuário deletado com sucesso!' })
        } catch (error) {
            console.error('Erro em delete:', error) // 👈 adicionado
            return res.status(500).json({ error: 'Erro ao deletar usuário' })
        }
    }
}

export default new UsuarioController()
