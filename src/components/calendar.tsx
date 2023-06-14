import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

const events = [
    { title: 'Meeting', start: new Date() }
]

export function Calendar() {

    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView='dayGridMonth'
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                events={events}
                eventContent={renderEventContent}
            />
        </div>
    )
}

// a custom render function
function renderEventContent(eventInfo: { timeText: string, event: { title: string } }) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            : <i>{eventInfo.event.title}</i>
        </>
    )
}