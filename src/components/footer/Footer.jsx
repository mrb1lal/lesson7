import React from 'react'
import { useTranslation } from 'react-i18next'
import "./Footer.css"
export default function Footer() {
   const { t, i18n } = useTranslation();
  return (
    <div className='footer'>
      <p>{t("footer.copyright")}</p>
    </div>
  )
}
