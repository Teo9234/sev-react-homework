const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'blueviolet' }}>
            <p>&copy; {currentYear} First assignment.</p>
        </footer>
    );
}

export default Footer;