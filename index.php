<!DOCTYPE html>
<html lang="en" class="bg-[#141414] ">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ProxyAI</title>
    <link rel="stylesheet" href="/dist/output.css">
</head>
<body>
    
    <div class="start-0 end-0 top-0 h-[100%] text-white absolute flex justify-center items-center">
        
        <div class="w-[700px] h-[100%] overflow-scroll scrollbar-hide pb-24">
            
            <div class="start-0 end-0 h-20 backdrop-blur-xl flex justify-center items-center fixed">
                <div class="w-[700px] left-0 px-4">
                    <a id="navlogo" class="float-left pt-1 font-[Custom1] text-[40px]" href="http://localhost:5000/">BlackBolt</a>
                    <p id="navlogo" class="float-right  text-[40px]">ProxyAI</p>
                </div>
                
            </div>
            
            <div id="chatContainer" class="w-[100%] px-4 pt-20">   
            </div>

            <div class="w-[700px] flex fixed bottom-0 pb-4">
                <input id="userInput" type="text" placeholder="Message Proxy..." class="block w-[100%] h-16 bg-[#141414] border-2 border-[#242424] focus:outline-none focus:border-[#444444] p-4 rounded-2xl">
                <div class="block h-14 w-16 my-1 mx-2 bg-[#e60303] rounded-full float-right cursor-pointer" onclick="getResponse()">
                <img src="/image.png" class="block size-10 mt-[7.5px] ml-3 align-middle">
                </div>
            </div>

        </div>

        

    </div>
</body>

<script src="/index.js"></script>

</html>
