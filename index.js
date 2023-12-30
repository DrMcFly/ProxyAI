const OPENAI_API_KEY = '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';
const chatBox =  document.getElementById('chatContainer');
// const textNode = document.createTextNode("This is a paragraph.");

let i = 0;



async function getResponse() {
    
    let userChat = document.createElement('div');
    let userText = document.createElement('p');
    const ProxyChat = document.createElement('div');
    const ProxyText = document.createElement('p');

    // console.log("Call requested");

    chatBox.appendChild(userChat);
    userChat.setAttribute('class', 'float-right w-[100%]');
    userChat.appendChild(userText);
    userText.setAttribute('class', 'float-right max-w-[500px] bg-[#242424] border-2 border-[#474747] p-6 rounded-2xl mt-5');
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
                    content: "you are a chat bot named Proxy developed by the company BlackBolt.Cloud. You help people who need assistance. If someone needs help with their credit card, you must send them this link: http://localhost:5000/"
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
        
        const response = await fetch('https://api.openai.com/v1/chat/completions', options);
        const data = await response.json();
        
        // console.log(data.choices[0].message.content);

        chatBox.appendChild(ProxyChat);
        ProxyChat.setAttribute('class', 'float-left w-[100%]');
        ProxyChat.appendChild(ProxyText);
        ProxyText.setAttribute('class', 'float-left max-w-[500px] bg-[#242424] border-2 border-[#474747] p-6 rounded-2xl mt-5');
        ProxyText.setAttribute('id', 'outputBox' + i);

        const outputBox = document.getElementById('outputBox' + i);
        outputBox.innerText = data.choices[0].message.content;



    } catch (error) {
        console.error(error);
    }

    i += 1;

}


// function consolelog() {
//     inputBox.innerText = userInput.value;
//     outputBox.innerText = userInput.value;
//     console.log(userInput.value);
//     console.log(inputBox.value);
//     userInput.value = '';
// }

