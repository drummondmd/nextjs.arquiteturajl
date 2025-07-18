'use client'

export default function Temp({users}){

    const clientes = users.filter((elem) => elem.userType === "cliente")
    const arquitetos = users.filter((elem) => elem.userType === "arquiteto")
    const admin = users.filter((elem) => elem.userType === "admin")
    const proprietarios = users.filter((elem) => elem.userType === "proprietario")


    function SimuladorLogin({ tipo_usuario, cliente, id }) {

        function simularLogin() {
            // Expira em 7 dias
            document.cookie = `userEmail=${id}; path=/; max-age=${7 * 24 * 60 * 60}`;
            window.location.href = `/${tipo_usuario} `; // redireciona para área do cliente
        }

        return (
            <button onClick={simularLogin}>Simular login como {cliente}</button>
        )
    }





    return (
        <div>
            <h3>Clientes</h3><ol>{clientes.map((cliente) => <li key={cliente.id}><SimuladorLogin tipo_usuario={"cliente"} cliente={cliente.email} id={cliente.email} /></li>)}</ol>
            <h3>Arquitetos</h3><ol>{arquitetos.map((cliente) => <li key={cliente.id}><SimuladorLogin tipo_usuario={"arquiteto"} cliente={cliente.email} id={cliente.email} /></li>)}</ol>
            <h3>Admins</h3><ol>{admin.map((cliente) => <li key={cliente.id}><SimuladorLogin tipo_usuario={"arquiteto"} cliente={cliente.email} id={cliente.email} /></li>)}</ol>
            <h3>Proprietarios</h3><ol>{proprietarios.map((cliente) => <li key={cliente.id}><SimuladorLogin tipo_usuario={"arquiteto"} cliente={cliente.email} id={cliente.email} /></li>)}</ol>



        </div>
    )

}