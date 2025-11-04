import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flag, Users, BookCheck, Heart } from "lucide-react";

const VietnamSection = () => {
  return (
    <section id="vietnam" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-4">
          <Flag className="h-10 w-10 text-primary mr-3" />
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground">
            Chính sách tôn giáo của Việt Nam
          </h2>
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
          Kiên định chủ nghĩa Marx-Lenin và tư tưởng Hồ Chí Minh về vấn đề tôn giáo
        </p>

        <div className="max-w-6xl mx-auto space-y-8">
          <Card className="shadow-medium bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Quote className="h-8 w-8 text-primary mr-3" />
                Lời dạy của Chủ tịch Hồ Chí Minh
              </CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="border-l-4 border-primary pl-6 py-4 bg-background/50 rounded-r-lg">
                <p className="text-xl italic text-foreground leading-relaxed">
                  "Tín ngưỡng, tôn giáo là nhu cầu tinh thần của một bộ phận nhân dân, cho nên tôn trọng 
                  tự do tín ngưỡng là một chính sách nhất quán của Đảng và Nhà nước ta."
                </p>
                <footer className="mt-4 text-muted-foreground font-semibold">— Chủ tịch Hồ Chí Minh</footer>
              </blockquote>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <BookCheck className="h-8 w-8 text-accent mr-3" />
                Hiến pháp 2013 - Điều 24
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg">
                <p className="text-lg text-foreground leading-relaxed">
                  "Mọi người có quyền <strong>tự do tín ngưỡng, tôn giáo</strong>, theo hoặc không theo 
                  một tôn giáo nào. Các tôn giáo <strong>bình đẳng trước pháp luật</strong>. Không ai được 
                  xâm phạm tự do tín ngưỡng, tôn giáo hoặc <strong>lợi dụng tín ngưỡng, tôn giáo để vi phạm pháp luật</strong>."
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Nội dung chính sách</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Tôn trọng và bảo đảm quyền tự do tín ngưỡng",
                    "Công dân theo đạo và không theo đạo đều bình đẳng",
                    "Tôn giáo có thể tồn tại lâu dài trong thời kỳ quá độ",
                    "Nhà nước quản lý bằng pháp luật",
                    "Đoàn kết tôn giáo gắn liền với đoàn kết dân tộc"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Minh chứng thực tiễn</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "43 tổ chức tôn giáo được Nhà nước công nhận",
                    "Hơn 26 triệu tín đồ (≈27% dân số)",
                    "Các lễ hội lớn: Vesak, Giáng sinh, Ramadan...",
                    "Phong trào 'Sống tốt đời, đẹp đạo'",
                    "Tôn giáo đồng hành cùng dân tộc"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary font-bold mr-2">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-large bg-gradient-hero text-primary-foreground">
            <CardContent className="py-8">
              <div className="text-center max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Hình ảnh ẩn dụ</h3>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                  <p className="text-lg leading-relaxed">
                    <strong>Tôn giáo là "cái bóng" của xã hội cũ.</strong><br />
                    Chủ nghĩa xã hội không đánh vào cái bóng, mà xây dựng "nguồn ánh sáng mới" – 
                    một xã hội công bằng, văn minh, nhân đạo.<br />
                    <strong>Khi ánh sáng ấy lan tỏa, cái bóng sẽ tự tan biến.</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Quote = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21C3 17.134 3 15.201 4.1005 13.9005C5.201 12.6 7.134 12.6 11 12.6C14.866 12.6 16.799 12.6 17.8995 13.9005C19 15.201 19 17.134 19 21" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 3V12.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19 12.6V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 8.1C9 6.06 7.433 4.4 5.5 4.4C3.567 4.4 2 6.06 2 8.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M13 8.1C13 6.06 14.567 4.4 16.5 4.4C18.433 4.4 20 6.06 20 8.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default VietnamSection;
