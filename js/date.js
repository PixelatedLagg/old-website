if (new Date().getDay() != 0 && new Date().getDay() != 6) //not weekend
{
    if (new Date().getUTCHours() >= 20 || new Date().getUTCHours() <= 5) //3pm to 12am est (online)
    {
        document.getElementById("statusMessage").textContent = "Pixelated_Lagg is online.";
    }
    else
    {
        document.getElementById("statusMessage").textContent = `Pixelated_Lagg is offline. (I will be online in ${20 - new Date().getUTCHours()} hours)`;
        document.getElementById("lightID").className = "offline";
    }
}
else
{
    if (new Date().getUTCHours() >= 15 || new Date().getUTCHours() <= 7) //10am to 2am est (online)
    {
        document.getElementById("statusMessage").textContent = "Pixelated_Lagg is online.";
    }
    else
    {
        document.getElementById("statusMessage").textContent = `Pixelated_Lagg is offline. (I will be online in ${15 - new Date().getUTCHours()} hours)`;
        document.getElementById("lightID").className = "offline";
    }
}