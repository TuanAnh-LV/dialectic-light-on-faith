import { Card, CardContent } from "@/components/ui/card";
import { Flag, Users, Heart, BookOpen, Scale } from "lucide-react";
import DialogueBubble from "./DialogueBubble";
import hoChiMinhPortrait from "@/assets/hochiminh-portrait.jpg";
import vietnamHarmony from "@/assets/vietnam-harmony.jpg";

const VietnamSection = () => {
  return (
    <section id="vietnam" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-10">
        <img src={vietnamHarmony} alt="Vietnam harmony" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <Flag className="h-12 w-12 text-primary animate-bounce-gentle" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            🎭 Chính sách tôn giáo của Việt Nam
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Áp dụng sáng tạo chủ nghĩa Marx-Lenin và tư tưởng Hồ Chí Minh
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Màn 1: Tư tưởng Hồ Chí Minh */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">🎬 Màn 1: Lời dạy của Bác Hồ</h3>
              <p className="text-muted-foreground italic">Chủ tịch Hồ Chí Minh về chính sách tôn giáo</p>
            </div>

            <DialogueBubble speaker="Chủ tịch Hồ Chí Minh" avatar={hoChiMinhPortrait} position="left" delay={200}>
              <p className="text-foreground leading-relaxed mb-4">
                Các cháu ơi, Bác muốn nói với các cháu về chính sách tôn giáo của Đảng và Nhà nước ta:
              </p>
              <blockquote className="border-l-4 border-primary pl-4 my-4 italic text-xl">
                "Tín ngưỡng, tôn giáo là <strong>nhu cầu tinh thần</strong> của một bộ phận nhân dân, 
                cho nên <strong>tôn trọng tự do tín ngưỡng</strong> là một chính sách <strong>nhất quán</strong> của 
                Đảng và Nhà nước ta."
              </blockquote>
              <p className="text-foreground/90">
                Điều này có nghĩa là chúng ta <strong className="text-primary">tôn trọng</strong> quyền tự do tín ngưỡng của nhân dân. 
                Người theo đạo hay không theo đạo đều là con em của Tổ quốc, đều <strong>bình đẳng</strong> về quyền và nghĩa vụ!
              </p>
            </DialogueBubble>
          </div>

          {/* Màn 2: Hiến pháp và pháp luật */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-accent mb-2">🎬 Màn 2: Cơ sở pháp lý</h3>
              <p className="text-muted-foreground italic">Hiến pháp 2013 bảo vệ quyền tự do tín ngưỡng</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="shadow-large border-accent/30 animate-slideUp" style={{ animationDelay: '400ms' }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Scale className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-accent mb-2">Hiến pháp 2013 - Điều 24</h4>
                      <p className="text-sm text-muted-foreground">Quyền tự do tín ngưỡng, tôn giáo</p>
                    </div>
                  </div>
                  <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg">
                    <p className="text-lg text-foreground leading-relaxed">
                      "Mọi người có quyền <strong className="text-primary">tự do tín ngưỡng, tôn giáo</strong>, 
                      theo hoặc không theo một tôn giáo nào. Các tôn giáo <strong className="text-accent">bình đẳng trước pháp luật</strong>. 
                      Không ai được xâm phạm tự do tín ngưỡng, tôn giáo hoặc <strong className="text-destructive">lợi dụng tín ngưỡng, 
                      tôn giáo để vi phạm pháp luật</strong>."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Màn 3: Nội dung chính sách */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-secondary mb-2">🎬 Màn 3: Nội dung chính sách tôn giáo</h3>
              <p className="text-muted-foreground italic">Đại diện Nhà nước Việt Nam trình bày 5 nội dung cốt lõi</p>
            </div>

            <DialogueBubble 
              speaker="Đại diện Nhà nước Việt Nam" 
              avatar={hoChiMinhPortrait} 
              position="right" 
              delay={600}
            >
              <p className="text-foreground leading-relaxed mb-4">
                Chính sách tôn giáo của Việt Nam có <strong>5 nội dung cốt lõi</strong>:
              </p>
              <div className="space-y-3">
                {[
                  { icon: "✅", title: "Tôn trọng và bảo đảm quyền tự do tín ngưỡng", color: "primary" },
                  { icon: "⚖️", title: "Công dân theo đạo và không theo đạo đều bình đẳng", color: "accent" },
                  { icon: "🕰️", title: "Tôn giáo có thể tồn tại lâu dài trong thời kỳ quá độ", color: "secondary" },
                  { icon: "📜", title: "Nhà nước quản lý bằng pháp luật", color: "primary" },
                  { icon: "🤝", title: "Đoàn kết tôn giáo gắn liền với đoàn kết dân tộc", color: "accent" }
                ].map((item, index) => (
                  <div key={index} className={`flex items-start gap-3 bg-${item.color}/5 border-l-4 border-${item.color} p-4 rounded-r-lg`}>
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <p className="text-foreground font-medium">{item.title}</p>
                  </div>
                ))}
              </div>
            </DialogueBubble>
          </div>

          {/* Màn 4: Thực tiễn */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">🎬 Màn 4: Minh chứng thực tiễn</h3>
              <p className="text-muted-foreground italic">Kết quả áp dụng chính sách tôn giáo tại Việt Nam</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-medium hover:shadow-large transition-all duration-300 animate-slideUp" style={{ animationDelay: '800ms' }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold">Số liệu thống kê</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { icon: "🏛️", text: "43 tổ chức tôn giáo được công nhận" },
                      { icon: "👥", text: "Hơn 26 triệu tín đồ (≈27% dân số)" },
                      { icon: "⛪", text: "Hàng nghìn cơ sở tôn giáo" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-muted-foreground">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-medium hover:shadow-large transition-all duration-300 animate-slideUp" style={{ animationDelay: '1000ms' }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Heart className="h-6 w-6 text-secondary" />
                    </div>
                    <h4 className="text-xl font-bold">Hoạt động thực tế</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { icon: "🎊", text: "Đại lễ Phật đản Vesak Liên Hợp Quốc" },
                      { icon: "🎄", text: "Lễ Giáng sinh, Ramadan được tổ chức tự do" },
                      { icon: "🌟", text: "Phong trào 'Sống tốt đời, đẹp đạo'" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-muted-foreground">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Kết thúc vở kịch */}
          <DialogueBubble speaker="Chủ tịch Hồ Chí Minh" avatar={hoChiMinhPortrait} position="left" delay={1200}>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-primary">🎭 Hình ảnh ẩn dụ - Lời kết</h4>
              <div className="bg-gradient-hero text-primary-foreground rounded-lg p-6">
                <p className="text-lg leading-relaxed">
                  <strong>Tôn giáo là "cái bóng" của xã hội cũ.</strong><br />
                  Chủ nghĩa xã hội không đánh vào cái bóng, mà xây dựng <strong>"nguồn ánh sáng mới"</strong> – 
                  một xã hội công bằng, văn minh, nhân đạo.<br />
                  <strong>Khi ánh sáng ấy lan tỏa, cái bóng sẽ tự tan biến.</strong>
                </p>
              </div>
              <p className="text-center text-foreground/80 italic mt-4">
                Đây chính là con đường Việt Nam đang đi - tôn trọng, đoàn kết và phát triển!
              </p>
            </div>
          </DialogueBubble>

          {/* Banner kết thúc */}
          <div className="bg-primary text-primary-foreground rounded-xl p-8 shadow-large text-center animate-slideUp" style={{ animationDelay: '1400ms' }}>
            <BookOpen className="h-12 w-12 mx-auto mb-4 animate-bounce-gentle" />
            <h3 className="text-2xl font-bold mb-4">🎭 Hạ màn</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              Việt Nam đã vận dụng <strong>sáng tạo</strong> chủ nghĩa Marx-Lenin, kết hợp với 
              <strong> tư tưởng Hồ Chí Minh</strong> và thực tiễn dân tộc để xây dựng chính sách tôn giáo 
              <strong> nhân văn, tiến bộ</strong> và phù hợp với điều kiện Việt Nam!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VietnamSection;
