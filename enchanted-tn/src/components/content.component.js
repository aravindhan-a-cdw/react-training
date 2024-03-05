import React from "react";
import layoutStyle from '../layout.module.css';

class Section extends React.Component {
    render() {
        return (
            <section>
                <h2>Many Wonders, One Emotion</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                    Aldus PageMaker including versions of Lorem Ipsum.</p>
            </section>
        )
    }
}

const tnCities = [
    {
        name: "Pollachi",
        title: "Never Ending Paddy Fields and Narrow Roads",
        image: 'pollachi.png',
        description: `Lorem Ipsum is simply dummy text ot the brinting and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a gallary of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.`
    }, 
    {
        name: "Thanjavur",
        title: "Small Ride across town in mid summer heat",
        image: "thanjavur.png",
        description: `Lorem Ipsum is simply dummy text ot the brinting and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a gallary of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.`
    },
    {
        name: "Chidambaram",
        title: "Catching a Short <br /> Break at the Lotus Pond",
        image: "chidambaram.png",
        description: `Lorem Ipsum is simply dummy text ot the brinting and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a gallary of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.`
    },
    {
        name: "Masanagudi",
        title: "Road Trip enroute the mountains and forests",
        image: "masangudi.png",
        description: `Lorem Ipsum is simply dummy text ot the brinting and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a gallary of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.`
    },
    {
        name: "Kumbakkonam",
        title: "Fall in love with the divine agraharams",
        image: "kumbakonam.png",
        description: `Lorem Ipsum is simply dummy text ot the brinting and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a gallary of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.`
    },
    {
        name: "Tirunelveli",
        title: "Energy driven drive through the windmills",
        image: "tirunelveli.png",
        description: `Lorem Ipsum is simply dummy text ot the brinting and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a gallary of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.`
    }
]

class Article extends React.Component {
    // constructor(pros) {
    //     // super(props);
    //     super();
    //     console.log("Props:  ", pros);
    //     console.log("this.props:  ", this.pros);
    //     this.data = pros.data;
    // }
    render() {
        // console.log(this.article);
        console.log(this.props);
        return (
            <article>
                {/* <!-- Main image of the article --> */}
                <div className="image-container">
                    <img src={"./images/" + this.props.data.image} alt={this.props.data.name} />
                </div>
                {/* <!-- Contents of the article --> */}
                <h3>{this.props.data.title}</h3>
                <h4>{this.props.data.name}</h4>
                <p className="content">{this.props.data.description}</p>
                <button>
                    Read More
                </button>
            </article>
        )
    }
}

export default class Content extends React.Component {
    render() {
        return (
            <>
                <main>
                    <div className={layoutStyle.row}>
                        {
                            tnCities.map((cityData, index) => {
                                return <Article data={cityData} key={index} />
                            })
                        }
                    </div>
                </main>
                <Section />
            </>
        )
    }
}


