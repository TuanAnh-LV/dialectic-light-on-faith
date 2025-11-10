import { ReactNode } from "react";

interface DialogueBubbleProps {
  speaker: string;
  avatar: string;
  children: ReactNode;
  position?: "left" | "right";
  delay?: number;
}

const DialogueBubble = ({ speaker, avatar, children, position = "left", delay = 0 }: DialogueBubbleProps) => {
  const isLeft = position === "left";
  
  return (
    <div 
      className={`flex items-start gap-4 mb-8 animate-slideUp ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-primary shadow-large animate-pulse-glow">
            <img 
              src={avatar} 
              alt={speaker}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap shadow-medium">
            {speaker}
          </div>
        </div>
      </div>
      
      <div className={`flex-1 relative ${isLeft ? 'text-left' : 'text-right'}`}>
        <div className={`inline-block max-w-4xl ${isLeft ? 'bg-primary/10 border-l-4 border-primary' : 'bg-accent/10 border-r-4 border-accent'} rounded-lg p-6 shadow-medium`}>
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </div>
        
        {/* Speech bubble arrow */}
        <div 
          className={`absolute top-6 w-0 h-0 border-t-8 border-b-8 border-transparent ${
            isLeft 
              ? '-left-2 border-r-8 border-r-primary/10' 
              : '-right-2 border-l-8 border-l-accent/10'
          }`}
        />
      </div>
    </div>
  );
};

export default DialogueBubble;
