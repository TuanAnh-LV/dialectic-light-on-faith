import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Modal, Button } from "antd";
import { Info, Lightbulb, AlertCircle, CheckCircle } from "lucide-react";
import tongiao from "@/assets/ton-giao.jpg";
import duyvatbienchung from "@/assets/duyvatbienchung.png";
import hieulam from "@/assets/hieulam.jpeg";
interface CardItem {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  quote: {
    text: string;
    author: string;
  };
  analysis: string;
  image: string;
}

const cardData: CardItem[] = [
  {
    id: 1,
    title: "Tôn giáo là gì?",
    shortDesc:
      "Hiện tượng xã hội phổ biến, xuất hiện sớm trong lịch sử nhân loại. Phản ánh thế giới quan duy tâm, coi nguồn gốc vũ trụ và đời sống do các lực lượng siêu nhiên quyết định.",
    fullDesc:
      "Tôn giáo là một hình thái ý thức xã hội phản ánh sự bất lực của con người trước tự nhiên và xã hội. Nó ra đời khi con người chưa thể giải thích các hiện tượng khách quan và cần nơi gửi gắm niềm tin tinh thần.",
    quote: {
      text: "Tôn giáo là tiếng thở dài của sinh vật bị áp bức... là thuốc phiện của nhân dân.",
      author: "Karl Marx",
    },
    analysis:
      "Câu nói của Marx không nhằm phủ nhận niềm tin tâm linh, mà để phê phán hiện thực xã hội bất công khiến con người phải tìm đến tôn giáo như một nơi an ủi tinh thần. Khi điều kiện vật chất và tinh thần được cải thiện, tôn giáo sẽ dần mất đi vai trò che chở, và con người sẽ hướng đến nhận thức khoa học và nhân văn hơn.",
    image: tongiao,
  },
  {
    id: 2,
    title: "Chủ nghĩa duy vật biện chứng về tôn giáo là gì?",
    shortDesc:
      "Chủ nghĩa Marx-Lenin dựa trên thế giới quan duy vật biện chứng, cho rằng bản chất của mọi hiện tượng nằm trong các quy luật khách quan của tự nhiên, xã hội và tư duy.",
    fullDesc:
      "Chủ nghĩa duy vật biện chứng coi tôn giáo là sản phẩm của những điều kiện lịch sử - xã hội nhất định. Nó không phải hiện tượng vĩnh viễn, mà là tạm thời, gắn liền với sự thiếu hiểu biết và áp bức trong xã hội loài người.",
    quote: {
      text: "Không thể xóa bỏ tôn giáo bằng mệnh lệnh; nó chỉ mất đi khi nguồn gốc xã hội của nó biến mất.",
      author: "V.I. Lenin",
    },
    analysis:
      "Lenin nhấn mạnh rằng để tôn giáo tự tiêu vong, cần tạo ra một xã hội công bằng, không áp bức, nơi con người được giáo dục, tự do tư tưởng và tiếp cận tri thức khoa học. Đó là con đường biện chứng – không xóa bỏ cưỡng chế mà là thay đổi điều kiện sinh tồn của nó.",
    image: duyvatbienchung,
  },
  {
    id: 3,
    title: "Hiểu lầm phổ biến",
    shortDesc:
      "Nhiều người hiểu lầm rằng chủ nghĩa duy vật biện chứng chủ trương xóa bỏ tôn giáo bằng bạo lực. Thực tế, Marxism xem tôn giáo như hiện tượng lịch sử - xã hội cần giải quyết khoa học.",
    fullDesc:
      "Chủ nghĩa Marx-Lenin không bài xích tín ngưỡng cá nhân. Nó chỉ phê phán việc sử dụng tôn giáo như công cụ duy trì bất công và che giấu bản chất của xã hội giai cấp.",
    quote: {
      text: "Tự do tôn giáo phải song hành cùng tự do không tôn giáo.",
      author: "Friedrich Engels",
    },
    analysis:
      "Engels khẳng định rằng nhà nước xã hội chủ nghĩa không cấm đoán tín ngưỡng, mà đảm bảo quyền lựa chọn của mỗi cá nhân. Mục tiêu không phải là xóa bỏ niềm tin, mà là tạo điều kiện để con người có quyền tư duy độc lập và sống dựa trên tri thức thay vì sợ hãi.",
    image: hieulam,
  },
];

const ContentSection = () => {
  const [selectedCard, setSelectedCard] = useState<CardItem | null>(null);

  return (
    <section
      id="content"
      className="py-20 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Đặt vấn đề
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá mối quan hệ giữa{" "}
            <strong>chủ nghĩa duy vật biện chứng</strong> và{" "}
            <strong>tôn giáo</strong>.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cardData.map((card) => (
            <Card
              key={card.id}
              onClick={() => setSelectedCard(card)}
              className="cursor-pointer overflow-hidden shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/40 flex flex-col h-full"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 justify-between">
                <CardHeader className="pt-6">
                  <CardTitle className="text-xl font-semibold min-h-[3rem]">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6 flex-1 flex">
                  <p className="text-muted-foreground leading-relaxed">
                    {card.shortDesc}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Kết luận */}
        <Card className="shadow-lg bg-accent/5 border-accent/30 rounded-2xl">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-8 w-8 text-accent" />
              <CardTitle className="text-2xl font-bold">
                Kết luận quan trọng
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground leading-relaxed">
              <strong>
                Chủ nghĩa duy vật biện chứng không chủ trương xóa bỏ tôn giáo
                bằng bạo lực
              </strong>
              , mà giải quyết bằng con đường khoa học, tiến bộ và nhân văn. Khi
              xã hội phát triển, xóa bỏ nghèo đói, áp bức và lạc hậu, tôn giáo
              sẽ tự nhiên mất đi vai trò lịch sử của nó.
            </p>
          </CardContent>
        </Card>

        {/* Modal chi tiết */}
        <Modal
          open={!!selectedCard}
          onCancel={() => setSelectedCard(null)}
          footer={[
            <Button key="close" onClick={() => setSelectedCard(null)}>
              Đóng
            </Button>,
          ]}
          width={900}
          centered
          bodyStyle={{ padding: 0 }}
          title={
            <span className="text-xl font-semibold text-foreground">
              {selectedCard?.title}
            </span>
          }
        >
          {selectedCard && (
            <div className="animate-fadeIn">
              {/* Hình ảnh */}
              <div className="relative w-full overflow-hidden">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="w-full max-h-[450px] object-contain bg-black/5"
                />
              </div>

              {/* Nội dung */}
              <div className="p-6 space-y-5">
                <p className="text-lg text-foreground leading-relaxed">
                  {selectedCard.fullDesc}
                </p>

                {/* Dẫn chứng */}
                <div className="bg-muted/40 border-l-4 border-accent pl-4 py-3 italic text-muted-foreground rounded-r-lg">
                  “{selectedCard.quote.text}”
                  <span className="block text-right font-medium text-sm mt-1">
                    — {selectedCard.quote.author}
                  </span>
                </div>

                {/* Phân tích */}
                <p className="text-base text-muted-foreground leading-relaxed">
                  {selectedCard.analysis}
                </p>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default ContentSection;
