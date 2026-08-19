import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Banner() {
   const { t, i18n } = useTranslation();
  return (
    <div>
      <h1>{t("hero.title")}</h1>
    </div>
  )
}
