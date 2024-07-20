import {gql} from '@apollo/client';

export const createFakultas = gql`
  mutation createFakultas($name: String!) {
    createFakultas(name: $name) {
      id
      name
    }
  }
`;
export const updateFakultas = gql`
  mutation updateFakultas($id: ID!, $name: String!) {
    updateFakultas(id: $id, name: $name) {
      id
      name
    
    }
  }
`;
export const deleteFakultas = gql`
  mutation deleteFakultas($id: ID!) {
    deleteFakultas(id: $id) {
      id
      name
    }
  }
`;
