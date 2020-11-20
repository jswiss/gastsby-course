import { FaPepperHot as pepperIcon } from 'react-icons/fa';

export default {
  name: 'topping',
  title: 'Toppings',
  type: 'document',
  // icon: () => '🍕',
  icon: pepperIcon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'Name of the topping',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'is the topping vegetarian',
    },
  ],
  preview: {
    select: { name: 'name', vegetarian: 'vegetarian', vegan: 'vegan' },
    prepare: ({ name, vegetarian, vegan }) => {
      const isVegetarian = vegetarian ? '🌱' : '';

      return {
        title: `${name} ${isVegetarian}`,
      };
    },
  },
};
