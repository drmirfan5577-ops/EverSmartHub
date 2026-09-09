import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-display font-bold gradient-text mb-4">404</div>
        <h1 className="font-display font-bold text-2xl mb-3">Page not found</h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="gradient-brand border-0 text-white rounded-xl">
            <Link to="/">
              <Home size={16} className="mr-2" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl" onClick={() => window.history.back()}>
            <button>
              <ArrowLeft size={16} className="mr-2" />
              Go Back
            </button>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
