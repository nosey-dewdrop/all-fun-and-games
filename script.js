
const problems = {
      "problem1": {
          title: "first problem",
          description: "what does the question require from you???",
          solutions: [
              {
                  title: " solution:",
                  code: "this block is reserved for the code.\n "
              }
          ],
          notes: "extra details.",
          personalThoughts: "maybe faster runtime?"
      },
      
      "problem2": {
          title: "second problem",
          description: "lalalalala",
          solutions: [
              {
                  title: "solution one ",
                  code: ""
              },
              {
                  title: "solution two",
                  code: ""
              }
          ],
          notes: "",
          personalThoughts: ""
      }
  };
  
  function createProblemTemplate(problemData) {
      let solutionsHTML = '';
      
      problemData.solutions.forEach(solution => {
          solutionsHTML += 
              "<h3>" + solution.title + "</h3>" +
              "<pre><code>" + solution.code + "</code></pre>";
      });
      
      return (
          "<div class='back-link-container'>" +
              "<a href='#' onclick='showHomePage()' class='back-link'>← return</a>" +
          "</div>" +
          "<h1>" + problemData.title + "</h1>" +
          "<div class='content'>" +
              "<p><strong>problem:</strong> " + problemData.description + "</p>" +
              solutionsHTML +
              (problemData.notes ? "<p><strong>notes:</strong> " + problemData.notes + "</p>" : "") +
              (problemData.personalThoughts ? "<p><strong>hmm?:</strong> " + problemData.personalThoughts + "</p>" : "") +
          "</div>"
      );
  }
  
  function showHomePage() {
      document.querySelector('.container').style.display = 'block';
      const problemView = document.getElementById('problemView');
      if (problemView) {
          problemView.style.display = 'none';
      }
  }
  
  function openProblem(problemId) {
      const problemData = problems[problemId];
      
      if (!problemData) {
          console.error("Problem " + problemId + " bulunamadı!");
          return;
      }
      
      document.querySelector('.container').style.display = 'none';
      
      let problemView = document.getElementById('problemView');
      if (!problemView) {
          problemView = document.createElement('div');
          problemView.id = 'problemView';
          problemView.className = 'problem-container';
          document.body.appendChild(problemView);
          
          const style = document.createElement('style');
          style.textContent = 
              ".problem-container { max-width: 800px; margin: 0 auto; padding: 40px 20px; font-family: 'Courier New', Courier, monospace; color: #4a4a4a; line-height: 1.6; }" +
              ".back-link-container { margin-bottom: 40px; }" +
              ".back-link { color: #4a4a4a; text-decoration: none; }" +
              ".back-link:hover { text-decoration: underline; }" +
              ".problem-container h1 { font-size: 32px; font-weight: normal; margin-bottom: 40px; }" +
              ".problem-container h3 { font-size: 18px; font-weight: normal; margin: 30px 0 15px 0; color: #4a4a4a; border-bottom: 1px solid #e8e8e8; padding-bottom: 5px; }" +
              ".problem-container .content { background: #ffffff; border: 1px solid #e8e8e8; border-radius: 8px; padding: 40px; }" +
              ".problem-container pre { background: #f0f0f0; padding: 20px; border-radius: 4px; overflow-x: auto; margin: 20px 0; }" +
              ".problem-container code { font-family: 'Courier New', Courier, monospace; font-size: 14px; }" +
              ".problem-container p { margin: 15px 0; }" +
              ".problem-container strong { color: #333; }";
          
          document.head.appendChild(style);
      }
      
      problemView.innerHTML = createProblemTemplate(problemData);
      problemView.style.display = 'block';
  }
  
  function addProblem(id, problemData) {
      problems[id] = problemData;
  }