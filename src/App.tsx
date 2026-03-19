/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import Process from './components/Process';
import Differential from './components/Differential';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Popup from './components/Popup';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent/30">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Differential />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
      <Popup />
      <WhatsAppButton />
    </div>
  );
}

