import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-content-center">
      <Card title="Unauthorized Access" className="w-30rem mt-8">
        <p className="m-0">
          You don't have permission to access this page. Please contact an administrator
          if you believe this is a mistake.
        </p>
        <div className="mt-4">
          <Button label="Go Back" onClick={() => navigate(-1)} />
        </div>
      </Card>
    </div>
  );
}; 