import React from "react";
import axios from "axios";
import Movie from "../components/Movie.js";
import "./Home.css";
// import PropTypes from "prop-types";

// const foodILike = [
//   {
//     id: 1,
//     name: "Kimchi",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
//     rating: 4.9
//   },
//   {
//     id: 2,
//     name: "Samgyeopsal",
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
//     rating: 3.2
//   },
//   {
//     id: 3,
//     name: "Bibimbap",
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//     rating: 4.4
//   },
//   {
//     id: 4,
//     name: "Doncasu",
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
//     rating: 4.2
//   },
//   {
//     id: 5,
//     name: "Kimbap",
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
//     rating: 4.6
//   }
// ];

// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h2>I like {name}</h2>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number
// };



// const devInfos = [
//   {
//     id: 1,
//     name: "Tom Kazensky",
//     stack: "C++"
//   },
//   {
//     id: 2,
//     name: "Alan Schezer",
//     stack: "JAVA"
//   },
//   {
//     id: 3,
//     name: "TOHOKU YAMATO",
//     stack: "GO"
//   }
// ];


// function Devs({ name, stack }){
//   return (
//     <div>
//       <h2>Dev Name {name}</h2>
//       <h3>Dev Stack : {stack}</h3>
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       {foodILike.map(dish => (
//         <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
//       ))}
//       {devInfos.map(agent =>
//         <Devs key={agent.id} name={agent.name} stack={agent.stack}/>)}
//     </div>
//   );
// }

class Home extends React.Component{
  // constructor(props){
  //   super(props);
  //   console.log("hello");
  // }
  // state = {
  //   count: 0
  // };

  // add = () => {
  //   this.setState(current => ({ count: current.count + 1 }));
  //   console.log("add");
  // };
  
  // minus = () => {
  //   this.setState(current => ({ count: current.count - 1 }));
  //   console.log("minus");
  // }

  // componentDidMount(){
  //   console.log("component rendered");
  // }

  // componentDidUpdate(){
  //   console.log("component Updated");
  // }

  // componentWillUnmount(){
  //   console.log("good bye, cruel world");
  // }

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { 
      data:{
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false });
  };

  componentDidMount(){
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 4000);
    this.getMovies();
  }

  render(){
    // console.log("i am rendering")
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading
          ? <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          : (
            <div className="movies">
              {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
              ))}

            </div>
          )}
              </section>
            );
  }
}

export default Home;