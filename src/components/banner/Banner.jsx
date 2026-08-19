import React from 'react'
import { useTranslation } from 'react-i18next'
import "./Banner.css"
export default function Banner() {
   const { t, i18n } = useTranslation();
  return (
    <div className='banner'>
      <h1 className='banner-title'>{t("hero.title")}</h1>
      <p className='banner-p'>{t("hero.subtitle")}</p>
      <button className='banner-btn'>{t("hero.cta")}</button>
    </div>
  )
}
