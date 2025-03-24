import { db } from "../db.js";

// Função para listar usuários
export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data);
    });
};

// Função para deletar usuário
export const deleteUser = (req, res) => {
    const { id } = req.params;
    const q = "DELETE FROM usuarios WHERE id = ?";
    
    db.query(q, [id], (err, result) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({ message: "Usuário deletado com sucesso!" });
    });
};

// Função para editar usuário
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { nome, idade, cpf } = req.body;

    const q = "UPDATE usuarios SET nome = ?, idade = ?, cpf = ? WHERE id = ?";
    
    db.query(q, [nome, idade, cpf, id], (err, result) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({ message: "Usuário atualizado com sucesso!" });
    });
};
