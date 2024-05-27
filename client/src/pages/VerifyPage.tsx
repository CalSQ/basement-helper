import { FaAngleRight, FaDiscord } from 'react-icons/fa';
import placeholderServer from '../assets/placeholder-server.png';
import { ButtonBase } from '../components/ButtonBase';

export function VerifyPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 overflow-y-scroll">
      <div className="sticky top-0 flex w-full max-w-3xl flex-col gap-4 p-8 pt-12">
        {/* Server Invite Card */}
        <section className="flex animate-fade-in-1 flex-col gap-4 rounded-lg bg-secondary-background p-8 pt-0 font-semibold text-primary-text">
          <header className="flex h-24 flex-row items-center">
            <img
              className="aspect-square w-32 -translate-y-4 rounded-xl"
              src={placeholderServer}
            ></img>
            <h1>
              Invited by
              <br />
              <span className="text-2xl text-primary-accent">
                Basement Devs
              </span>
            </h1>
          </header>
          <main className="rounded-lg bg-primary-block p-4 font-normal">
            Welcome to the server!
            <br />
            This server is a basement of developers, ready to discuss, share and
            help at any time!
          </main>
          <footer className="text-secondary-text">
            If you are having trouble, contact server staff.
          </footer>
        </section>

        {/* Conditions Card */}
        {/* <section className="flex animate-fade-in-1 flex-col gap-4 rounded-lg bg-secondary-background p-8 font-semibold text-primary-text">
          <header>
            <h1 className="text-2xl">Conditions</h1>
          </header>
          <main>
            <ul className="font-medium">
              <li className="flex flex-row items-center gap-4">
                1<div className="h-[1px] grow bg-secondary-text"></div>
                Requesting external application data
              </li>
              <li className="flex flex-row items-center gap-4">
                2<div className="h-[1px] grow bg-secondary-text"></div>
                Required cookies for identification
              </li>
            </ul>
          </main>
          <footer className="flex flex-row justify-between">
            <span>I agree to the conditions</span>
            <div>Button</div>
          </footer>
        </section> */}

        {/*  Discord Login Button */}
        <ButtonBase>
          <FaDiscord size={36} />
          <span className="grow text-left">
            Login with Discord
            {/* Continue with Discord
          <br />
          <span className="text-secondary-text">callc</span> */}
          </span>
          <FaAngleRight size={24} />
        </ButtonBase>
      </div>
    </div>
  );
}
