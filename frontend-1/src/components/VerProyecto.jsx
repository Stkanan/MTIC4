import React from 'react'
import MaterialTable from 'material-table'

export default function VerProyectos() {
return (
<MaterialTable
title="Busqueda"
columns={[
{ title: 'Nombre de Proyecto', field: 'Proyecto' },
{ title: 'Objetivo', field: 'Objetivo' },
{ title: 'Presupuesto', field: 'Presupuesto'},
{ title: 'Fecha de Inicio', field: 'FechaInicio'},
{ title: 'Fecha de Finalizacion', field: 'FechaFinal'},
{ title: 'Integrantes', field: 'Contributors'},
{ title: 'Estado', field: 'Estado'},
{ title: 'Activo', field: 'Active'},
]}

data={[    
    {id:1, Proyecto: 'project1', Objetivo:3, Presupuesto:1000, FechaInicio: '12-12-2021', FechaFinal: '12-12-2022', Contributors:'Hermann, Pablo', Estado: 'En Progreso', Active: true},
    {id:2, Proyecto: 'project2', Objetivo:6, Presupuesto:4000, FechaInicio: '12-12-2019', FechaFinal: '12-12-2021', Contributors:'Samer', Estado: 'Completo', Active: false},
    {id:3, Proyecto: 'project3', Objetivo:1, Presupuesto:5000, FechaInicio: '12-12-2022', FechaFinal: '12-12-2023', Contributors:'Pablo , Samer', Estado: 'Planeacion', Active: false}
    
]}
options={{
search: false
}}
/>
)
}
