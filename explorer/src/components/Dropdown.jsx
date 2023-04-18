import style from './Dropdown.module.scss';


const Dropdown = (
    {
        options = [],
        defaultValue = '',
        borderColor = '#000',
        onChange = null,
        id_name = '',
        className = '',
    }) => {

    const optionElements = Array.from(options).map((value, index) => {
        return <option value={value} key={index}>{value}</option>
    })

    const onValueChange = (event) => {
        if (typeof onChange === 'function') {
            onChange(event.target.value)
        }
    }

    return (
        <select
            className={`${style.select} ${className}`}
            style={{ borderColor: borderColor }}
            defaultValue={defaultValue}
            onChange={onValueChange}
            id={id_name}
            name={id_name}
        >
            <option value="" disabled hidden>Choose</option>
            {optionElements}
        </select>
    );
}

export default Dropdown;
