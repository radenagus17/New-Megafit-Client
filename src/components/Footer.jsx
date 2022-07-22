const Footer = () => {
  return (
    <div className="w-full mt-0 lg:mt-40 bg-slate-900 text-white px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 mx-auto max-w-screen-2xl border-b-2 border-gray-600 py-6 md:px-8">
        <div className="md:order-1 text-sm md:text-lg">
          <h4>PT. Pola Megafit Prima</h4>
          <p>Megafit Fitness Center</p>
        </div>
        <div className="md:order-last text-[0.65rem] md:text-sm pl-4 md:pl-0">
          <ul>
            <li className="pt-1 md:pt-0 flex items-center">
              <span className="text-3xl pr-2">
                <ion-icon name="pin"></ion-icon>
              </span>
              Rukan Great Wall A21-25 Green Lake City, Cipondoh, Jl. Green Lake City Boulevard No.25, RT.005/RW.008, Petir, Cipondoh, Tangerang City, Banten 15147
            </li>
            <li className="pt-1 md:pt-2 flex items-center">
              <span className="text-3xl pr-2">
                <ion-icon name="call"></ion-icon>
              </span>
              <div className="flex flex-col">
                <p>021 5401394</p>
                <p>0813-1776-2785</p>
              </div>
            </li>
            <li className="pt-1 md:pt-2 flex items-center">
              <span className="text-3xl pr-2">
                <ion-icon name="logo-instagram"></ion-icon>
              </span>
              @megafit.id
            </li>
            <li className="pt-1 md:pt-2 flex items-center">
              <span className="text-3xl pr-2">
                <ion-icon name="globe"></ion-icon>
              </span>
              info@megafit.co.id
            </li>
          </ul>
        </div>
        <div className="md:order-2 text-xl md:text-4xl font-bold tracking-wide col-span-2 md:text-center pr-0 md:pr-6">
          <h1>
            Gym terbesar <span className="block">di Green Lake City</span>
          </h1>
        </div>
      </div>
      <div className="flex max-w-screen-xl m-auto flex-col text-center text-gray-500 py-5 text-xs md:text-sm">
        <ul className="flex md:flex-row m-auto pb-3">
          <li>Kebijakan Legal</li>
          <li className="mx-6 md:mx-16">Kebijakan Pribadi & Cookie</li>
          <li>Hubungi Kami</li>
        </ul>
        <p>@2022</p>
      </div>
    </div>
  );
};

export default Footer;
