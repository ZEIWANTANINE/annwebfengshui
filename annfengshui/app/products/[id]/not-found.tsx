import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ann-ivory flex items-center justify-center pt-24 pb-16">
      <div className="text-center px-4">
        <h1 className="text-6xl font-serif font-bold text-ann-dark mb-4">
          404
        </h1>
        <h2 className="text-3xl font-serif font-bold text-ann-dark mb-4">
          Không tìm thấy sản phẩm
        </h2>
        <p className="text-lg text-ann-stone mb-8 max-w-md mx-auto">
          Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="bg-ann-dark text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-ann-stone transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Xem tất cả sản phẩm
          </Link>
          <Link
            href="/"
            className="bg-white border-2 border-ann-dark text-ann-dark px-8 py-4 rounded-lg text-lg font-semibold hover:bg-ann-ivory transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}

