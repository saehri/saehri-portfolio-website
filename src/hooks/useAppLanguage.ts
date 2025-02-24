import { useState } from "react"

type LanguageTypes = "id" | 'en'

const useAppLanguage = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<LanguageTypes>('en')

    
}