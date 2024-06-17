
const type = document.querySelector('#recipe');
const searchRecipe = document.querySelector('#search');
const btn = document.querySelector('.btn')

// searchRecipe.addEventListener('input' , function(){
//     console.log(searchRecipe.value)
//     getData(searchRecipe.value)
// })

var meals = `carrot
,broccoli
,asparagus
,cauliflower
,corn
,cucumber
,green pepper
,lettuce
,mushrooms
,onion
,potato
,pumpkin
,red pepper
,tomato
,beetroot
,brussel sprouts
,peas
,zucchini
,radish
,sweet potato
,artichoke
,leek
,cabbage
,celery
,chili
,garlic
,basil
,coriander
,parsley
,dill
,rosemary
,oregano
,cinnamon
,saffron
,green bean
,bean
,chickpea
,lentil
,apple
,apricot
,avocado
,banana
,blackberry
,blackcurrant
,blueberry
,boysenberry
,cherry
,coconut
,fig
,grape
,grapefruit
,kiwifruit
,lemon
,lime
,lychee
,mandarin
,mango
,melon
,nectarine
,orange
,papaya
,passion fruit
,peach
,pear
,pineapple
,plum
,pomegranate
,quince
,raspberry
,strawberry
,watermelon
,salad
,pizza
,pasta
,popcorn
,lobster
,steak
,bbq
,pudding
,pie
,cake
,sausage
,tacos
,kebab
,poutine
,seafood
,chips
,fries
,masala
,paella
,som tam
,chicken
,toast
,marzipan
,tofu
,ketchup
,hummus
,chili
,maple syrup
,parma ham
,fajitas
,champ
,lasagna
,poke
,chocolate
,croissant
,arepas
,bunny chow
,pierogi
,donuts
,rendang
,sushi
,ice cream
,duck
,curry
,beef
,goat
,lamb
,turkey
,fish
,crab
,bacon
,pepperoni
,salami
,ribs`;


let mealsArr = meals.split(',')
console.log(mealsArr)

var options = ' <option value="" selected disabled>select recipe</option>';
for (let i = 0; i < mealsArr.length; i++) {
    
    options += `
            <option value="${mealsArr[i]}">${mealsArr[i]}</option>
    `
}

document.getElementById('recipe').innerHTML = options ;

btn.addEventListener('click' , function(){
    getData(searchRecipe.value)
})

type.addEventListener('change' , function(e){
    e.target.value
    console.log(type.value)
    console.log(e.target.value)

    getData(e.target.value)

})

function getData(recipe='pizza'){
    let myReq = new XMLHttpRequest();

myReq.open('GET' , `https://forkify-api.herokuapp.com/api/search?q=${recipe}`);

myReq.send();

myReq.addEventListener("readystatechange" , function(){
    if(myReq.readyState == 4 && myReq.status == 200){
        // console.log(myReq.response)
        let allData = JSON.parse(myReq.response)
        // console.log(allData);

        let Data = allData.recipes;
        console.log(Data)

        displayData(Data)

    }
})

}

getData()

function displayData(Data){
    let cartona = '';

    console.log(Data)

    for (let i = 0; i < Data.length; i++) {
    
        cartona += `
        <div class="col-md-4 text-center">
           <img src="${Data[i].image_url}" class='w-100' alt="">
           <h3 class='py-2'>${Data[i].title}</h3>
        </div> `
        
    }

    window.document.querySelector('.row').innerHTML= cartona;
}