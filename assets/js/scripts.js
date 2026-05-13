document.addEventListener('DOMContentLoaded', () => {
    // Asset Library from CDN
    const imageUrl = "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/dfce8554-5c82-4186-9dc8-9c506cb8bdbe.png";
    const videoUrls = [
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/b5e5f71c-774b-48fd-9d1c-62a96c5cb797.mp4",
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/a761fdb7-82b9-4134-9005-50204b672060.mp4",
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/98c4fda9-5b39-4858-a00f-6d8a9a4f7ca4.mp4",
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/4321dc72-cf11-4750-b63e-50e015977ed7.mp4",
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/0b51decd-8916-4e97-bcea-93d03219ce2e.mp4",
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/5c389a3d-e34f-4e1a-9e70-89292ff2afa3.mp4",
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/c74b514f-1d98-47df-8f0a-07c605c76626.mp4",
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/0c7eb1d6-cb3a-4222-a5b4-010e2a14724a.mp4",
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/47330362-1eba-463b-8557-7f50270c71c8.mp4",
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/fdf3dc10-571b-4b7d-a9d4-bb5dbfdfdbdc.mp4",
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/1b3714d0-aca4-411c-9f28-daf9b9abb6e9.mp4",
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/fa9e948a-fb02-4e12-9512-3ecd749e12e8.mp4",
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/6d1e88f5-c942-4e5f-a599-d48ee0ace71b.mp4",
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/317cc761-110a-47e7-a046-16830d456c6b.mp4",
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/1d60ac60-ad27-4dbb-8ea6-b09cddd1103f.mp4",
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/a3b5a54a-d6fc-4521-ac62-eb6219166331.mp4",
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/f797ad53-d5f4-4322-abf6-4eaa811cd58b.mp4",
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/8634ebb4-1670-4ddf-ae07-a29e5e5d11b8.mp4",
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/67b7fe0e-cd51-42d6-bca2-289561e831d4.mp4",
        "https://pub-97f5bb5aae4143d9b9879547fc5d1be8.r2.dev/users/df4fa431-2015-4b34-a12e-cd77c6b6e4c0/0a96443e-0ad2-4130-9494-5b4d362d13c0.mp4"
    ];

    // Global State
    const cachedVideoSources = [];
    let isPlaying = false;

    // DOM Elements
    const loader = document.getElementById('loader');
    const progressBar = document.getElementById('progress-bar');
    const mediaContainer = document.getElementById('media-container');
    const stillImage = document.getElementById('still-image');
    const playbackVideo = document.getElementById('playback-video');

    // --- PRELOADER LOGIC ---
    // Fetches videos as blobs to ensure seamless playback and reliable reversing 
    // without network buffering interruptions.
    async function preloadAssets() {
        let loadedCount = 0;
        const totalAssets = videoUrls.length + 1; // 20 videos + 1 image

        const updateProgress = () => {
            loadedCount++;
            const percent = (loadedCount / totalAssets) * 100;
            progressBar.style.width = `${percent}%`;
            
            if (loadedCount === totalAssets) {
                setTimeout(initializeInteraction, 400); // Brief delay for visual completion
            }
        };

        // Preload Image
        const img = new Image();
        img.src = imageUrl;
        img.onload = updateProgress;
        img.onerror = updateProgress; // Proceed even if image fails temporarily

        // Preload Videos into Blob URLs
        for (const url of videoUrls) {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');
                const blob = await response.blob();
                const blobUrl = URL.createObjectURL(blob);
                cachedVideoSources.push(blobUrl);
                updateProgress();
            } catch (error) {
                console.warn("Blob fetch failed, falling back to direct URL. Reverse play may buffer.", error);
                // Fallback to direct URL if CORS or network blocks blob fetch
                cachedVideoSources.push(url);
                updateProgress();
            }
        }
    }

    // --- INTERACTION LOGIC ---
    function initializeInteraction() {
        // Hide loader, show main media container
        loader.style.display = 'none';
        mediaContainer.classList.remove('hidden');

        // Attach primary interaction listener
        mediaContainer.addEventListener('click', handleMediaClick);
    }

    function handleMediaClick() {
        if (isPlaying) return; // Prevent multiple triggers
        isPlaying = true;

        // Select a random video from the cached sources
        const randomIndex = Math.floor(Math.random() * cachedVideoSources.length);
        playbackVideo.src = cachedVideoSources[randomIndex];

        // Crossfade state
        stillImage.style.opacity = '0';
        playbackVideo.style.opacity = '1';

        // Play forward
        playbackVideo.play().catch(e => {
            console.error("Playback failed:", e);
            resetState();
        });

        // Listen for end to trigger bounce/reverse
        playbackVideo.onended = () => {
            triggerRubberbandAndReverse();
        };
    }

    function triggerRubberbandAndReverse() {
        // 1. Visual Rubberband effect
        mediaContainer.classList.add('bounce-effect');
        setTimeout(() => {
            mediaContainer.classList.remove('bounce-effect');
        }, 250);

        // 2. Start manual reverse playback
        playbackVideo.pause(); // Ensure native playback is halted
        
        let lastTime = performance.now();
        const reverseSpeedMultiplier = 1.6; // "go slightly faster back"

        function reverseStep(currentTime) {
            // Calculate time delta to maintain consistent speed across frame rates
            const deltaTime = (currentTime - lastTime) / 1000;
            lastTime = currentTime;

            // Decrement video time manually
            const newVideoTime = playbackVideo.currentTime - (deltaTime * reverseSpeedMultiplier);

            if (newVideoTime > 0.05) { 
                // Provide a small buffer to prevent exact 0 floating point errors
                playbackVideo.currentTime = newVideoTime;
                requestAnimationFrame(reverseStep);
            } else {
                // Reached the beginning, snap back to idle state
                resetState();
            }
        }
        
        // Kick off reverse loop
        requestAnimationFrame(reverseStep);
    }

    function resetState() {
        playbackVideo.currentTime = 0;
        stillImage.style.opacity = '1';
        playbackVideo.style.opacity = '0';
        isPlaying = false;
    }

    // Start preloading immediately
    preloadAssets();
});
