import React from 'react'
import MaterialTable from 'material-table'

export default function VerEstudiantes() {
return (
<MaterialTable
title="Basic Search Preview"
columns={[
{ title: 'Name', field: 'name' },
{ title: 'Surname', field: 'surname' },
{ title: 'Birth Year', field: 'birthYear', type: 'numeric' },
{
title: 'Birth Place',
field: 'birthCity',
lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
},
]}
data={[
{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
{ name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity:34 },
{ name: 'Samer Ahmad', surname: 'Kanan', birthYear: 3027, birthCity:34 },
{ name: 'Hermann', surname: 'Rudas', birthYear: 3026, birthCity:34 },
]}
options={{
search: true
}}
/>
)
}
