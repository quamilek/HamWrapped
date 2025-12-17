/**
 * Ham Wrapped - Główna aplikacja
 */

class HamWrappedApp {
    constructor() {
        this.parser = new ADIFParser();
        this.presentation = null;
        this.qsos = [];
        this.stats = null;

        // Swipe support variables
        this.touchStartX = 0;
        this.touchEndX = 0;

        this.init();
    }

    init() {
        this.setupFileUpload();
        this.setupNavigation();
        this.setupKeyboardNavigation();
    }

    /**
     * Konfiguracja uploadu plików
     */
    setupFileUpload() {
        const uploadArea = document.getElementById('upload-area');
        const fileInput = document.getElementById('file-input');
        const loading = document.getElementById('loading');

        // Drag & Drop
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('dragover');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');

            const files = e.dataTransfer.files;
            if (files.length > 0) {
                this.processFile(files[0]);
            }
        });

        // Click to upload
        uploadArea.addEventListener('click', (e) => {
            // Nie otwieraj ponownie jeśli kliknięto na sam input
            if (e.target !== fileInput) {
                fileInput.click();
            }
        });

        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                this.processFile(e.target.files[0]);
            }
        });

        // Zatrzymaj propagację kliknięcia na input
        fileInput.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Restart button
        document.getElementById('restart-btn').addEventListener('click', () => {
            this.restart();
        });
    }

    /**
     * Konfiguracja nawigacji prezentacji
     */
    setupNavigation() {
        document.getElementById('prev-btn').addEventListener('click', () => {
            if (this.presentation) {
                this.presentation.prevSlide();
            }
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            if (this.presentation) {
                this.presentation.nextSlide();
            }
        });
    }

    /**
     * Nawigacja klawiaturą
     */
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (!this.presentation) return;

            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                this.presentation.nextSlide();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.presentation.prevSlide();
            }
        });

        // Swipe support for mobile - na całej sekcji prezentacji
        const presentationSection = document.getElementById('presentation-section');

        presentationSection.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        presentationSection.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });
    }

    handleSwipe() {
        if (!this.presentation) return;

        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;

        if (diff > swipeThreshold) {
            this.presentation.nextSlide();
        } else if (diff < -swipeThreshold) {
            this.presentation.prevSlide();
        }
    }

    /**
     * Przetwórz plik ADIF
     */
    async processFile(file) {
        const loading = document.getElementById('loading');
        loading.classList.remove('hidden');

        try {
            const content = await this.readFile(file);
            this.qsos = this.parser.parse(content);

            if (this.qsos.length === 0) {
                throw new Error('Nie znaleziono żadnych QSO w pliku');
            }

            // Pobierz lokator i callsign użytkownika
            const userLocator = document.getElementById('user-locator').value.trim() || null;
            const userCallsign = document.getElementById('user-callsign').value.trim().toUpperCase() || null;

            // Określ rok (domyślnie najczęściej występujący w logu lub bieżący)
            const year = this.detectYear();

            // Filtruj QSO po roku (opcjonalnie)
            // const yearQsos = this.parser.filterByYear(year);
            // Użyj wszystkich QSO
            const yearQsos = this.qsos;

            // Oblicz statystyki
            const calculator = new StatisticsCalculator(yearQsos, userLocator);
            this.stats = calculator.calculateAll();

            console.log('Statystyki:', this.stats);

            // Utwórz prezentację
            this.presentation = new Presentation(this.stats, year, userCallsign);
            this.presentation.generateSlides();

            // Pokaż prezentację
            this.showPresentation();

        } catch (error) {
            console.error('Błąd przetwarzania pliku:', error);
            alert(`Błąd: ${error.message}`);
        } finally {
            loading.classList.add('hidden');
        }
    }

    /**
     * Odczytaj zawartość pliku
     */
    readFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (e) => {
                resolve(e.target.result);
            };

            reader.onerror = () => {
                reject(new Error('Nie udało się odczytać pliku'));
            };

            reader.readAsText(file);
        });
    }

    /**
     * Wykryj rok z logu
     */
    detectYear() {
        const years = {};

        this.qsos.forEach(qso => {
            if (qso.date && qso.date.year) {
                years[qso.date.year] = (years[qso.date.year] || 0) + 1;
            }
        });

        // Znajdź rok z największą liczbą QSO
        let maxYear = new Date().getFullYear();
        let maxCount = 0;

        for (const [year, count] of Object.entries(years)) {
            if (count > maxCount) {
                maxCount = count;
                maxYear = parseInt(year);
            }
        }

        return maxYear;
    }

    /**
     * Pokaż prezentację
     */
    showPresentation() {
        document.getElementById('upload-section').classList.remove('active');
        document.getElementById('presentation-section').classList.add('active');
    }

    /**
     * Restart - powrót do uploadu
     */
    restart() {
        document.getElementById('presentation-section').classList.remove('active');
        document.getElementById('upload-section').classList.add('active');
        document.getElementById('file-input').value = '';
        this.qsos = [];
        this.stats = null;
        this.presentation = null;
    }
}

// Uruchom aplikację po załadowaniu DOM
document.addEventListener('DOMContentLoaded', () => {
    window.app = new HamWrappedApp();
});
