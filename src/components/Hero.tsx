import { ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-philosophy.jpg";

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/70" />
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-secondary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in space-y-8">
          <div className="inline-block mb-4 animate-pulse">
            <Sparkles className="h-12 w-12 text-secondary" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight drop-shadow-lg">
            Chủ nghĩa duy vật biện chứng
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-primary-foreground mb-8 drop-shadow-md">
            có chủ trương xóa bỏ tôn giáo không?
          </h2>
          
          <div className="max-w-3xl mx-auto bg-card/20 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-primary-foreground/20">
            <p className="text-xl md:text-2xl text-primary-foreground">
              Khám phá quan điểm khoa học của chủ nghĩa Marx-Lenin về tôn giáo và chính sách của Việt Nam
            </p>
          </div>
          
          <Button 
            onClick={scrollToContent}
            size="lg"
            variant="secondary"
            className="text-lg px-10 py-7 shadow-large hover:shadow-xl transition-all duration-500 hover:scale-110 group animate-pulse-glow"
          >
            <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
            Khám phá ngay
            <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;
