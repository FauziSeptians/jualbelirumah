export default function AboutUsPage() {
  return (
    <div className="w-full h-[820px] overflow-x-auto  flex flex-col gap-10">
      <div className="text-[24px] font-semibold">About Us Pages</div>
      <section className="w-full h-[900px]  p-10 flex justify-center items-center bg-[#ffd34e]">
        <div className="w-[30%] h-full flex justify-center items-center">
          <img src="/logo.png" width={400}></img>
        </div>
        <div className="w-[70%] h-full flex justify-center items-center">
          <div className="flex flex-col gap-6">
            <div className="text-[20px] font-semibold">TPROPERTY</div>
            <div className="w-[700px] text-justify flex flex-col gap-6">
              <div>
                Prestasi Property adalah perusahaan agen properti yang
                berkomitmen untuk menyediakan solusi properti terbaik bagi klien
                kami. Dengan tim yang berpengalaman dan berdedikasi, kami telah
                melayani berbagai kebutuhan properti dari pembelian, penjualan,
                hingga penyewaan. Kami memahami bahwa setiap properti memiliki
                cerita dan nilai yang unik, itulah sebabnya kami mengambil
                pendekatan yang personal dan berorientasi pada kebutuhan klien
                kami. Dengan pengetahuan yang mendalam tentang pasar properti
                lokal, kami dapat memberikan saran yang relevan dan solusi yang
                efektif. Komitmen kami terhadap kejujuran, integritas, dan
                pelayanan pelanggan telah menjadi landasan dalam membangun
                hubungan yang kuat dengan klien kami. Kami percaya bahwa
                kepuasan klien adalah prioritas utama, dan kami berusaha keras
                untuk memastikan setiap transaksi berjalan dengan lancar dan
                sukses. Selain itu, kami senantiasa mengikuti perkembangan
                terbaru dalam industri properti dan menggunakan teknologi
                terkini untuk memperluas jangkauan kami dan meningkatkan
                efisiensi layanan kami. Jika Anda mencari mitra properti yang
                dapat diandalkan untuk membantu mencapai tujuan properti Anda,
                Perstasi Property siap membantu. Hubungi kami hari ini untuk
                konsultasi gratis dan mulailah perjalanan Anda menuju kesuksesan
                properti dengan percaya diri dan keyakinan.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-services">
        <div className="w-full h-[200px] flex flex-col gap-6 justify-center items-center ">
          <div className="text-[24px] font-semibold">Our Services</div>
          <div className="text-[30px] font-bold ">
            Bagaimana Tproperty membantu anda dalam mencari rumah impian
          </div>
          <div className="flex gap-6">
            <div>bla bla</div>
            <div>bla bla</div>
            <div>bla bla</div>
            <div>bla bla</div>
          </div>
        </div>
      </section>
      <section id="our-services bg-red-200 " className="bg-[#ffd34e] p-5">
        <div className="w-full h-fit flex flex-col gap-6 justify-center items-center   ">
          <div className="text-[24px] font-semibold">Our Services</div>
          <div className="text-[30px] font-bold ">
            Bagaimana Tproperty membantu anda dalam mencari rumah impian
          </div>
          <div className="flex w-full  gap-6  mx-5 text-justify">
            <div className="w-[50%] p-10">
              <div className="text-[20px] font-semibold">Visi</div>
              <div>
                Menjadi agen properti terkemuka yang memberikan layanan terbaik,
                inovatif, dan profesional kepada setiap klien, serta menjadi
                mitra terpercaya dalam memenuhi kebutuhan properti mereka.
              </div>
            </div>
            <div className="w-[50%] p-10">
              <div className="text-[20px] font-semibold">Misi</div>

              <div>
                Memberikan layanan yang personal dan berkualitas tinggi kepada
                setiap klien untuk membantu mereka mencapai tujuan properti
                mereka. Menyediakan informasi dan saran yang akurat serta
                terkini tentang pasar properti untuk membantu klien membuat
                keputusan yang tepat. Memastikan transparansi dan kejujuran
                dalam setiap transaksi properti yang kami lakukan. Mengutamakan
                inovasi dalam pemasaran properti untuk meningkatkan visibilitas
                dan nilai properti klien. Terus meningkatkan keahlian dan
                pengetahuan tim kami melalui pelatihan dan pengembangan
                profesional secara berkala. Berkomitmen untuk membangun hubungan
                jangka panjang dengan setiap klien dengan memprioritaskan
                kepuasan mereka sebagai prioritas utama.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="our-services">
        <div className="w-full  flex flex-col gap-6 justify-center items-center ">
          <div className="text-[24px] font-semibold">Property Gallery</div>
          <div className="text-[30px] font-bold ">
            Property terbaik yang dijual oleh agent kami
          </div>
          <div className=" grid grid-cols-4 gap-6">
            {Array(8)
              .fill([])
              .map((item) => {
                return (
                  <div className="w-[200px] h-[200px] bg-white rounded-lg"></div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
