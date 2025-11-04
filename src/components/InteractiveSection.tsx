import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const InteractiveSection = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions = [
    {
      question: "Chủ nghĩa duy vật biện chứng có chủ trương xóa bỏ tôn giáo bằng bạo lực không?",
      options: [
        "Có, phải xóa bỏ ngay lập tức",
        "Không, giải quyết bằng con đường khoa học và tiến bộ",
        "Chỉ xóa bỏ một số tôn giáo",
        "Tùy vào từng quốc gia"
      ],
      correct: 1
    },
    {
      question: "Theo Marx, nguồn gốc sâu xa của tôn giáo là gì?",
      options: [
        "Do con người tin vào thần linh",
        "Do truyền thống văn hóa",
        "Do sự nghèo khổ và ngu dốt của nhân dân",
        "Do giáo dục sai lầm"
      ],
      correct: 2
    },
    {
      question: "Hiến pháp 2013 quy định về tự do tín ngưỡng như thế nào?",
      options: [
        "Chỉ cho phép theo một số tôn giáo nhất định",
        "Mọi người có quyền tự do tín ngưỡng, tôn giáo",
        "Không cho phép theo tôn giáo",
        "Phải xin phép nhà nước"
      ],
      correct: 1
    },
    {
      question: "Việt Nam hiện có bao nhiêu tổ chức tôn giáo được công nhận?",
      options: [
        "20 tổ chức",
        "30 tổ chức",
        "43 tổ chức",
        "50 tổ chức"
      ],
      correct: 2
    }
  ];

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) {
      toast.error("Vui lòng chọn một câu trả lời!");
      return;
    }

    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
      toast.success("Chính xác! 🎉");
    } else {
      toast.error("Chưa đúng. Hãy xem lại lý thuyết nhé!");
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <section id="interactive" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Kiểm tra hiểu biết
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
          Trắc nghiệm tương tác để củng cố kiến thức
        </p>

        <div className="max-w-3xl mx-auto">
          {!quizStarted ? (
            <Card className="shadow-large">
              <CardHeader>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-3xl mb-2">Quiz tương tác</CardTitle>
                  <p className="text-muted-foreground">
                    Kiểm tra kiến thức của bạn về chủ nghĩa duy vật biện chứng và tôn giáo
                  </p>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-gradient-subtle rounded-lg p-8 mb-6">
                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">{questions.length}</div>
                      <div className="text-sm text-muted-foreground">Câu hỏi</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent mb-2">4</div>
                      <div className="text-sm text-muted-foreground">Lựa chọn/câu</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-secondary mb-2">~3</div>
                      <div className="text-sm text-muted-foreground">Phút</div>
                    </div>
                  </div>
                </div>
                <Button 
                  size="lg" 
                  className="text-lg px-8"
                  onClick={() => setQuizStarted(true)}
                >
                  Bắt đầu Quiz
                </Button>
              </CardContent>
            </Card>
          ) : showResult ? (
            <Card className="shadow-large">
              <CardHeader>
                <div className="text-center">
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    score >= questions.length * 0.7 ? 'bg-primary/10' : 'bg-destructive/10'
                  }`}>
                    {score >= questions.length * 0.7 ? (
                      <CheckCircle className="h-12 w-12 text-primary" />
                    ) : (
                      <XCircle className="h-12 w-12 text-destructive" />
                    )}
                  </div>
                  <CardTitle className="text-3xl mb-2">
                    {score >= questions.length * 0.7 ? "Xuất sắc! 🎉" : "Cần cố gắng thêm! 💪"}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="bg-gradient-subtle rounded-lg p-8">
                  <div className="text-5xl font-bold text-primary mb-2">
                    {score}/{questions.length}
                  </div>
                  <div className="text-lg text-muted-foreground">
                    Bạn trả lời đúng {((score / questions.length) * 100).toFixed(0)}% câu hỏi
                  </div>
                </div>
                
                <div className="space-y-3 text-left">
                  <h4 className="font-semibold text-lg text-center">Đánh giá:</h4>
                  {score === questions.length && (
                    <p className="text-muted-foreground bg-primary/5 p-4 rounded-lg">
                      🌟 Hoàn hảo! Bạn đã nắm vững kiến thức về chủ đề này.
                    </p>
                  )}
                  {score >= questions.length * 0.7 && score < questions.length && (
                    <p className="text-muted-foreground bg-accent/5 p-4 rounded-lg">
                      ✅ Tốt! Bạn đã hiểu khá tốt, hãy đọc lại một số phần để hoàn thiện hơn.
                    </p>
                  )}
                  {score < questions.length * 0.7 && (
                    <p className="text-muted-foreground bg-destructive/5 p-4 rounded-lg">
                      📚 Hãy xem lại lý thuyết ở phần trên để hiểu rõ hơn nhé!
                    </p>
                  )}
                </div>

                <Button size="lg" onClick={resetQuiz}>
                  Làm lại Quiz
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-large">
              <CardHeader>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    Câu {currentQuestion + 1}/{questions.length}
                  </span>
                  <span className="text-sm font-medium text-primary">
                    Điểm: {score}
                  </span>
                </div>
                <Progress value={((currentQuestion + 1) / questions.length) * 100} className="mb-4" />
                <CardTitle className="text-xl">{questions[currentQuestion].question}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                      selectedAnswer === index
                        ? "border-primary bg-primary/10 shadow-soft"
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                        selectedAnswer === index ? "border-primary bg-primary" : "border-border"
                      }`}>
                        {selectedAnswer === index && (
                          <CheckCircle className="h-4 w-4 text-primary-foreground" />
                        )}
                      </div>
                      <span className={selectedAnswer === index ? "font-medium" : ""}>
                        {option}
                      </span>
                    </div>
                  </button>
                ))}
                <Button 
                  className="w-full mt-6" 
                  size="lg"
                  onClick={handleNextQuestion}
                >
                  {currentQuestion < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;
