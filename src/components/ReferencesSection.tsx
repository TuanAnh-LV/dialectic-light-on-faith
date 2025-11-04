import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, BookOpen, Bot, CheckCircle } from "lucide-react";

const ReferencesSection = () => {
  return (
    <section id="references" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Tài liệu tham khảo & AI Usage
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
          Minh bạch về nguồn thông tin và việc sử dụng AI trong dự án
        </p>

        <div className="max-w-5xl mx-auto space-y-8">
          <Card className="shadow-medium">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Nguồn tài liệu chính thống</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-primary" />
                      Giáo trình Lý luận Chính trị
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2 text-muted-foreground">
                    <p>• Giáo trình Triết học Mác-Lênin (NXB Chính trị Quốc gia Sự thật, 2023)</p>
                    <p>• Chương trình giảng dạy Lý luận chính trị - Bộ Giáo dục và Đào tạo</p>
                    <p>• Tài liệu bồi dưỡng lý luận chính trị - Học viện Chính trị Quốc gia Hồ Chí Minh</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-accent" />
                      Văn kiện Đảng và Nhà nước
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2 text-muted-foreground">
                    <p>• Hiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam năm 2013</p>
                    <p>• Nghị quyết Đại hội XIII của Đảng về công tác tôn giáo</p>
                    <p>• Chỉ thị 37-CT/TW về tăng cường công tác tôn giáo trong tình hình mới</p>
                    <p>• Hồ Chí Minh toàn tập (tập về tôn giáo và dân tộc)</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-secondary" />
                      Tác phẩm gốc Marx-Lenin
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2 text-muted-foreground">
                    <p>• C.Marx - "Góp phần phê phán triết học pháp quyền của Hêghen" (1844)</p>
                    <p>• V.I.Lênin - "Về thái độ của đảng công nhân đối với tôn giáo" (1909)</p>
                    <p>• Toàn tập Marx-Engels (tập về tôn giáo và xã hội)</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-accent/20">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Bot className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">AI Usage - Sử dụng AI minh bạch</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg">
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-accent" />
                  Cam kết về sử dụng AI
                </h4>
                <p className="text-muted-foreground mb-4">
                  Chúng tôi cam kết sử dụng AI một cách có trách nhiệm và minh bạch. AI chỉ là công cụ hỗ trợ, 
                  không thay thế hoàn toàn công việc nghiên cứu và phân tích của sinh viên.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="ai-1">
                  <AccordionTrigger className="text-lg">
                    1. Công cụ AI được sử dụng
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 text-muted-foreground">
                    <div className="bg-background p-4 rounded-lg">
                      <p className="font-semibold mb-2">• Lovable AI (lovable.dev)</p>
                      <p className="text-sm">Mục đích: Thiết kế giao diện web tương tác, tạo layout và components</p>
                      <p className="text-sm">Prompt chính: "Thiết kế trang web về chủ nghĩa duy vật biện chứng và tôn giáo với các yếu tố tương tác..."</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <p className="font-semibold mb-2">• ChatGPT / Claude (nếu có)</p>
                      <p className="text-sm">Mục đích: Tổng hợp thông tin, đề xuất cấu trúc nội dung</p>
                      <p className="text-sm">Prompt chính: "Phân tích quan điểm Marx-Lenin về tôn giáo dựa trên tài liệu gốc..."</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ai-2">
                  <AccordionTrigger className="text-lg">
                    2. Phạm vi sử dụng AI
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <div className="space-y-3">
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h5 className="font-semibold text-primary mb-2">✅ AI được sử dụng để:</h5>
                        <ul className="space-y-1 text-muted-foreground text-sm">
                          <li>• Tạo layout và thiết kế giao diện web</li>
                          <li>• Tạo quiz tương tác và các elements UI/UX</li>
                          <li>• Đề xuất cách trình bày thông tin dễ hiểu</li>
                          <li>• Tạo sơ đồ, biểu đồ minh họa</li>
                        </ul>
                      </div>
                      <div className="bg-destructive/5 p-4 rounded-lg">
                        <h5 className="font-semibold text-destructive mb-2">❌ AI KHÔNG được sử dụng để:</h5>
                        <ul className="space-y-1 text-muted-foreground text-sm">
                          <li>• Viết toàn bộ nội dung thay cho sinh viên</li>
                          <li>• Thay thế việc đọc tài liệu gốc</li>
                          <li>• Tạo thông tin không có nguồn gốc</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ai-3">
                  <AccordionTrigger className="text-lg">
                    3. Quy trình kiểm chứng
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 text-muted-foreground">
                    <p className="font-semibold text-foreground">Mọi thông tin do AI sinh ra đều được:</p>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <p>Đối chiếu với giáo trình Lý luận Chính trị chính thống</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <p>Kiểm tra với văn kiện Đảng, Hiến pháp 2013</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <p>Xác thực bằng tác phẩm gốc của Marx, Lenin</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <p>Chỉnh sửa, bổ sung bởi sinh viên dựa trên hiểu biết thực tế</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ai-4">
                  <AccordionTrigger className="text-lg">
                    4. Phần do sinh viên tự thực hiện
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2 text-muted-foreground">
                    <p>• Nghiên cứu và đọc tài liệu gốc từ các nguồn chính thống</p>
                    <p>• Phân tích, tổng hợp nội dung lý thuyết</p>
                    <p>• Thiết kế cấu trúc logic của bài thuyết trình</p>
                    <p>• Chỉnh sửa, bổ sung toàn bộ nội dung do AI tạo ra</p>
                    <p>• Viết phần dẫn chứng từ bối cảnh Việt Nam hiện tại</p>
                    <p>• Tạo câu hỏi quiz và đáp án dựa trên kiến thức đã học</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="bg-background border-2 border-primary/20 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-3 text-primary">📌 Tuyên bố liêm chính học thuật</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Tôi/Chúng tôi cam kết rằng AI chỉ được sử dụng như một công cụ hỗ trợ, không thay thế hoàn toàn 
                  công việc nghiên cứu. Mọi thông tin trong dự án đều được kiểm chứng với nguồn tài liệu chính thống 
                  và tôi/chúng tôi hoàn toàn chịu trách nhiệm về nội dung cuối cùng được trình bày.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft bg-gradient-hero text-primary-foreground">
            <CardContent className="py-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Bối cảnh Việt Nam 2024-2025</h3>
              <p className="max-w-3xl mx-auto leading-relaxed">
                Chính sách tôn giáo của Việt Nam tiếp tục được thực hiện hiệu quả, góp phần vào khối đại đoàn kết toàn dân. 
                Các hoạt động tôn giáo diễn ra bình thường, phát huy vai trò tích cực trong đời sống xã hội, 
                từ thiện xã hội, giáo dục đến bảo vệ môi trường.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
