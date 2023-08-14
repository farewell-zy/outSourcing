import React, { useEffect, useRef } from 'react'
import { IFormTable } from '@/components'
import { columns, forms } from './config'
import { data } from '@/mock'
import { useGetProjectList } from '@/hooks'
import type { FormInstance } from 'antd'
const Project: React.FC = () => {
  const formRef = useRef<FormInstance<any>>()

  const { pagination, list, loading, getProjectList } = useGetProjectList()

  const onReload = (params?: Record<string, any>) => {
    getProjectList({ ...formRef.current?.getFieldsValue(), current: 1, ...params })
  }

  useEffect(() => {
    onReload()
  }, [])

  return (
    <IFormTable
      form={{
        forms,
        search: true,
        loading,
        getFormRef: form => {
          formRef.current = form
        },
        formProps: {
          onFinish: onReload
        }
      }}
      table={{
        columns,
        dataSource: data ?? list,
        loading,
        pagination: {
          ...pagination,
          onChange: (current: number, pageSize: number) => {
            onReload({ current, pageSize })
          }
        }
      }}
    />
  )
}

export default Project
