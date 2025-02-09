import React, { useEffect, useState } from 'react';

const ExampleComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-70">
      {isClient && (
        <div>
          {/* Client-specific code here */}
        </div>
      )}
    </div>
  );
};

export default ExampleComponent;
