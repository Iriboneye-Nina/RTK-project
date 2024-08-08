import { useState } from 'react';
import Link from 'next/link';
import { Card } from 'antd';
import { useGetHousesQuery } from '@/Features/api/gotApi';

const Home = () => {
  const { data: houses, error, isLoading } = useGetHousesQuery(); 
  const [search, setSearch] = useState('');

  const filteredHouses = houses?.filter((house: any) =>
    house.name.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center">
      <div className="container mx-auto p-6 ">
        <h1 className="text-3xl font-bold mb-6 text-center">Game of Thrones Houses</h1>
        <input
          type="text"
          placeholder="Search for a house..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 border border-gray-300 text-black rounded mb-6 w-full"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHouses?.map((house: any) => (
            <Card
              key={house.url}
              title={house.name}
              bordered={false}
              className="w-full"
              extra={
                <Link href={`/houses/${house.url.split('/').pop()}`} legacyBehavior>
                  <a className="text-blue-500 hover:text-blue-700 transition">View Details</a>
                </Link>
              }
            >
              <p><strong>Region:</strong> {house.region}</p>
              <p><strong>Coat of Arms:</strong> {house.coatOfArms}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
