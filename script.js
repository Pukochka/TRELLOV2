    let y;

    const q = 'querySelector',
        AEL = 'addEventListener',
        qs = (x) => { return document[q](x) },
        classActive = ( item , option , node ) => node[q](item).classList[option]('active'),
        qsAll = (x) => {return document.querySelectorAll(x)},
        appendItem = () => {qs('.tasks').appendChild(createItem()) ;addF();controlItem();},
        getValue = (x) => {return qs(x).value;},
        el = (x) => {return document.createElement(x)};

    function createItem(){

        let item = el('div');

        item.className = 'tasks_item index';
        item.innerHTML = qs('#maket')[q]('.tasks_item').innerHTML;

        item[q]('.tasks_header').innerHTML = getValue('#header');
        item[q]('.tasks_description').innerHTML = getValue('#description');

        return item;
    }

    qs('.addd')[AEL]('click',() => qs('.settings').classList.add('active'));
    qs('.closes')[AEL]('click',() => qs('.settings').classList.remove('active'));
    qs('.closess')[AEL]('click',() => qs('.append').classList.remove('active'));

    document.getElementById('main')[AEL]('click',()=>{
        if(qs('#header').value !== '' && qs('#description').value !== ''){
            appendItem();
            qs('.settings').classList.remove('active');
            qs('#header').value = '';
            qs('#description').value = '';
        }
    });

    qs('.tasks')[AEL]('click',function(e){
        if(e.target.classList.contains('yes')){
            e.target.offsetParent.offsetParent.remove();
            controlItem();
        }else if(e.target.classList.contains('no')){
            classActive('.sure', 'remove', e.target.parentNode.parentNode.parentNode);
        }
    });

    function addF(){
        [...qsAll('.close')].forEach(item => item[AEL]('click',function(e){
            if(e.target.classList.contains('sur')){
                classActive('.sure','add' , e.target.parentNode );
            }
        }));

        [...qsAll('.add')].forEach(item => item[AEL]('click',function(e){
            if(e.target.classList.contains('add')){
                classActive('.append','add' , document );
                y = e.target.parentNode;
                console.log(y)
            }
        })); 
    }

    qs('.tasks')[AEL]('click',function(e){
        if(e.target.parentNode.tagName === 'LI'){
            classActive('.arrow','toggle',e.target.parentNode);
            classActive('.ready_img','toggle',e.target.parentNode);
        }
    });
    
    function appendLi(index){
        if(qs('#addList').value !== ''){
            let container = el('li');
            container.innerHTML = qs('#maketLi').innerHTML;
            container[q]('.ready_header').innerHTML = qs('#addList').value  ;
            index[q]('.ready').appendChild(container);
        }
    }

    qs('#appendItem')[AEL]('click',function(){
        qs('.append').classList.remove('active');
        appendLi(y);
        qs('#addList').value = '';
    });

    function controlItem(){
        qsAll('.index').forEach((slide, index) => (slide.style.transform = `translateX(${105 * (index)}%`));
    }

    document[AEL]('DOMContentLoaded', function () {
        const ele = qs('.tasks');

        let pos = { left: 0, x: 0, y: 0 };

        const mouseDownHandler = function (e) {
        
            pos = {
                left: ele.scrollLeft,
                x: e.clientX,
            };

            document[AEL]('mousemove', mouseMoveHandler);
            document[AEL]('mouseup', mouseUpHandler);
        };

        const mouseMoveHandler = function (e) {
            const dx = e.clientX - pos.x;
        
            ele.scrollLeft = pos.left - dx;
        };

        const mouseUpHandler = function () {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };

        ele[AEL]('mousedown', mouseDownHandler);
    });

    
    