import { useGetHouseDetailsQuery } from '@/Features/api/gotApi';
import { useRouter } from 'next/router';
import { Card } from "antd";

const HouseDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: house, error, isLoading } = useGetHouseDetailsQuery(id as string);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
        <Card
          title={house.name}
          bordered={false}
          className="w-full"
          style={{ maxWidth: 600 }}
        >
          <div className="text-lg">
            <p><strong>Region:</strong> {house.region}</p>
            <p><strong>Coat of Arms:</strong> {house.coatOfArms}</p>
            <p><strong>Current Lord:</strong> {house.currentLord}</p>
            <p><strong>Overlord:</strong> {house.overlord}</p>
            <p><strong>Founded:</strong> {house.founded}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HouseDetails;

