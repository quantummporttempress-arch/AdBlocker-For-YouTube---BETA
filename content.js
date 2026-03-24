console.log("👁️ Monitorando YouTube...");

setInterval(() => {
    const player = document.querySelector('.html5-video-player');

    if (!player) return;

    if (player.className.includes("ad-showing")) {
        console.log("🚨 ANÚNCIO DETECTADO!");

        let reloads = parseInt(localStorage.getItem("reloads") || "0");

        if (reloads < 3) {
            reloads++;
            localStorage.setItem("reloads", reloads);

            console.log("🔄 Reload " + reloads);

            setTimeout(() => {
                location.reload();
            }, 300);
        } else {
            localStorage.removeItem("reloads");
            console.log("✅ Sequência finalizada");
        }
    }

}, 1000);

const video = document.querySelector('video');

if(video){
    // salva o tempo a cada 1 segundo
    setInterval(() => {
        localStorage.setItem('ytResumeTime', video.currentTime);
    }, 1000);
}

const video = document.querySelector('video');

if(video){
    const resumeTime = localStorage.getItem('ytResumeTime');
    if(resumeTime){
        video.currentTime = parseFloat(resumeTime);
    }
}