import React from 'react'
import { IFormTable } from '@/components'
import { columns } from './config'
import { data } from '@/mock'
import { EComponentType } from '@/enums'
const Vehicle: React.FC = () => {
  return (
    <IFormTable
      form={{
        forms: [
          {
            type: EComponentType.SELECT,
            key: '1',
            props: {
              placeholder: '请选择车辆类型',
              style: { width: 200 }
            }
          }
        ],
        search: true
      }}
      table={{
        columns,
        dataSource: data
      }}
    />
  )
}

export default Vehicle