document.addEventListener('DOMContentLoaded', function () {
        // ...código existente...

        // Botón para ver todo el año
        document.getElementById('view-year').addEventListener('click', viewYear);

        // Definir el objeto notes
        const notes = {}; // Puedes inicializarlo con datos si es necesario

        // Mostrar todas las notas guardadas
        showAllNotes();

        function viewYear() {
            const calendarEl = document.getElementById('calendar');
            calendarEl.innerHTML = ''; // Limpia el calendario actual

            for (let month = 0; month < 12; month++) {
                const monthContainer = document.createElement('div');
                monthContainer.style.marginBottom = '20px';

                const monthTitle = document.createElement('h3');
                monthTitle.textContent = new Date(2025, month).toLocaleString('es-ES', { month: 'long' });
                monthTitle.style.color = '#ff66a3';
                monthTitle.style.textAlign = 'center';
                monthContainer.appendChild(monthTitle);

                const monthCalendar = document.createElement('div');
                monthCalendar.className = 'calendar';
                generateCalendar(2025, month, monthCalendar);
                monthContainer.appendChild(monthCalendar);

                calendarEl.appendChild(monthContainer);
            }
        }

        function generateCalendar(year, month, container) {
            const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
            dayNames.forEach(day => {
                const dayEl = document.createElement('div');
                dayEl.className = 'day-name';
                dayEl.textContent = day;
                container.appendChild(dayEl);
            });

            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            for (let i = 0; i < firstDay; i++) {
                const emptyDay = document.createElement('div');
                emptyDay.className = 'day other-month';
                container.appendChild(emptyDay);
            }

            for (let day = 1; day <= daysInMonth; day++) {
                const dayEl = document.createElement('div');
                dayEl.className = 'day';
                dayEl.textContent = day;
                container.appendChild(dayEl);
            }
        }

        function showAllNotes() {
            const notesContainer = document.getElementById('notes-container');
            const notesList = document.getElementById('notes-list');
            notesList.innerHTML = ''; // Limpia la lista de notas

            for (const [date, note] of Object.entries(notes)) {
                const noteItem = document.createElement('li');
                noteItem.textContent = `${date}: ${note}`;
                notesList.appendChild(noteItem);
            }

            if (Object.keys(notes).length === 0) {
                const noNotesMessage = document.createElement('p');
                noNotesMessage.textContent = 'No tienes notas guardadas.';
                noNotesMessage.style.color = '#ff66a3';
                notesContainer.appendChild(noNotesMessage);
            }
        }
});