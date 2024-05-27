import { FaAngleRight } from 'react-icons/fa';
import placeholderServer from '../assets/placeholder-server.png';
import { SiRoblox } from 'react-icons/si';
import { ButtonBase } from '../components/ButtonBase';

export function ConnectionsPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 overflow-y-scroll">
      <div className="sticky top-0 flex w-full max-w-3xl flex-col gap-4 p-8 pt-12">
        {/* Server Invite Card max-w-screen-md*/}
        <section className="flex animate-fade-in-1 flex-col gap-4 rounded-lg bg-secondary-background p-8 pt-0 font-semibold text-primary-text">
          <header className="flex h-24 flex-row items-center">
            <img
              className="aspect-square w-32 -translate-y-4 rounded-xl"
              src={placeholderServer}
            ></img>
            <h1>
              Logged in as
              <br />
              <span className="text-2xl text-primary-accent">callc</span>
            </h1>
          </header>
          <main className="rounded-lg bg-primary-block p-4 font-medium">
            No description.
          </main>
          <footer className="text-secondary-text">
            <p>
              Required connections are indiciated by a{' '}
              <span className="text-required">red</span> outline
            </p>
            <p className="cursor-pointer text-right font-normal underline">
              Switch account
            </p>
          </footer>
        </section>

        {/*  Roblox Login Button */}
        <ButtonBase>
          <SiRoblox size={36} />
          <span className="grow text-left">
            Login with Roblox
            {/* Roblox
          <br />
          <span className="text-secondary-text">callc</span> */}
          </span>
          <FaAngleRight size={24} />
        </ButtonBase>

        {/*  Continue Button */}
        <ButtonBase narrow isDisabled>
          <span className="grow text-left">Continue</span>
          <FaAngleRight size={24} />
        </ButtonBase>
      </div>
    </div>
  );
}
