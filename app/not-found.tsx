export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ fontSize: '4rem', margin: '0' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', margin: '1rem 0', fontWeight: 'normal' }}>
        Page Not Found
      </h2>
      <p style={{ color: '#666', margin: '1rem 0' }}>
        The page you are looking for does not exist.
      </p>
      <a 
        href="/" 
        style={{
          color: '#0070f3',
          textDecoration: 'none',
          fontSize: '1.1rem',
          padding: '0.5rem 1rem',
          border: '1px solid #0070f3',
          borderRadius: '5px',
          transition: 'all 0.2s'
        }}
      >
        Go Home
      </a>
    </div>
  );
}
