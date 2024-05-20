import React, { Dispatch, SetStateAction, useState } from 'react';
import { Text, TouchableWithoutFeedback, View, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export const SortingDropdown: React.FC<{
    setSortMethod:Dispatch<SetStateAction<"Most Urgent" | "Newest">>
}> = ({setSortMethod}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Newest');

    const handleOptionSelect = (option: "Newest" | "Most Urgent") => {
        setSortMethod(option)
        setIsOpen(false);
        setSelectedOption(option)
    };

    return (
        <View className={`absolute -right-32 ${selectedOption === "Most Urgent" ? "-top-4" : "top-0"}`}>
            <TouchableWithoutFeedback onPress={() => setIsOpen(!isOpen)}>
                <View className='flex flex-row 
                bg-secondary items-center gap-3 px-2 py-3 
                rounded-lg shadow-2xl w-28'>
                    {isOpen ? (
                        <AntDesign name="up" size={15} color="black" />
                    ) : (
                        <AntDesign name="down" size={15} color="black" />
                    )}
                    <Text className='font-semibold w-20'>
                        {selectedOption}
                    </Text>
                </View>
            </TouchableWithoutFeedback>

            {isOpen && (
                <View className='bg-white mt-2 rounded-lg 
                shadow-lg max-w-10 w-28'>
                    <TouchableOpacity onPress={() => handleOptionSelect('Newest')}>
                        <Text className='px-4 py-2 w-auto'>
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
