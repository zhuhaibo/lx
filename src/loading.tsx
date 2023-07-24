export default function () {
    return (
        <div style={{
            position: 'absolute',
            left: 0, 
            top: 0,
            background: 'rgba(0,0,0,0.3)', 
            width: '100%', 
            height: '100%',
            fontSize: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            backdropFilter: 'blur(5px)'
        }}>loading...</div>
    )
}