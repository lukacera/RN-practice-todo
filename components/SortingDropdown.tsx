import React, { useState } from 'react';
import { Text, TouchableWithoutFeedback, View, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function SortingDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Newest');

    const handleOptionSelect = (option: "Newest" | "Most Urgent") => {
        setIsOpen(false);
        setSelectedOption(option)
    };

    return (
        <View>
            <TouchableWithoutFeedback onPress={() => setIsOpen(!isOpen)}>
                <View className='flex flex-row 
                bg-secondary items-center gap-3 px-2 py-3 
                rounded-lg shadow-2xl max-w-20'>
                    {isOpen ? (
                        <AntDesign name="up" size={15} color="black" />
                    ) : (
                        <AntDesign name="down" size={15} color="black" />
                    )}
                    <Text className='font-semibold'>
                        {selectedOption}
                    </Text>
                </View>
            </TouchableWithoutFeedback>

            {isOpen && (
                <View className='bg-white mt-2 rounded-lg 
                shadow-lg max-w-10'>
                    <TouchableOpacity onPress={() => handleOptionSelect('Newest')}>
                        <Text className='px-4 py-2'>
                            Newest
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleOptionSelect('Most Urgent')}>
                        <Text className='px-4 py-2'>
                            Most Urgent
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}
