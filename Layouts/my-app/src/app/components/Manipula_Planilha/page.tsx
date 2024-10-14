'use client'
import * as XLSX from 'xlsx'; 
import { saveAs } from 'file-saver'; 
import { useState } from 'react'; 
import "./Manipula_Planilha.css";

export default function Manipula_Planilha() {

  // Modelo de Planilha Excel Base
  const [data, setData] = useState([
    { nome: 'João Silva', dataDeNascimento: '01/01/1990', email: 'joao.silva@example.com', senha: 'senha123' },
    { nome: 'Maria Oliveira', dataDeNascimento: '15/05/1985', email: 'maria.oliveira@example.com', senha: 'senha456' },
    { nome: 'Carlos Souza', dataDeNascimento: '20/08/1992', email: 'carlos.souza@example.com', senha: 'senha789' },
    { nome: 'Ana Pereira', dataDeNascimento: '30/11/1988', email: 'ana.pereira@example.com', senha: 'senha101' }
  ]);

  
  // Função para gerar e baixar o arquivo Excel
  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(data); 
    const workbook = XLSX.utils.book_new(); 
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1'); 
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' }); 
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'planilha_base.xlsx'); 
  };

  // Função para atualizar os dados quando o usuário altera um valor na tabela
  const handleInputChange = (e, rowIndex, key) => {
    const newData = [...data]; 
    newData[rowIndex][key] = e.target.value; 
    setData(newData); 
  };

  return (
    <div className="container">
      <section className='flex flex-row justify-between items-center'>
        <h1 className='text-5xl font-bold'>Planilha Excel Name</h1>
        <button onClick={handleDownload}>Baixar Planilha</button>
      </section>
      <table>
        <thead>
          <tr>
            {data.length > 0 && Object.keys(data).map((key) => <th key={key}>{key}</th>)} {/* Cabeçalho da tabela */}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(row).map((key) => (
                <td key={key}>
                  <input
                    type="text"
                    value={row[key]}
                    onChange={(e) => handleInputChange(e, rowIndex, key)} // Campo de entrada para editar os dados
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
