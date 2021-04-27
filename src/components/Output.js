const Output = ({output}) => {
    return (
        <div style={{
            fontFamily: 'Courier New, monospace',
            fontSize: '18px',
            backgroundColor: 'darkslategray',
            color: 'white',
            borderRadius: '8px',
            padding: '20px 25px'
        }}>
            {JSON.stringify(output)}
        </div>
    );
}

export default Output;