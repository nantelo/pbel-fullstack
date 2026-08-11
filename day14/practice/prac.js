
async function display() {
    const res =await fetch("https://fakestoreapi.com/products");
    const res_data=await res.json();

   container(res_data);
    
}

function container(data){
    const container=document.getElementById("container");
   

   data.forEach((el,i)=>{
    const child=document.createElement("div");
    child.style.textAlign="center";
    child.style.width="300px";
   
   
     const cat = document.createElement("p");
        cat.innerText=el.category;

        const img = document.createElement("img");
        img.src=el.image;
        img.style.width="200px";
        img.style.height="200px"

        const title = document.createElement("p");
        title.innerText=el.title

        const price = document.createElement("p");
        price.innerText=el.price

        const desc = document.createElement("p");
        desc.innerText=el.description;

   
    child.append(cat,img,title,price,desc);
    container.append(child);
   });
}

display()