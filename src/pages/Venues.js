import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VenueCard from '@/components/venueCard'

export default function Venues({ page_content }) {
    const venues = [
        {
            title: "Edgbaston , Birmingham",
            img: "./assets/images/venues/v1.jpeg"
        },
        {
            title: "The County Ground, Northampton",
            img: "./assets/images/venues/v2.jpeg"
        },
        {
            title: "Headingley , Leeds",
            img: "./assets/images/venues/v3.jpeg"
        },
        {
            title: "Uptonsteel , Leicester",
            img: "./assets/images/venues/v4.jpeg"
        }
    ];

    return (
        <>
            <Head>
                <title>WCL Cricket Highlights 2025</title>
                <meta name="description" content="Explore WCL Cricket Highlights 2025..." />
            </Head>

            <div className="main">
                <Header />
                <div className="body">
                    <div className="venue-container">
                        <div className="venue-header-container">
                            <ul>
                                <li>Homepage &gt;</li>
                                <li>Venues</li>
                            </ul>
                            <div className="page-headers">
                                <div>WCL Venues</div>
                            </div>
                        </div>

                        <div className="venue-grid">
                            {venues.map((venue, index) => (
                                <VenueCard
                                    key={index}
                                    title={venue.title}
                                    image={venue.img}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Footer pagecontent={page_content} />
            </div>

            <style jsx>{`
                .venue-container {
                    width: 100%;
                    max-width: 1280px;
                    padding: 0 20px;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 100px;
                    margin-top: 80px;
                }

                .venue-header-container {
                    width: 100%;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }

                .venue-header-container ul {
                    display: flex;
                    gap: 5px;
                    list-style: none;
                }

                .venue-header-container ul li {
                    color: #ABB1CB;
                    font-family: "Poppins Regular";
                    font-size: 14px;
                    text-transform: uppercase;
                }

                .page-headers div {
                    color: #ffffff;
                    font-family: "Poppins Semibold";
                    font-weight: 500;
                    font-size: 30px;
                    letter-spacing: -0.04em;
                    text-transform: uppercase;
                }

                .venue-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 15px;
                }

                @media screen and (max-width: 768px) {
                    .news-grid {
                        grid-template-columns: repeat(1, 1fr);
                    }
                }
            `}</style>
        </>
    );
}

export async function getServerSideProps({ req }) {
    return {
        props: {
            canonical_link: `https://${req.headers.host}${req.url}`,
            meta_title: "WCL Cricket Highlights 2025 | World Championship of Legends Cricket Highlights - WCL T20",
            meta_description: "Explore WCL Cricket Highlights 2025! Enjoy World Championship of Legends cricket highlights with top stars at Edgbaston and Northampton. Watch now!",
            meta_keywords: "WCL Cricket Highlights 2025, World Championship of Legends Cricket Highlights, Edgbaston, Northampton, WCL T20",
            page_content: `
              <h1>World Championship Of Legends Cricket Highlights 2025 – WCL T20</h1>
              <p>Immerse yourself in the action with our official World Championship of Legends Cricket highlights and video library...</p>
              <p>Our WCL video collection goes beyond just highlights. You can find full-match replays featuring legendary cricketers...</p>
              <p>From the electrifying opening ceremony to the final winning moments, all World Championship of Legends Cricket highlights of the 2025 season will be available for you to watch and share...</p>
            `
        }
    }
}
