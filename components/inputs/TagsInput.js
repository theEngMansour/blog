import { TextField, FormControl, Autocomplete} from '@mui/material';
import { FormattedMessage } from 'react-intl';

export default function TagsInput({ name, label, onChange, ...props }) {
    return (
        <FormControl fullWidth>
            <Autocomplete
                {...props}
                multiple
                disableCloseOnSelect
                autoComplete={false}
                getOptionLabel={(option) => option.label}
                onChange={(event, selected) => { onChange(selected)}}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant='outlined'
                        className="text-sm rounded-lg shadow-sm border-0 focus:outline-[#57be6d] text-gray-500 bg-white" 
                        label={
                            <FormattedMessage id={label} defaultMessage={label} />
                        }
                    />
                )}
            />
        </FormControl>
    )

}