initBattery();

function initBattery(){
    const batteryLiquid = document.querySelector(".Bliquid");
    const batteryStatus = document.querySelector(".Bstatus");
    const bPercentage = document.querySelector(".Bpercentage");

    navigator.getBattery().then((batt)=>{
       let updateBattery = () => {
            let level = Math.floor(batt.level*100);
            bPercentage.innerHTML=level + "%";
            batteryLiquid.style.height=`${parseInt(batt.level*100)}%`;
            if(level==100){
                batteryStatus.innerHTML=`Battery full <i class = "ri-battery-2-fill green-color"></i>`;
                batteryLiquid.style.height="103%";
            }
            else if (level<=20 &! batt.charging){
                batteryStatus.innerHTML=`Low charge <i class = "ri-plug-line animated-red animated-red"></i>`;
            }
            else if (batt.charging){
                batteryStatus.innerHTML=`Charging... <i class = "ri-flashlight-line animated-green"></i>`;
            }
            else{
                batteryStatus.innerHTML="";
            }

            if (level<=20){
                batteryLiquid.classList.add("gradient-color-red");
                batteryLiquid.classList.remove("gradient-color-green", 
                "gradient-color-yellow", "gradient-color-orange");
            }
            else if (level<=48){
                batteryLiquid.classList.add("gradient-color-orange");
                batteryLiquid.classList.remove("gradient-color-green", 
                "gradient-color-yellow", "gradient-color-red");
            }
            else if (level<=80){
                batteryLiquid.classList.add("gradient-color-yellow");
                batteryLiquid.classList.remove("gradient-color-green", 
                "gradient-color-orange", "gradient-color-red");
            }
            else{
                batteryLiquid.classList.add("gradient-color-green");
                batteryLiquid.classList.remove("gradient-color-yellow",
                 "gradient-color-orange", "gradient-color-red");
            }
        };

        updateBattery();
    });
}