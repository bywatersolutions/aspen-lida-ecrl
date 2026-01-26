import { Pressable } from '@gluestack-ui/themed';
import React from 'react';

import { BrowseCategoryContext, LanguageContext, LibrarySystemContext, ThemeContext } from '../../context/initialContext';
import { getTermFromDictionary } from '../../translations/TranslationService';
import { Image } from 'expo-image';
import { MaterialIcons } from '@expo/vector-icons';
import { useQueryClient } from '@tanstack/react-query';


const HomeScreenLinkGrid = () => {
     const { library, homeScreenLinks } = React.useContext(LibrarySystemContext);

     return null;
}

const DisplayHomeScreenLink = ({link}) => {
     const queryClient = useQueryClient();
     const { theme } = React.useContext(ThemeContext);
     const { language } = React.useContext(LanguageContext);
     const { library } = React.useContext(LibrarySystemContext);
     const { maxNum } = React.useContext(BrowseCategoryContext);

     return (
          <Pressable></Pressable>
     )
}

export default HomeScreenLinkGrid;