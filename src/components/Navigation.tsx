import { useState, useEffect } from "react";
import { BookOpen, Lightbulb, Flag, MessageCircle, FileText } from "lucide-react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);

      const sections = ["content", "theory", "vietnam", "interactive", "references"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "content", label: "Nội dung", icon: BookOpen },
    { id: "theory", label: "Lý thuyết", icon: Lightbulb },
    { id: "vietnam", label: "Việt Nam", icon: Flag },
    { id: "interactive", label: "Tương tác", icon: MessageCircle },
    { id: "references", label: "Tài liệu", icon: FileText },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-medium transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-2 md:space-x-6">
          {navItems.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === id
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden md:inline">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
