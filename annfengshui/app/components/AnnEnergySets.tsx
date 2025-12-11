import Image from "next/image";

const sets = [
  {
    name: '🌞 Energy & Vitality Set',
    description: 'Khơi dậy sức sống và sự tự tin nội tại',
    image: '/product1.jpg',
    color: 'bg-ann-gold',
  },
  {
    name: '🌙 Peace & Sleep Set',
    description: 'Ngủ sâu – tĩnh tâm – an nhiên',
    image: '/product2.jpg',
    color: 'bg-ann-green',
  },
  {
    name: '🌸 Beauty & Glow Set',
    description: 'Tỏa sáng từ năng lượng yêu thương',
    image: '/product3.jpg',
    color: 'bg-ann-green', // Replaced pink with a brand color
  },
  {
    name: '💼 Success & Focus Set',
    description: 'Tập trung và thu hút vận khí may mắn',
    image: '/product5.jpg',
    color: 'bg-ann-stone',
  },
];

const AnnEnergySets = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-ann-dark">Ann Energy Collection</h2>
          <p className="text-lg text-ann-stone mt-4 max-w-2xl mx-auto">Các bộ sản phẩm được thiết kế đặc biệt để cân bằng và nâng cao các khía cạnh khác nhau trong cuộc sống của bạn.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sets.map((set) => (
            <div key={set.name} className={`p-8 rounded-xl shadow-lg text-center bg-white border border-gray-100 hover:border-ann-gold hover:shadow-2xl transition-all duration-300 flex flex-col items-center`}>
              <div className="w-40 h-40 rounded-full mb-6 relative overflow-hidden">
                <Image src={set.image} alt={set.name} layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 text-ann-dark">{set.name}</h3>
              <p className="text-ann-stone mb-6 text-sm flex-grow">{set.description}</p>
              <button className="bg-ann-dark text-white font-bold py-2 px-6 rounded-full hover:bg-ann-gold hover:text-ann-dark transition-colors duration-300 mt-auto">Mua ngay</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnEnergySets;