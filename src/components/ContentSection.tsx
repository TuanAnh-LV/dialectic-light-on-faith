import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle, Info, Lightbulb } from "lucide-react";

const ContentSection = () => {
  return (
    <section id="content" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Đặt vấn đề
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
          Khám phá mối quan hệ giữa chủ nghĩa duy vật biện chứng và tôn giáo
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Info className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Tôn giáo là gì?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Hiện tượng xã hội phổ biến, xuất hiện sớm trong lịch sử nhân loại. Phản ánh thế giới quan duy tâm, 
                coi nguồn gốc vũ trụ và đời sống do các lực lượng siêu nhiên quyết định.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>CNDC là gì?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Chủ nghĩa Marx-Lenin dựa trên thế giới quan duy vật biện chứng, cho rằng bản chất của mọi hiện tượng 
                nằm trong các quy luật khách quan của tự nhiên, xã hội và tư duy.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <AlertCircle className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle>Hiểu lầm phổ biến</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nhiều người hiểu lầm rằng chủ nghĩa duy vật biện chứng chủ trương xóa bỏ tôn giáo bằng bạo lực. 
                Thực tế, Marxism xem tôn giáo như hiện tượng lịch sử-xã hội cần giải quyết khoa học.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-medium bg-accent/5 border-accent/20">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-8 w-8 text-accent" />
              <CardTitle className="text-2xl">Kết luận quan trọng</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground leading-relaxed">
              <strong>Chủ nghĩa duy vật biện chứng KHÔNG chủ trương xóa bỏ tôn giáo bằng bạo lực</strong>, 
              mà giải quyết bằng con đường khoa học, tiến bộ và nhân văn. Tôn giáo là hiện tượng lịch sử 
              sẽ tự tiêu vong khi xã hội phát triển, xóa bỏ nghèo đói, áp bức và lạc hậu.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContentSection;
