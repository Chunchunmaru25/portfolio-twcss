'use client';

import MorphingCard from '../twcss/MorphingCard';

export default function Portfolio() {
    const techstack = ['React', 'MySQL', 'Node.js', 'TailwindCSS'];
    return (
        <>
            <div className="min-h-screen bg-base-100 py-12 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <MorphingCard
                            title="Holy Rosary of Cabuyao"
                            subtitle="Web-Based Appointment Scheduling System Utilizing NSGA-II for Holy Rosary of Cabuyao Hospital"
                            techstack={techstack}
                            images={[
                                {
                                    src: "https://picsum.photos/id/1025/2000/1200",
                                    caption: "Patient Booking Interface",
                                    description: "A clean and intuitive web interface allows patients to book, reschedule, or cancel appointments online."
                                },
                                {
                                    src: "https://picsum.photos/id/1035/2000/1200",
                                    caption: "Optimized Scheduling Algorithm",
                                    description: "NSGA-II algorithm efficiently balances doctor workloads and minimizes patient waiting time."
                                },
                                {
                                    src: "https://picsum.photos/id/1045/2000/1200",
                                    caption: "Admin Dashboard",
                                    description: "Hospital staff can monitor appointments, manage resources, and track patient flow in real-time."
                                },
                                {
                                    src: "https://picsum.photos/id/1055/2000/1200",
                                    caption: "Improved Hospital Efficiency",
                                    description: "Streamlined operations lead to better healthcare delivery and higher patient satisfaction."
                                }
                            ]}
                        >
                            <button className="mt-6 w-full py-4 bg-white text-zinc-900 font-semibold rounded-3xl">
                                Holy Rosary of Cabuyao Hospital
                            </button>
                        </MorphingCard>
                    </div>
                </div>
            </div>
        </>
    );
}