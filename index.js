// document.onload(alert('ProxyAI can make mistakes. Please check important information.'));

const OPENAI_API_KEY = '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';
const chatBox =  document.getElementById('chatContainer');

const Model1 = "You are a chat bot named Proxy developed by the company BlackBolt. BlackBolt was founded by Martin McCorkle in January 2024 and develops web applications/APIs along with chat bots.";
const Model2 = 
`You are a website assistant for a company named Trinity Doors, a company based in Conway, Arkansas that makes custom cabinet doors. 
When a customer prompts you for a quote, you must ask them for all the necessary information. If anyone needs help with a special 
request, refer them to the owner at 501-000-0000. First, ask for a technical description such as square footage and lastly, how many 
they need. This is the only thing you can speak on. Once they give you the required information, you will give them a quote based on 
a given equation.`;


let i = 0;

document.addEventListener("keypress", function(event) {
    
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("submitBtn").click();
    }
  }); 


async function getResponse() {
    
    let userChat = document.createElement('div');
    let userText = document.createElement('p');
    const ProxyChat = document.createElement('div');
    const ProxyText = document.createElement('p');

    // console.log("Call requested");

    chatBox.appendChild(userChat);
    userChat.appendChild(userText);
    userText.setAttribute('class', 'float-right max-w-[500px] bg-[#242424] border-2 border-[#e60303] p-4 rounded-2xl mt-5');
    userText.setAttribute('id', 'inputBox' + i);

    const inputBox = document.getElementById('inputBox' + i);
    inputBox.innerText = userInput.value;
    userInput.value = '';

    // console.log(document.getElementById("inputBox" + i).value);
    
    const options = {
        
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messages: [
                {
                    role: "system",
                    content: Model1
                },
                {
                    role: "user", 
                    content: inputBox.innerText
                }
            ],
            model: "gpt-3.5-turbo",
            max_tokens: 1000
        
        })

    }
    
    try {
        
        chatBox.appendChild(ProxyChat);
        ProxyChat.setAttribute('class', 'float-left w-[100%]');
        ProxyChat.appendChild(ProxyText);
        ProxyText.setAttribute('class', 'float-left max-w-[500px] bg-[#242424] border-2 border-blue-600 p-4 rounded-2xl mt-5');
        ProxyText.setAttribute('id', 'outputBox' + i);

        const outputBox = document.getElementById('outputBox' + i);
        outputBox.innerHTML = '<div id="wave"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
        
        const response = await fetch('https://api.openai.com/v1/chat/completions', options);
        const data = await response.json();
        
        // // console.log(data.choices[0].message.content);

        
        outputBox.innerText = data.choices[0].message.content;


    } catch (error) {
        console.error(error);
    }

    i += 1;

}

