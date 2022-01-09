import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis';
import Particles from 'react-tsparticles';
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {

  const {isAuthenticated, logout} = useMoralis();

  if(!isAuthenticated) return <Login />

  return (
    
    <div className="h-screen overflow-y-scroll overflow-hidden">
      
      <Head>
        <title>Metaverse-dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      
        <div className="max-w-screen-2xl
        mx-auto">
          <Header />
          <Messages />

        </div>

     
      <Particles
        className='absolute z-[-1]'
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#701a75",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#FFFF00",
            },
            links: {
              color: "#FFFF00",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}
