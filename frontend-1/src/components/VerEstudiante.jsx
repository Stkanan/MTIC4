import React from 'react'
import MaterialTable from 'material-table'

export default function VerEstudiantes() {
return (
<MaterialTable
title="Lista de Estudiantes"
columns={[
{ title: 'Nombre', field: 'Nombre' },
{ title: 'Apellido', field: 'Apellido' },
{ title: 'Email', field: 'Email'},
{title: 'Rol',field: 'Rol',},
]}
data={[
    {id:1, Nombre: 'Hermann', Apellido:'Rudas', Email:"Hermannrudas@hotmail.com", Rol: 'Administrador'},
    {id:1, Nombre: 'Samer', Apellido:'Kanan', Email:"Stkanan@hotmail.com", Rol: 'Lider'},
    {id:1, Nombre: 'Pablov', Apellido:'Zuluaga', Email:"Pabloz@hotmail.com", Rol: 'Estudiante'}
]}
options={{
search: false
}}
/>
)
}
