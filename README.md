# LUXROBO MODI & Scratch 3.0 연동

Scratch 3.0 과 모디를 직접적으로 제어하는 Python package를 연결해주는 서버입니다.

최초 사용시 config/child.js 내에 본인 파이썬 경로와 실행시킬 파이썬 스크립트 경로를 수정하셔서 사용하셔야 합니다.

서버 사용 - npm install -> npm start

<hr>

<div>
  <img src = "https://user-images.githubusercontent.com/33728833/44534880-b8c6b100-a733-11e8-8325-cc06e54cae84.PNG" width = 700>
</div>

1. 서버 가동시 config/child.js에 의해 python-api-develop 파일 내 main.py 스크립트를 child-process로 실행시킵니다.<br>
  -> main.py 는 서버가 꺼질 때 까지 계속해서 무한루프를 돌면서 시스템 IO를 기다립니다.
  
2. 브라우저에서 실행시킨 Scratch-gui에서 블록을 실행시키면 블록에 따라 Scratch-vm 내의 modi extension 에 정의된 request를 서버에 보내게 됩니다.

3. 서버는 request를 받아 main.py 에서 실행할 python 코드를 string 형식으로 시스템 입력을 합니다.

4. 무한루프를 돌며 시스템 IO를 기다리던 python 프로세스는 string을 읽어들이고 실행하여 MODI 모듈을 제어합니다.

output 모듈은 4번까지의 과정으로 제어가 가능하나 input 모듈은 모듈의 상태를 받아 이를 vm쪽으로 response 시켜주는 과정이 필요합니다 (미완성)


<hr>

<b>확인된 오류</b>

1. input 모듈의 경우 Scratch-vm 에서 request를 보내고 모듈에 대한 상태 정보를 받는 response가 필요한데 비동기 처리 방식으로 인해 response가 제대로   수신처리되지 않아 코드상 제대로 구현이 되어있지 않습니다.<br>
  -> sync_request 모듈을 이용해 동기 방식으로 request를 처리하려 시도하였으나 webpack 으로 구동되는 gui 상에선 request를 한번만 보내려 하여도 끝없이 계속해서 보내는 현상이 일어났음<br>
  -> 만약 동기처리 방식이 아닌 비동기 처리 방식으로 처리하고 싶다면 bool 타입 scratch 블록을 정의하는 부분의 오픈소스를 수정하여 promise로 받는 등의 방식을 이용하면 될듯 함 

2. speaker 모듈 사용시 speaker 끄기 블록을 이용해 정지시키면 다음번 실행시 speaker 모듈에서 소리가 매우 작게 나는 현상이 일어나는데 이는 server 상의 오류라기 보단 python에 보내는 python 코드를 수정해야 하거나 python package가 잘못된 것으로 보여집니다.<br>
  speaker 끄기 블록이 아닌 speaker 켜기 블록에서 소리를 0 으로 하여 실행하면 다음번 실행시에도 제대로 실행됩니다.
 
 <hr>
 
<b>기타</b>
 
 python package를 제가 개발한 것이 아니다 보니 서버에서 python에서 실행시킬 string이 제대로 사용되지 않았을 수 있습니다.
 <img src ="https://user-images.githubusercontent.com/33728833/44538097-5ec9e980-a73b-11e8-82d3-dfc17a21d49d.PNG" width=500>
 이는 각각 api에서 위 사진의 부분을 수정해 주시면 됩니다!
