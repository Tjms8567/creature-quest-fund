import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PresentationSection = () => {
  // Placeholder presentations - will be populated from CMS later
  const presentations = [
    {
      title: "Project Overview & Vision",
      description: "Complete overview of Creatures of Faith series, production timeline, and creative vision",
      size: "2.5 MB"
    },
    {
      title: "Character Design & Storyboards",
      description: "Detailed character designs, visual development, and episode storyboards",
      size: "5.8 MB"
    },
    {
      title: "Marketing & Distribution Strategy",
      description: "Our approach to reaching Muslim families worldwide through various platforms",
      size: "1.9 MB"
    }
  ];

  return (
    <section id="presentation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <FileText className="h-8 w-8" />
              <span className="text-sm font-semibold tracking-wider uppercase">Learn More</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Presentation & Resources
            </h2>
            <p className="text-xl text-muted-foreground">
              Download our detailed presentations to learn more about the project
            </p>
          </div>

          <div className="space-y-6">
            {presentations.map((presentation, index) => (
              <div 
                key={index}
                className="group bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-elegant animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {presentation.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {presentation.description}
                      </p>
                      <span className="text-xs text-muted-foreground">
                        PowerPoint • {presentation.size}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="flex-shrink-0">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-muted rounded-xl text-center">
            <p className="text-sm text-muted-foreground">
              Need more information? Contact us at{" "}
              <a href="mailto:info@ayahmotionpictures.com" className="text-primary hover:underline">
                info@ayahmotionpictures.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
