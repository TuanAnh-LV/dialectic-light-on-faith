import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Quote, Brain, History, Users } from "lucide-react";

const TheorySection = () => {
  return (
    <section id="theory" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Quan điểm Marx-Lenin
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
          Phân tích khoa học về bản chất, nguồn gốc và cách giải quyết vấn đề tôn giáo
        </p>

        <Tabs defaultValue="essence" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="essence">Bản chất</TabsTrigger>
            <TabsTrigger value="origin">Nguồn gốc</TabsTrigger>
            <TabsTrigger value="history">Tính lịch sử</TabsTrigger>
            <TabsTrigger value="solution">Giải pháp</TabsTrigger>
          </TabsList>

          <TabsContent value="essence">
            <Card className="shadow-medium">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Bản chất của tôn giáo</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Theo C.Marx trong "Góp phần phê phán triết học pháp quyền của Hêghen"
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <blockquote className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
                  <p className="text-lg italic text-foreground leading-relaxed">
                    "Tôn giáo là tiếng thở dài của sinh vật bị áp bức, là trái tim của thế giới không có trái tim, 
                    là tinh thần của hoàn cảnh vô hồn. Tôn giáo là thuốc phiện của nhân dân."
                  </p>
                  <footer className="mt-3 text-muted-foreground">— C.Marx</footer>
                </blockquote>

                <div className="space-y-4">
                  <div className="bg-accent/5 border-l-4 border-accent p-4 rounded-r-lg">
                    <h4 className="font-semibold text-accent mb-2">Mặt tiêu cực</h4>
                    <p className="text-muted-foreground">
                      Sự phản ánh hư ảo của hiện thực, sản phẩm của nỗi sợ hãi và bất lực 
                      của con người trước tự nhiên và xã hội.
                    </p>
                  </div>

                  <div className="bg-secondary/5 border-l-4 border-secondary p-4 rounded-r-lg">
                    <h4 className="font-semibold text-secondary mb-2">Mặt tích cực</h4>
                    <p className="text-muted-foreground">
                      Sự an ủi tinh thần của con người trong xã hội còn nhiều đau khổ, áp bức. 
                      Marx nhìn tôn giáo với thái độ khoa học, không cực đoan phủ nhận.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="origin">
            <Card className="shadow-medium">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Brain className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Nguồn gốc của tôn giáo</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card border rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-primary">1</span>
                    </div>
                    <h4 className="font-semibold text-lg mb-3">Nguồn gốc nhận thức</h4>
                    <p className="text-muted-foreground mb-3">
                      Khi con người chưa hiểu quy luật tự nhiên, họ gán hiện tượng cho "ý chí thần linh".
                    </p>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-sm italic">
                        Ví dụ: Người xưa sợ sấm sét, mưa gió nên tin có "thần Sấm", "thần Mưa"
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-accent">2</span>
                    </div>
                    <h4 className="font-semibold text-lg mb-3">Nguồn gốc tâm lý</h4>
                    <p className="text-muted-foreground">
                      Nỗi sợ hãi, cô đơn, yếu đuối khiến con người tìm chỗ dựa tinh thần trong niềm tin vào 
                      các lực lượng siêu nhiên.
                    </p>
                  </div>

                  <div className="bg-card border rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-secondary">3</span>
                    </div>
                    <h4 className="font-semibold text-lg mb-3">Nguồn gốc xã hội</h4>
                    <p className="text-muted-foreground">
                      Sự áp bức, bóc lột, bất công trong xã hội khiến người dân tìm sự công bằng 
                      ở "thế giới bên kia".
                    </p>
                  </div>
                </div>

                <blockquote className="border-l-4 border-accent pl-6 py-4 bg-accent/5 rounded-r-lg">
                  <p className="text-lg italic text-foreground">
                    "Nguồn gốc sâu xa của tôn giáo là ở trong sự nghèo khổ và ngu dốt của nhân dân, 
                    và muốn xóa bỏ tôn giáo, cần phải xóa bỏ xã hội sinh ra nghèo khổ và ngu dốt đó."
                  </p>
                  <footer className="mt-3 text-muted-foreground">— V.I.Lênin</footer>
                </blockquote>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card className="shadow-medium">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <History className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Tính lịch sử của tôn giáo</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-foreground">
                  Tôn giáo là một <strong>hiện tượng có lịch sử</strong> và biến đổi theo thời đại. 
                  Khi điều kiện xã hội thay đổi, tôn giáo cũng biến đổi về nội dung, hình thức và ảnh hưởng.
                </p>

                <div className="bg-gradient-subtle rounded-lg p-6 border">
                  <h4 className="font-semibold text-lg mb-4 flex items-center">
                    <History className="h-5 w-5 mr-2 text-primary" />
                    Ví dụ thực tế
                  </h4>
                  <div className="space-y-4">
                    <div className="flex space-x-4">
                      <div className="w-2 bg-primary rounded-full flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Kitô giáo thời Trung cổ</h5>
                        <p className="text-muted-foreground">
                          Gắn với quyền lực Giáo hoàng và chế độ phong kiến, thống trị mọi mặt đời sống
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <div className="w-2 bg-accent rounded-full flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Tôn giáo hiện đại</h5>
                        <p className="text-muted-foreground">
                          Nhiều tôn giáo hướng đến hoạt động nhân đạo, giáo dục, thiện nguyện, phù hợp với xã hội văn minh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="solution">
            <Card className="shadow-medium">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Giải quyết vấn đề tôn giáo</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Trong thời kỳ quá độ lên chủ nghĩa xã hội
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                  <p className="text-lg font-semibold text-destructive mb-2">
                    ⚠️ Điều KHÔNG được làm
                  </p>
                  <blockquote className="italic text-foreground/80 pl-4 border-l-2 border-destructive/30">
                    "Không thể xóa bỏ tôn giáo bằng sắc lệnh." — V.I.Lênin
                  </blockquote>
                  <p className="mt-3 text-muted-foreground">
                    Không dùng biện pháp hành chính, cưỡng bức để xóa bỏ tôn giáo
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">✅ Nguyên tắc giải quyết đúng đắn:</h4>
                  
                  {[
                    {
                      title: "Tôn trọng tự do tín ngưỡng",
                      desc: "Ai cũng có quyền tin hoặc không tin vào tôn giáo. Không phân biệt đối xử giữa người theo đạo và không theo đạo."
                    },
                    {
                      title: "Đấu tranh tư tưởng - không cưỡng bức",
                      desc: "Giáo dục, nâng cao nhận thức khoa học cho nhân dân. Phê phán mê tín, hủ tục, lợi dụng tôn giáo làm phương hại."
                    },
                    {
                      title: "Tách tôn giáo khỏi nhà nước và giáo dục",
                      desc: "Nhà nước không can thiệp vào tôn giáo, tôn giáo không chi phối chính trị. Giáo dục dựa trên khoa học."
                    },
                    {
                      title: "Giải quyết nguyên nhân kinh tế-xã hội",
                      desc: "Xây dựng xã hội công bằng, xóa bỏ áp bức, nghèo đói. Khi đó tôn giáo sẽ 'tự rụng xuống'."
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-card border rounded-lg p-5 shadow-soft">
                      <h5 className="font-semibold mb-2 text-primary">{index + 1}. {item.title}</h5>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TheorySection;
