export const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
      <footer className="footer">
        <p>Copyright &copy; {currentYear}</p>
      </footer>
    );
  }