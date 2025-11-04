import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ContentSection from "@/components/ContentSection";
import TheorySection from "@/components/TheorySection";
import VietnamSection from "@/components/VietnamSection";
import InteractiveSection from "@/components/InteractiveSection";
import ReferencesSection from "@/components/ReferencesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ContentSection />
      <TheorySection />
      <VietnamSection />
      <InteractiveSection />
      <ReferencesSection />
      
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p className="mb-2">
            © 2025 - Dự án Lý luận Chính trị | Chủ nghĩa duy vật biện chứng & Tôn giáo
          </p>
          <p className="text-sm">
            Được thiết kế với mục đích giáo dục và thuyết trình học thuật
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
