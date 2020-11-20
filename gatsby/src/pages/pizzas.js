import React from 'react';
import { graphql } from 'gatsby';

import { PizzaList } from '../components/PizzaList';
import { ToppingsFilter } from '../components/ToppingsFilter';

export default function PizzasPage({ data }) {
  const pizzas = data?.pizzas?.nodes;

  return (
    <div>
      <ToppingsFilter />
      <PizzaList pizzas={pizzas} />
    </div>
  );
}

export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        id
        name
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fixed(width: 200, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
