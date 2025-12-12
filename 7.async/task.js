class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        // Проверка наличия звонка на такое же время
        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        // Добавление нового звонка в коллекцию
        this.alarmCollection.push({
            time: time,
            callback: callback,
            canCall: true
        });
    }

    removeClock(time) {
        // Удаление всех звонков с указанным временем
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        // Возвращает текущее время в формате HH:MM
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    start() {
        // Проверка наличия запущенного интервала
        if (this.intervalId !== null) {
            return;
        }

        // Создание интервала
        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();

            // Проверка всех звонков
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
        }, 1000);
    }

    stop() {
        // Остановка интервала
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        // Сброс возможности вызова для всех звонков
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    clearAlarms() {
        // Остановка интервала и удаление всех звонков
        this.stop();
        this.alarmCollection = [];
    }
}