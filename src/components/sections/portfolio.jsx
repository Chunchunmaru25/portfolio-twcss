import { useEffect, useState } from 'react';
import MorphingCard from '../twcss/MorphingCard';
import supabase from '@/config/supabase';
import { div } from 'three/src/nodes/math/OperatorNode';
export default function Portfolio() {
    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('portfolio')
                .select('*');

            if (error) {
                console.log("Error:", error.message);
                return;
            }
            setPortfolio(data);
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="min-h-screen bg-base-100 py-12 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {portfolio.map((item) => (
                            <MorphingCard
                                key={item.id}
                                title={item.title}
                                subtitle={item.subtitle}
                                techstack={item.techstack}
                                images={item.images?.map((img, i) => ({
                                    key: i,
                                    caption: img.caption,
                                    src: img.src,
                                    description: img.description
                                }))}
                            >
                                {/* <button className="mt-6 w-full py-4 bg-white text-zinc-900 font-semibold rounded-3xl">
                                    Holy Rosary of Cabuyao Hospital
                                </button> */}
                            </MorphingCard>
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
}