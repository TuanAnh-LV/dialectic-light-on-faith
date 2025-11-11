import { MessageCircle } from "lucide-react";
import DialogueBubble from "./DialogueBubble";
import marxPortrait from "@/assets/marx-portrait.jpg";
import leninPortrait from "@/assets/lenin-portrait.jpg";

const TheorySection = () => {
  return (
    <section
      id="theory"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-64 h-64 bg-accent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <MessageCircle className="h-12 w-12 text-primary animate-bounce-gentle" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Quan điểm Marx-Lenin
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Đối thoại giữa C.Marx và V.I.Lênin về vấn đề tôn giáo
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Act 1: Bản chất tôn giáo */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">
                {" "}
                Bản chất của tôn giáo
              </h3>
              <p className="text-muted-foreground italic">
                Marx phân tích bản chất hai mặt của tôn giáo
              </p>
            </div>

            <DialogueBubble
              speaker="C. Marx"
              avatar={marxPortrait}
              position="left"
              delay={200}
            >
              <p className="text-foreground leading-relaxed mb-4">
                Khi nghiên cứu về tôn giáo, chúng ta không thể đơn giản chỉ lên
                án hay phủ nhận nó. Hãy để tôi giải thích bản chất thực sự của
                tôn giáo:
              </p>
              <blockquote className="border-l-4 border-primary pl-4 my-4 italic text-lg">
                "Tôn giáo là tiếng thở dài của sinh vật bị áp bức, là trái tim
                của thế giới không có trái tim, là tinh thần của hoàn cảnh vô
                hồn. <strong>Tôn giáo là thuốc phiện của nhân dân.</strong>"
              </blockquote>
              <p className="text-foreground/90">
                Điều này có nghĩa là gì? Tôn giáo vừa là{" "}
                <strong className="text-destructive">sự phản ánh hư ảo</strong>{" "}
                của hiện thực - sinh ra từ nỗi sợ hãi và bất lực, nhưng đồng
                thời cũng là{" "}
                <strong className="text-accent">sự an ủi tinh thần</strong> của
                con người trong xã hội đầy đau khổ.
              </p>
            </DialogueBubble>

            <DialogueBubble
              speaker="V.I. Lênin"
              avatar={leninPortrait}
              position="right"
              delay={400}
            >
              <p className="text-foreground leading-relaxed">
                Marx nói rất đúng! Tôi xin bổ sung thêm về{" "}
                <strong>nguồn gốc sâu xa</strong> của tôn giáo:
              </p>
              <blockquote className="border-l-4 border-accent pl-4 my-4 italic text-lg">
                "Nguồn gốc sâu xa của tôn giáo là ở trong{" "}
                <strong>sự nghèo khổ và ngu dốt</strong> của nhân dân. Muốn xóa
                bỏ tôn giáo, cần phải{" "}
                <strong>xóa bỏ xã hội sinh ra nghèo khổ và ngu dốt đó.</strong>"
              </blockquote>
              <p className="text-foreground/90 mt-4">
                Có ba nguồn gốc chính:{" "}
                <strong className="text-primary">Nguồn gốc nhận thức</strong>{" "}
                (chưa hiểu quy luật tự nhiên),
                <strong className="text-secondary">
                  {" "}
                  nguồn gốc tâm lý
                </strong>{" "}
                (sợ hãi, cô đơn), và
                <strong className="text-accent"> nguồn gốc xã hội</strong> (áp
                bức, bất công).
              </p>
            </DialogueBubble>
          </div>

          {/* Act 2: Tính lịch sử */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-accent mb-2">
                {" "}
                Tính lịch sử của tôn giáo
              </h3>
              <p className="text-muted-foreground italic">
                Marx giải thích về sự biến đổi của tôn giáo
              </p>
            </div>

            <DialogueBubble
              speaker="C. Marx"
              avatar={marxPortrait}
              position="left"
              delay={600}
            >
              <p className="text-foreground leading-relaxed mb-4">
                Một điều quan trọng cần hiểu:{" "}
                <strong>Tôn giáo không phải là hiện tượng bất biến</strong>, mà
                nó thay đổi theo điều kiện lịch sử.
              </p>
              <div className="bg-card border rounded-lg p-4 my-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⛪</span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Kitô giáo thời Trung cổ
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Gắn với quyền lực Giáo hoàng, thống trị mọi mặt đời sống
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🕊️</span>
                    <div>
                      <h4 className="font-semibold text-accent">
                        Tôn giáo hiện đại
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Hướng đến nhân đạo, giáo dục, thiện nguyện
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-foreground/90">
                Khi xã hội thay đổi, tôn giáo cũng biến đổi về nội dung và hình
                thức!
              </p>
            </DialogueBubble>
          </div>

          {/* Act 3: Giải pháp */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-secondary mb-2">
                {" "}
                Giải quyết vấn đề tôn giáo
              </h3>
              <p className="text-muted-foreground italic">
                Lênin trình bày nguyên tắc giải quyết đúng đắn
              </p>
            </div>

            <DialogueBubble
              speaker="V.I. Lênin"
              avatar={leninPortrait}
              position="right"
              delay={800}
            >
              <p className="text-foreground leading-relaxed mb-4">
                Có một điều{" "}
                <strong className="text-destructive">
                  TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM
                </strong>
                :
              </p>
              <div className="bg-destructive/10 border-2 border-destructive/30 rounded-lg p-4 mb-4">
                <p className="text-lg font-bold text-destructive mb-2">
                  ⚠️ CẢNH BÁO
                </p>
                <blockquote className="italic text-foreground border-l-4 border-destructive pl-4">
                  "Không thể xóa bỏ tôn giáo bằng sắc lệnh!"
                </blockquote>
                <p className="text-sm text-muted-foreground mt-2">
                  Không được dùng biện pháp hành chính, cưỡng bức để xóa bỏ tôn
                  giáo
                </p>
              </div>
              <p className="text-foreground leading-relaxed mb-3">
                Thay vào đó, chúng ta cần có <strong>4 nguyên tắc</strong> đúng
                đắn:
              </p>
            </DialogueBubble>

            <DialogueBubble
              speaker="C. Marx"
              avatar={marxPortrait}
              position="left"
              delay={1000}
            >
              <div className="space-y-4">
                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                  <h4 className="font-bold text-primary mb-2">
                    1️⃣ Tôn trọng tự do tín ngưỡng
                  </h4>
                  <p className="text-muted-foreground">
                    Mọi người đều có quyền tin hoặc không tin. Không phân biệt
                    đối xử!
                  </p>
                </div>
                <div className="bg-accent/5 border-l-4 border-accent p-4 rounded-r-lg">
                  <h4 className="font-bold text-accent mb-2">
                    2️⃣ Đấu tranh tư tưởng - không cưỡng bức
                  </h4>
                  <p className="text-muted-foreground">
                    Nâng cao nhận thức khoa học, phê phán mê tín hủ tục
                  </p>
                </div>
              </div>
            </DialogueBubble>

            <DialogueBubble
              speaker="V.I. Lênin"
              avatar={leninPortrait}
              position="right"
              delay={1200}
            >
              <div className="space-y-4">
                <div className="bg-secondary/5 border-l-4 border-secondary p-4 rounded-r-lg">
                  <h4 className="font-bold text-secondary mb-2">
                    3️⃣ Tách tôn giáo khỏi nhà nước và giáo dục
                  </h4>
                  <p className="text-muted-foreground">
                    Nhà nước không can thiệp tôn giáo, tôn giáo không chi phối
                    chính trị
                  </p>
                </div>
                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                  <h4 className="font-bold text-primary mb-2">
                    4️⃣ Giải quyết nguyên nhân kinh tế-xã hội
                  </h4>
                  <p className="text-muted-foreground">
                    Xây dựng xã hội công bằng, xóa bỏ nghèo đói. Khi đó tôn giáo
                    sẽ "tự rụng xuống"!
                  </p>
                </div>
              </div>
            </DialogueBubble>
          </div>

          {/* Kết luận chung */}
          <div className="bg-gradient-hero text-primary-foreground rounded-xl p-8 shadow-large text-center">
            <h3 className="text-2xl font-bold mb-4"> Kết luận </h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              Chủ nghĩa duy vật biện chứng <strong>KHÔNG</strong> chủ trương xóa
              bỏ tôn giáo bằng bạo lực. Thay vào đó, chúng ta giải quyết bằng{" "}
              <strong>con đường khoa học, tư tưởng và xã hội</strong>. Khi xóa
              bỏ được nghèo đói, áp bức và bất công, tôn giáo sẽ{" "}
              <strong>tự tiêu vong</strong>!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheorySection;
