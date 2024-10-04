'use client';

import { Icon } from '../../Icon/Icon';
import { Logo } from '../../Logo/Logo';
import { bridgeUrl, docsUrl } from 'apps/web/src/constants';
import { CookieManagerButton } from 'apps/web/src/components/CookieManagerButton';
import bigBaselogo from './assets/bigBaseLogo.svg';
import Image, { StaticImageData } from 'next/image';
import Container from 'apps/web/src/components/base-org/Container';
import AnalyticsProvider from 'apps/web/contexts/Analytics';
import Link from 'apps/web/src/components/Link';

export function Footer() {
  return (
    <AnalyticsProvider context="footer">
      <footer className="relative z-20 mx-auto mt-auto flex w-full flex-col justify-center bg-black bg-black pb-8 pt-20">
        <Container>
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="flex flex-col font-display text-sm text-white">
              <div className="bg-blue-300 flex w-32 flex-row items-start justify-start">
                <Logo color="white" />
              </div>
              <div className="flex flex-col space-y-4 pt-20">
                <p className="font-mono text-xl uppercase text-white">
                  Keep up with the latest from Base
                </p>
                <div className="flex flex-col">
                  <p className="text-white">
                    <a href="https://base.mirror.xyz/subscribe" className="underline">
                      Subscribe to our Mirror blog
                    </a>
                    : Mint the posts as unique NFTs
                  </p>
                  <p className="text-white">commemorating the evolution of Base.</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-white">
                    <Link href="/getstarted" className="underline" eventName="get_started">
                      Builder Resource Kit
                    </Link>
                    : Get help to build and grow your project on Base.
                  </p>
                </div>
              </div>
              <p className="pt-20 underline">
                <a href="https://docs.base.org/terms-of-service">Terms of Service</a>
                <br />
                <a href="https://docs.base.org/privacy-policy">Privacy Policy</a>
                <br />
                <Link href="/cookie-policy">Cookie Policy</Link>
                <br />
                <CookieManagerButton />
              </p>
            </div>
            <div className="flex h-full flex-col gap-5 pt-24 lg:flex-row lg:gap-10 lg:pt-0">
              <div className="flex h-full flex-col gap-4 lg:flex-row lg:gap-10">
                <Link href="/about" eventName="about">
                  <span className="font-mono text-xl text-white">About</span>
                </Link>
                <Link
                  href={docsUrl}
                  className="font-mono text-xl text-white"
                  target="_blank"
                  rel="noreferrer noopener"
                  eventName="docs"
                >
                  Docs
                </Link>
                <Link
                  href={bridgeUrl}
                  className="font-mono text-xl text-white"
                  target="_blank"
                  rel="noreferrer noopener"
                  eventName="bridge"
                >
                  Bridge
                </Link>
                <Link
                  href="https://base.mirror.xyz"
                  className="font-mono text-xl text-white"
                  eventName="blog"
                >
                  Blog
                </Link>
                <Link href="/jobs" eventName="jobs">
                  <span className="font-mono text-xl text-white">Jobs</span>
                </Link>
              </div>
              <div className="flex flex-row gap-4 pt-1 lg:h-full lg:gap-8">
                <Link
                  href="https://discord.com/invite/buildonbase"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Join us on Discord"
                  aria-label="Join us on Discord"
                  eventName="discord"
                >
                  <Icon name="discord" width="24" height="20" />
                </Link>
                <Link
                  href="https://twitter.com/base"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Join us on Twitter"
                  aria-label="Join us on Twitter"
                  eventName="x"
                >
                  <Icon name="twitter" width="24" height="20" />
                </Link>
                <Link
                  href="https://github.com/base-org"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Join us on Github"
                  aria-label="Join us on Github"
                  eventName="github"
                >
                  <Icon name="github" width="24" height="24" />
                </Link>
              </div>
            </div>
          </div>
          <Image src={bigBaselogo as StaticImageData} alt="Based" className="mt-20" />
        </Container>
      </footer>
    </AnalyticsProvider>
  );
}
