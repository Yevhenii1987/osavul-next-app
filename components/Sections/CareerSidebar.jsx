'use client';

import ButtonDark from '@/components/UI/ButtonDark';
import ArticleNav from '@/components/UI/ArticleNav';
import ContactForm from '@/components/UI/ContactForm';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function CareerSidebar({ location, nav }) {
  const [showForm, setShowForm] = useState(false);
  function handleShowForm() {
    setShowForm(prevState => !prevState);
  }
  return (
    <aside className="career-sidebar article-sidebar">
      <div className="article-sidebar-wrap">
        <div className="article-show-form">
          <ButtonDark onClick={handleShowForm}>Apply for Position</ButtonDark>

          <div className="sections-divider"></div>
        </div>

        <AnimatePresence initial={false}>
          {showForm &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ContactForm formType="career-form" />
            </motion.div>}
        </AnimatePresence>

        <AnimatePresence initial={true}>
          {!showForm &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="article-details">
                <h3>Location</h3>
                <div dangerouslySetInnerHTML={{
                  __html: location,
                }}></div>
              </div>
              <div className="sections-divider"></div>
              <ArticleNav navData={nav} />
            </motion.div>}
        </AnimatePresence>

      </div>
    </aside>
  );
}
