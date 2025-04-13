const FILEURL = 'tracker-task-installer.exe';

const devloper = document.getElementById('devloper').addEventListener('click', function() {
    window.location.href = 'https://largen.ru';
})

function DeviceUser() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const userPlatform = navigator.platform.toLowerCase();

    if (/android/i.test(userAgent)) {
        return false;
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return false;
    }
    if (/windows phone/i.test(userAgent)) {
        return false;
    }
    if (/mobile/i.test(userAgent)) {
        return false;
    }

    if (userPlatform.includes("win")) {
        return true;
    }
}

if (DeviceUser()) {
    const windows = document.getElementById('windows').addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = FILEURL;
        link.download = 'tracker-task-installer.exe';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })
}