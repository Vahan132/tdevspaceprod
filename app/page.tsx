'use client';
// ✅ 4. Project components
import HeroSection from '@/components/sections/HeroSection';
import AboutComponent from '@/components/sections/About';
import CoursesComponent from '@/components/sections/Courses';
import ContactComponent from '@/components/sections/Contact';
import ScrollToTopButton from '@/components/layout/ScrollToTopButton';
import FadeInUp from '@/components/ui/FadeInUp';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Sections */}
      <FadeInUp>
        <AboutComponent />
      </FadeInUp>

      <FadeInUp>
        <CoursesComponent />
      </FadeInUp>

      <FadeInUp>
        <ContactComponent />
      </FadeInUp>

      <ScrollToTopButton />
    </div>
  );
};

export default Home;
