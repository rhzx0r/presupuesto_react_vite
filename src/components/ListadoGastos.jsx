import React from 'react'
import { firstCapitalize } from '../helpers'
import Gasto from './Gasto'

const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) => {

  const listaGastos = lGastos => { // Regresa la lista de gastos usando el state de gastos o gastosFiltrados

    return lGastos.map( gasto => (
      <Gasto 
        key={gasto.id}
        gasto={gasto}
        setGastoEditar={setGastoEditar}
        eliminarGasto={eliminarGasto}
      />
    ));
  }

  return (
    <div className='listado-gastos contenedor'>
      
      { filtro ? (
          <> 
            <h2>{gastosFiltrados.length ? 'Gastos' : `No Hay Gastos en la categoria ${firstCapitalize(filtro)}`}</h2>
            {listaGastos(gastosFiltrados)}
          </>
        ) : ( 
          <>
            <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aun'}</h2>
            {listaGastos(gastos)}
          </>
        )
      }
    </div>
  )
}

export default ListadoGastos