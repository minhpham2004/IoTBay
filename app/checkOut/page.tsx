import React from 'react';

interface OrderItem {
  name: string;
  style: string;
  size: string;
  color: string;
  price: number;
  originalPrice: number;
  quantity: number;
  image: string;
}

interface Order {
  orderNumber: string;
  date: string;
  items: OrderItem[];
  total: number;
}

const OrderHistoryItem: React.FC<Order> = ({ orderNumber, date, items, total }) => {
  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col">
        <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #{orderNumber}</h1>
        <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">{date}</p>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">{item.name}</p>
            <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
              <div className="pb-4 md:pb-8 w-full md:w-40">
                <img className="w-full hidden md:block" src={`https://i.ibb.co/${item.image}`} alt={item.name} />
                <img className="w-full md:hidden" src={`https://i.ibb.co/${item.image}`} alt={item.name} />
              </div>
              <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Style: </span>{item.style}</p>
                    <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Size: </span>{item.size}</p>
                    <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Color: </span>{item.color}</p>
                  </div>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  <p className="text-base dark:text-white xl:text-lg leading-6">${item.price.toFixed(2)} <span className="text-red-300 line-through"> ${item.originalPrice.toFixed(2)}</span></p>
                  <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">{item.quantity}</p>
                  <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Summary and Shipping sections */}
    </div>
  );
};

const OrderHistory: React.FC = () => {
  const orders: Order[] = [
    {
      orderNumber: '13432',
      date: '21st Mart 2021 at 10:34 PM',
      items: [
        {
          name: 'Premium Quaility Dress',
          style: 'Italic Minimal Design',
          size: 'Small',
          color: 'Light Blue',
          price: 36.00,
          originalPrice: 45.00,
          quantity: 1,
          image: '84qQR4p/Rectangle-10.png',
        },
        {
          name: 'High Quaility Italic Dress',
          style: 'Italic Minimal Design',
          size: 'Small',
          color: 'Light Blue',
          price: 20.00,
          originalPrice: 30.00,
          quantity: 1,
          image: 's6snNx0/Rectangle-17.png',
        },
      ],
      total: 36.00,
    },
    // More orders can be added here
  ];

  return (
    <div>
      {orders.map((order, index) => (
        <OrderHistoryItem key={index} {...order} />
      ))}
    </div>
  );
};

export default OrderHistory;