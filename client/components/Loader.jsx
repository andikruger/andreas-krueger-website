import { useState, useEffect } from "react";

function LoadingIndicator() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-800 opacity-75">
          <div className="spinner"></div>
        </div>
      )}
      <style jsx>{`
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-left-color: #3498db;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}

export default LoadingIndicator;
