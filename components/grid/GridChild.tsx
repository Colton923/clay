import 'ag-grid-community/styles/ag-theme-alpine.css'
import 'ag-grid-community/styles/ag-grid.css'
import { AgGridReact } from 'ag-grid-react'

import { useGridContext } from './GridContext'
import { useSiteContext } from '../../context/SiteContext'
import { useFirebaseContext } from 'context/FirebaseContext'
import styles from './Grid.module.scss'

export default function GridChild() {
  const { screenWidth } = useSiteContext()
  const { gridRef, onGridReady, AGTheme, setLocalRowData, localRowData } =
    useGridContext()
  const { admin } = useFirebaseContext()

  //Show gridDefs for each menu group

  const valueGetter = (params: any) => {
    return params.data[params.colDef.field]
  }

  const valueSetter = (params: any) => {
    params.data[params.colDef.field] = params.newValue
    return true
  }

  const columnDefs = [
    {
      headerName: 'Name',
      field: 'name',
      editable: true,
      valueGetter,
      valueSetter,
    },
  ]

  return (
    <div className={AGTheme} style={{ height: 500, width: screenWidth * 0.95 }}>
      <AgGridReact
        ref={gridRef}
        rowData={localRowData}
        columnDefs={columnDefs}
        onGridReady={onGridReady}
        defaultColDef={{
          flex: 1,
          minWidth: 100,
          resizable: true,
          sortable: true,
          filter: true,
        }}
      />
    </div>
  )
}
