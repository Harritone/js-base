class Question
  @@score = 0

  def initialize (question, answers, correct)
    @question = question
    @answers = answers
    @correct = correct
  end

  def display_questions
    puts @question
    @answers.each_with_index do |q, i|
      puts "#{i}: #{@answers[i]}"
    end
  end

  def check_answers(ans)
    if ans.to_i == @correct 
      puts "Correct answer!"
      @@score += 1
    else
      puts "Wrong answer!! Try again!"
    end
    display_score(@@score)
  end

  def display_score(score)
    puts "Your current score is #{@@score}"
    puts '*' * 80
  end

  def self.next_question(questions)
    n = rand(questions.length)
    questions[n].display_questions
    puts 'Please select correct answer'
    answer = STDIN.gets.chomp
    until answer == 'exit'
      questions[n].check_answers(answer)
      self.next_question(questions)
    end
    puts "Bye"
    questions[n].display_score(@@score)
    exit
  end

end


q1 = Question.new('Is Ruby the best programming language ever?', ['yes', 'no'], 0)
q2 = Question.new('What is your name?', ['Ivan', 'Lack', 'Iurii'], 2)
q3 = Question.new('What does describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2)

questions = [q1, q2, q3]

Question.next_question(questions)
