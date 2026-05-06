const btn1 = document.querySelector('#skill-card1')
const btn2 = document.querySelector('#skill-card2')
const btn3 = document.querySelector('#skill-card3')
const btn4 = document.querySelector('#skill-card4')
const question = document.querySelector("#reply")

const newDiv = document.createElement('div')
newDiv.setAttribute("class", "hero")

const replyImg = document.createElement('img')
replyImg.setAttribute("src", "assets/favicon.ico")
replyImg.setAttribute("class", "lexi")

const reply = document.createElement('p')
reply.textContent='bot is typing...'
reply.setAttribute("class", "heroChat")

const qDiv = document.createElement("div")
qDiv.setAttribute("class", "hero2")

const newQuestion1 = document.createElement('div')
newQuestion1.setAttribute("class", "heroChat1 ")
newQuestion1.textContent="Who is Makami"


//btn 2

const newDiv2 = document.createElement('div')
newDiv2.setAttribute("class", "hero")

const replyImg2 = document.createElement('img')
replyImg2.setAttribute("src", "assets/favicon.ico")
replyImg2.setAttribute("class", "lexi")

const reply2 = document.createElement('p')
reply2.textContent='bot is typing...'
reply2.setAttribute("class", "heroChat")

//New Question Bubble
const qDiv2 = document.createElement("div")
qDiv2.setAttribute("class", "hero2")

const newQuestion = document.createElement('div')
newQuestion.setAttribute("class", "heroChat1 ")
newQuestion.textContent= 'Why should I hire him?'


// btn 3

const newDiv3 = document.createElement('div')
newDiv3.setAttribute("class", "hero")

const replyImg3 = document.createElement('img')
replyImg3.setAttribute("src", "assets/favicon.ico")
replyImg3.setAttribute("class", "lexi")

const reply3 = document.createElement('p')
reply3.textContent='bot is typing...'
reply3.setAttribute("class", "heroChat")

//New Question Bubble
const qDiv3 = document.createElement("div")
qDiv3.setAttribute("class", "hero2")

const newQuestion3 = document.createElement('div')
newQuestion3.setAttribute("class", "heroChat1 ")
newQuestion3.textContent= 'How do I contact him'


btn1.addEventListener('click', ()=>{
    qDiv.appendChild(newQuestion1)
    document.querySelector("#reply").appendChild(qDiv)
    btn1.remove()
    setTimeout(() => {
        newDiv.appendChild(replyImg)
        newDiv.appendChild(reply)  
        question.append(newDiv)
//        reply.insertAdjacentElement('beforeBegin', replyImg)
      }, 100);
    setTimeout(() => {
        reply.textContent='Makami is a software Engineering Student focoused on building useful web apps from business websites to interaction websites'

      }, 1000);
    

})

btn2.addEventListener('click', ()=>{
    qDiv2.appendChild(newQuestion)
    document.querySelector("#reply").append(qDiv2)
    
    btn2.remove()
    setTimeout(() => {
        newDiv2.appendChild(replyImg2)
        newDiv2.appendChild(reply2)  
        question.append(newDiv2)
//        reply.insertAdjacentElement('beforeBegin', replyImg)
      }, 100);
    setTimeout(() => {
        reply2.textContent='Makami builds fast and reliable websites that dont break when traffic spikes.'
      }, 1000);
    
})

btn3.addEventListener('click', ()=>{
    qDiv3.appendChild(newQuestion3)
    document.querySelector("#reply").append(qDiv3)
    
    btn3.remove()
    setTimeout(() => {
        newDiv3.appendChild(replyImg3)
        newDiv3.appendChild(reply3)  
        question.append(newDiv3)
//        reply.insertAdjacentElement('beforeBegin', replyImg)
      }, 100);
    setTimeout(() => {
        reply3.textContent='Through any of his socials'
      }, 1000);
    
})


