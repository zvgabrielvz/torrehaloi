//captura o cone
//se existe disco no cone clicado salva posicao se nao nao salva
//
// INICIO BRUNO
  
// FIM BRUNO

// INICIO GABRIEL

    //ADICIONANDO ELEMENTOS PELO DOM
    
    //ADICIONANDO BLOCOS
    startGame();
        function startGame(){
            const torre1 = document.getElementById('0');
            const disco1 = document.createElement('div');
            disco1.setAttribute("id","40")
            disco1.classList.add('bloco');
            disco1.classList.add('bloco--red');
            const disco2 = document.createElement('div');
            disco2.setAttribute("id","30");
            disco2.classList.add('bloco');
            disco2.classList.add('bloco--green');
            const disco3 = document.createElement('div');
            disco3.setAttribute("id","20");
            disco3.classList.add('bloco');
            disco3.classList.add('bloco--purple');
            const disco4 = document.createElement('div');
            disco4.setAttribute("id","10");
            disco4.classList.add('bloco');
            disco4.classList.add('bloco--blue');
            torre1.appendChild(disco1)
            torre1.appendChild(disco2)
            torre1.appendChild(disco3)
            torre1.appendChild(disco4)

            const tower1 = document.getElementById('tower1');
            const cone1 = document.createElement('div');
            cone1.classList.add('cone');
            tower1.appendChild(cone1);

            const tower2 = document.getElementById('tower2');
            const cone2 = document.createElement('div');
            cone2.classList.add('cone');
            tower2.appendChild(cone2);

            const tower3 = document.getElementById('tower3');
            const cone3 = document.createElement('div');
            cone3.classList.add('cone');
            tower3.appendChild(cone3);
        }
        function addblocos(){
            const torre1 = document.getElementById('0');
            const disco1 = document.createElement('div');
            disco1.setAttribute("id","40")
            disco1.classList.add('bloco');
            disco1.classList.add('bloco--red');
            const disco2 = document.createElement('div');
            disco2.setAttribute("id","30");
            disco2.classList.add('bloco');
            disco2.classList.add('bloco--green');
            const disco3 = document.createElement('div');
            disco3.setAttribute("id","20");
            disco3.classList.add('bloco');
            disco3.classList.add('bloco--purple');
            const disco4 = document.createElement('div');
            disco4.setAttribute("id","10");
            disco4.classList.add('bloco');
            disco4.classList.add('bloco--blue');
            torre1.appendChild(disco1)
            torre1.appendChild(disco2)
            torre1.appendChild(disco3)
            torre1.appendChild(disco4)
        }
    
    // VARIAVEIS GLOBAIS
    let disco       = '';
    let idTorreRemover     = '';
    // VARIAVEIS GLOBAIS

    const check = (e) =>{

        if(e.currentTarget){
            disco          = e.currentTarget.lastElementChild;
           if(disco !==null){
            idTorreRemover = e.currentTarget.id;
           }
       }
       
    }

    const move = (e) =>{
        
        if(disco === '' || disco == null){
            // console.log(disco)
            // console.log(idTorreRemover)
            // console.log('entrou')
            check(e) 
        }else{//erro consertado

            if(disco !== '' && e.currentTarget !== ''){
            let torre = e.currentTarget.id;
            let removeDisco = document.querySelectorAll('.torre-blocos')[idTorreRemover];
            let locationNew = document.querySelectorAll('.torre-blocos')[torre]; //seleciona local para o disco
            let last = locationNew.lastChild;
            // inicio regra 3
            if(last == null){ //quando nao houver discovictory
                removeDisco.removeChild(disco)//remove disco
                locationNew.appendChild(disco)//adiciona disco
            } 
            // console.log(last.childNodes);
            if(last){
                console.log('entrou')
                if(disco.id < last.id ){ //quando houver disco testar
                    
                    removeDisco.removeChild(disco)//remove disco
                    locationNew.appendChild(disco)//adiciona disco
                }
            }
            //fim regra 3

            //condicao de vitoria
            if(lasttower.childElementCount === 4){
                vitoryGame();
                resetvitory();
               

            } else{
            disco = '';
            idTorreRemover = '';   
            }   
            }
        }
        //fim regra 3
           
    }
    
    
    
    let start = document.querySelector('.start');
        start.addEventListener('click',move);

    let offset = document.querySelector('.offset');
        offset.addEventListener('click',move);

    let end = document.querySelector('.end');
        end.addEventListener('click',move)


    let lasttower = document.getElementById("2");

    function resetvitory(){
        const resetvitoria = document.getElementById('2');
        resetvitoria.innerHTML = "";
    }

    function resetgame(){
        const resettower1 = document.getElementById('0');
        resettower1.innerHTML = "";
        const resettower2 = document.getElementById('1');
        resettower2.innerHTML = "";
        const resettower3 = document.getElementById('2');
        resettower3.innerHTML = "";
        const vict = document.getElementById('victory');
        vict.innerHTML = "";
        addblocos();
    }

    const resetbutton = document.getElementById('breset');
    resetbutton.addEventListener('click', function(){
        resetgame();
    })

    function vitoryGame(){
    const vitoria = document.getElementById('victory');
    const msgvit = document.createElement('p');
    vitoria.appendChild(msgvit);
    msgvit.innerText = "VOCE VENCEU!!!";
    }
