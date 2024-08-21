document.getElementById('start').addEventListener('click', async () => {
    try {
        // Solicita acesso ao áudio e vídeo do usuário
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        
        // Configura o vídeo para exibir o stream
        const video = document.getElementById('video');
        video.srcObject = stream;

        // Configura o áudio para exibir o stream
        const audio = document.getElementById('audio');
        audio.srcObject = stream;

        // Cria um gravador para capturar o stream
        const mediaRecorder = new MediaRecorder(stream);
        let chunks = [];
        
        mediaRecorder.ondataavailable = (event) => {
            chunks.push(event.data);
        };
        
        mediaRecorder.onstop = () => {
            const blob = new Blob(chunks, { type: 'video/webm' });
            audio.src = URL.createObjectURL(blob);
        };
        
        document.getElementById('stop').addEventListener('click', () => {
            mediaRecorder.stop();
        });

        mediaRecorder.start();
    } catch (err) {
        console.error('Erro ao acessar a mídia: ', err);
    }
});