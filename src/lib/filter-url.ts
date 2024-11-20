'use client'

import { useCallback } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

interface IQueryParams {
  key: string
  value: string
}

type IRemoveFilter = Omit<IQueryParams, 'value'>

export const useParamsFilters = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!

  const getParams = ({ key, value }: IQueryParams) => {
    const result = searchParams.get(key)
    return result || value
  }

  const updateParams = useCallback(
    ({ key, value } : IQueryParams) => {
      const params = new URLSearchParams(searchParams)

      // Set the new filter
      if (key === 'page') {
        if (value === '1') {
          params.delete(key)
        } else {
          params.set(key, value)
        }
      } else {
        params.delete('page')
        if (value === '') {
          params.delete(key)
        } else {
          params.set(key, value)
        }
      }

      // Remove the parameters that come after the updated parameter
      let foundUpdatedParam = false
      const keysToRemove: string[] = []
      for (const key of Array.from(params.keys())) {
        if (foundUpdatedParam) {
          keysToRemove.push(key)
        }
        if (key === key) {
          foundUpdatedParam = true
        }
      }
      keysToRemove.forEach((key) => params.delete(key))

      const queryString = params.toString()
      const url = `${pathname}${queryString ? `?${queryString}` : ''}`

      router.push(url)
    },
    [searchParams, router, pathname]
  )

  const createParams = useCallback(
    ({ key, value }: IQueryParams) => {
      const params = new URLSearchParams(searchParams)

      // Set the new filter
      params.set(key, value)

      const queryString = params.toString()
      const url = `${pathname}${queryString ? `?${queryString}` : ''}`

      router.push(url)
    },
    [searchParams, router, pathname]
  )

  const removeParams = useCallback(
    ({ key }: IRemoveFilter) => {
      const params = new URLSearchParams(searchParams)

      // Remove the filter
      params.delete(key)

      const queryString = params.toString()
      const url = `${pathname}${queryString ? `?${queryString}` : ''}`

      router.push(url)
    },
    [searchParams, router, pathname]
  )

  return {
    getParams,
    updateParams,
    createParams,
    removeParams,
  }
}