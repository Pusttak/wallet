import Select from 'react-select';
import { selectStyles } from './addTransactionFormSelect.styled';

const options = [
  { value: 'Main', label: 'Main' },
  { value: 'Food', label: 'Food' },
  { value: 'Auto', label: 'Auto' },
  { value: 'Development', label: 'Development' },
  { value: 'Children', label: 'Children' },
  { value: 'House', label: 'House' },
  { value: 'Education', label: 'Education' },
  { value: 'Other', label: 'Other' },
];

export const MySelect = props => (
  <Select
    options={options}
    isClearable
    placeholder="Select a category"
    styles={selectStyles}
    maxMenuHeight={350}
    closeMenuOnClick={false}
    {...props}
  />
);
