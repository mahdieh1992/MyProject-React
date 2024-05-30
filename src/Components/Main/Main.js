import Services from "./Services"
import Destination from "./Destination"
import Temp from "./Temp"
import Ticket from "./Ticket"

export default function Main() {

    const services = [
        { id: 1, image: 'svgs/fire.svg', title: 'Camping & Day Use', caption: 'Return to your favorite spot or discover a new one that’s right for you.' },
        { id: 2, image: 'svgs/tickets.svg', title: 'Tours & Tickets', caption: 'Reserve tours and tickets to participate in events.' },
        { id: 3, image: 'svgs/paper.svg', title: 'Permits', caption: 'Obtain permits for access to high-demand locations.' },
        { id: 4, image: 'svgs/fish.svg', title: 'Recreation Activities', caption: 'Find the best spots for hunting, fishing & recreational shooting.' },
    ]
    return (
        <div className="main">
            <div className="main__container">

                {services.map((service) => (
                    <div key={service.id}> <Services {...service} /></div>
                ))}
                <Destination />
                <Temp />
                <Ticket />
              

            </div>

        </div>
    )

}