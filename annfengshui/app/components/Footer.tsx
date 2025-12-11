const Footer = () => {
  return (
    <footer className="bg-ann-dark text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-serif font-bold">Ann Gem & Fengshui</h3>
            <p className="text-gray-400">Energy from the Earth</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-ann-gold transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-ann-gold transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-ann-gold transition-colors">Zalo</a>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
          <p>&copy; 2025 Ann Gem & Fengshui. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;