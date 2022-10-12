import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../src/redux/store'
import PageWrapper from '../src/components/pageWrapper'
import Contacts from '../src/components/contactUS'
import { BluredBack } from '../src/components/bluredBackground'
import { changeDarkModeStatus } from '../src/redux/darkModeSlice'
// import { useLocation } from 'react-router-dom'

const ContactUs: NextPage = () => {
  const { isHeaderListOpen } = useSelector(
    (state: RootState) => state.headerList
  )

  const darkMode = true
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeDarkModeStatus(darkMode))
  }, [dispatch])

  return (
    <PageWrapper>
      <Contacts />
    </PageWrapper>
  )
}

export default ContactUs
