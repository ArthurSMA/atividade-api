import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from 'axios';
import TabelaUsuario from "./components/TabelaUsuario";

const URL_API = "http://localhost:9090/api/usuarios";

export default function Usuario() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [showUsers, setShowUsers] = useState(false);

    const fetchAllData = async () => {
        try {
            setLoading(true);

            const response = await axios.get(URL_API);
            const data = response.data;

            if (!data) throw "Problema na requisição";

            setData(data);

            console.log(response);
        } catch (error) {
            console.log(`Deu erro em ${error}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    const toggleUsers = () => {
        setShowUsers(!showUsers);
    };

    const handleEdit = async (id) => {
        console.log(`Editar usuário com ID: ${id}`);

        const response = await axios.put(`${URL_API}/${id}`, {
            nome: 'Novo nome' // Substitua por um estado ou valor do usuário
        });

        if (!response.ok) {
            throw new Error('Erro ao editar usuário');
        }

        const data = await response.data;
        console.log(data);
    };

    const fetchData = async () => {
        const response = await axios.get(URL_API);
        const newData = await response.data;
        setData(newData);
    };

    const handleRemove = async (id) => {
        console.log(`Remover usuário com ID: ${id}`);
    
        const response = await axios.delete(`${URL_API}/${id}`);
    
        if (response.data.error) {
            throw new Error(response.data.error);
        }
    
        const data = await response.data;
        console.log(data);

        // Atualizar os dados da tabela
        fetchData();
    };
    

    return (
        <div>
            <Button variant="contained" color="primary" onClick={toggleUsers}>{showUsers ? "Ocultar Usuário" : "Listar Usuários"}</Button>
            {loading && !data && <p>Carregando informações...</p>}

            {showUsers && data && <TabelaUsuario data={data} onEdit={handleEdit} onRemove={handleRemove} />}
        </div>
    );
}
