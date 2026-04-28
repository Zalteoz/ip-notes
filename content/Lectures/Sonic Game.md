>[!danger] WARNING
>THIS SHIT WILL PLAY FULL BLAST, **LOWER YOUR VOLUME**

<div id="flash-container" style="width: 100%; height: 600px; background: #000; border-radius: 8px; overflow: hidden;"></div>

<script src='https://unpkg.com/@ruffle-rs/ruffle'></script>
<script>
  window.RufflePlayer = window.RufflePlayer || {};
  window.addEventListener('load', (event) => {
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    const container = document.getElementById('flash-container');
    container.appendChild(player);
    
    // Replace 'static/mygame.swf' with your actual file name
    player.load('../static/sonic_7.swf'); 
    
    // Optional: Make it look nice
    player.style.width = '100%';
    player.style.height = '100%';
  });
</script>

