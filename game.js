AFRAME.registerComponent("game-play",{
    schema:{
        contentId:{type:"string",default:"#coin"}
    },
    update:function(){
        this.Collision(this.data.contentId)
    },
    Collision:function(contentId){
        const element = document.querySelector(contentId);
        element.addEventListener("collide",(e) => {
            if(element.includes("#coin")){
                element.setAttribute("visible",false);
                console.log("coin collision")
            }
            if(element.includes("#fish")){
                console.log("fish collision")
            }
        })
    }
})