const Square = (props) => {
    const { onClick, value } = props;
    return (
        <div className='square'>
            <button disabled= {value} className={`square-button ${value}`} onClick={onClick}>{value}</button>
        </div>
    );
};
export default Square;