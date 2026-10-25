/**
 * CHRISTIANA BERNARD | EXECUTIVE ASSISTANT PORTFOLIO
 * Vanilla JavaScript Controller
 * Zero-dependency, performant, accessible
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     01. DATA DEFINITIONS (PROJECT CASE STUDIES)
     ========================================================================== */
  const projectsData = [
    {
      id: 1,
      title: "Executive Calendar & Schedule Coordination",
      category: "Executive Assistance",
      image: "Work project/Calendar work project_.jpg",
      desc: "A structured, conflict-free executive calendar system showcasing high-level appointment scheduling, multi-timezone meeting coordination, daily buffer planning, and executive time-blocking.",
      deliverables: [
        "Color-coded prioritization for focus work, client meetings, and internal syncs",
        "Strategic 15-minute buffer blocks between executive sessions to eliminate overrun stress",
        "Automated timezone synchronization across Lagos (WAT), London (GMT), and New York (EST)",
        "Daily morning agenda briefing sent to the executive by 7:30 AM"
      ],
      tools: ["Google Calendar", "Calendly", "Time-Blocking", "Zoom", "Google Meet"]
    },
    {
      id: 2,
      title: "Client Lead & Follow-Up Management",
      category: "Operations & CRM Support",
      image: "Work project/Data work project_.jpg",
      desc: "A centralized spreadsheet CRM database system organizing prospect pipelines, tracking high-touch client communications, monitoring follow-up deadlines, and logging actionable next steps.",
      deliverables: [
        "Data validation dropdowns for pipeline stages (New Lead, Contacted, Qualified, Closed)",
        "Automated conditional formatting highlighting pending follow-ups exceeding 48 hours",
        "Comprehensive contact history and stakeholder background notes for meetings",
        "Weekly conversion metrics dashboard prepared for leadership review"
      ],
      tools: ["Google Sheets", "CRM Architecture", "Formula Modeling", "Lead Nurturing"]
    },
    {
      id: 3,
      title: "Google Drive File Management & Digital Architecture",
      category: "Administrative Operations",
      image: "Work project/Documentation work project_.jpg",
      desc: "A clean digital filing architecture standardizing document storage across client accounts, contracts, financial invoices, HR policies, marketing collateral, and historical archives.",
      deliverables: [
        "Logical alphanumeric naming convention system (YYYY-MM-DD_DocType_Title)",
        "Role-based permission hierarchy safeguarding confidential executive files",
        "Centralized 'Active Projects' index with one-click folder shortcuts",
        "Archival retention policy preventing digital clutter and obsolete duplicate files"
      ],
      tools: ["Google Drive", "Information Architecture", "Access Governance", "SOP Filing"]
    },
    {
      id: 4,
      title: "Webinar Registration & Participant Engagement",
      category: "Event & Administrative Support",
      image: "Work project/Questionnaire document work project_.jpg",
      desc: "A participant intake and engagement form designed to collect attendee data, pre-qualify participant business goals, and gather burning questions for high-stakes executive webinars.",
      deliverables: [
        "Frictionless questionnaire UX maximizing completion and attendance rates",
        "Real-time Google Sheets backend synchronization for instantaneous attendee tracking",
        "Automated confirmation email triggers with calendar invite attachments (.ics)",
        "Curated attendee question dossier handed to webinar speakers 24 hours prior"
      ],
      tools: ["Google Forms", "Google Sheets", "Event Coordination", "Attendee Intake"]
    },
    {
      id: 5,
      title: "Executive Travel Planning: Lagos to London",
      category: "Travel & Executive Assistance",
      image: "Work project/Travel Itinerary work project_.jpg",
      desc: "A complete end-to-end executive travel presentation and itinerary detailing international flights, boutique accommodation, airport transfers, meetings, and local logistics.",
      deliverables: [
        "Curated multi-airline comparison assessing optimal arrival times and cabin comforts",
        "Executive hotel selection proximate to Mayfair meeting locations with fast Wi-Fi",
        "Door-to-door ground transit schedules including chauffeur pickups and express trains",
        "Emergency contingency dossier with local medical facilities and embassy contacts"
      ],
      tools: ["Google Slides", "Travel Logistics", "Itinerary Planning", "Currency & Booking"]
    },
    {
      id: 6,
      title: "14-Day LinkedIn Content Strategy",
      category: "Content & Operations Support",
      image: "Work project/Content Calendar work project_.jpg",
      desc: "A 14-day editorial content planning project for Lior Global Operations, establishing executive thought leadership, post scheduling, visual assets, and engagement workflows.",
      deliverables: [
        "Thematic pillar architecture balancing industry commentary, case studies, and culture",
        "Structured drafting schedule ensuring all copy is reviewed 5 days ahead of publication",
        "Hashtag research and optimal publishing time windows for target global executives",
        "Post-campaign analytics framework tracking impressions, comments, and profile visits"
      ],
      tools: ["Google Sheets", "Content Scheduling", "Canva", "Audience Strategy"]
    },
    {
      id: 7,
      title: "Executive Task & Workflow Management",
      category: "Operations Assistance",
      image: "Work project/Project management work project_.jpg",
      desc: "A visual Kanban project management board organizing executive deliverables by urgency, team owner, pending blockers, and completed milestones.",
      deliverables: [
        "Priority matrix categorization (High Impact / Immediate, Strategic / Scheduled, Delegated)",
        "Clear status stages preventing bottlenecks and redundant status update meetings",
        "Daily standup summaries highlighting critical path items for the executive",
        "Milestone checklist ensuring 100% adherence to external client deadlines"
      ],
      tools: ["Asana", "Trello", "Kanban Methodology", "Workflow Optimization"]
    },
    {
      id: 8,
      title: "Professional Email & Inbox Organization",
      category: "Executive Assistance",
      image: "Work project/Email management work project_.png",
      desc: "A structured Gmail workflow incorporating custom labels, automated triage filters, VIP stars, and priority folders to consistently achieve and maintain Inbox Zero.",
      deliverables: [
        "Intelligent filter rules routing newsletters and notifications out of the primary view",
        "Action-oriented labeling system (@Action Required, @Waiting Reply, @Delegated, @Archive)",
        "High-priority VIP sender tagging ensuring executive emails are answered within 1 hour",
        "Standardized response templates cutting repetitive drafting time by 60%"
      ],
      tools: ["Gmail", "Inbox Zero Workflow", "Email Etiquette", "Template Creation"]
    },
    {
      id: 9,
      title: "Executive Meeting Brief & Agenda",
      category: "Executive Administration",
      image: "Work project/Meeting brief work project_.png",
      desc: "A structured pre-meeting executive brief detailing objectives, attendee background dossiers, timed discussion topics, and post-meeting action item accountability logs.",
      deliverables: [
        "Crisp 1-page executive summary allowing the CEO to prepare in under 3 minutes",
        "Defined discussion goals with designated discussion leaders and allocated times",
        "Action item log with specific owners, completion deadlines, and deliverables",
        "Distributed minutes shared within 4 hours of meeting conclusion"
      ],
      tools: ["Google Docs", "Meeting Governance", "Action Logging", "Executive Writing"]
    },
    {
      id: 10,
      title: "Automated Appointment Scheduling & Booking Workflow",
      category: "Executive Assistance & Scheduling",
      image: "Work project/Scheduling work project_.png",
      desc: "A frictionless Calendly booking architecture integrated with Google Calendar, establishing custom availability rules, automated reminders, and client intake questions.",
      deliverables: [
        "Custom event types for 15-min discovery calls, 30-min strategy syncs, and 60-min reviews",
        "Automatic buffer periods before and after calls to avoid consecutive back-to-back fatigue",
        "Pre-meeting questionnaire gathering attendee context before the call begins",
        "Automated SMS/Email reminders reducing meeting no-show rates to under 2%"
      ],
      tools: ["Calendly", "Google Calendar", "Automation", "Client Onboarding"]
    },
    {
      id: 11,
      title: "Comprehensive Market Research: Diesel & Jet Fuel Export Analysis",
      category: "Research & Information Management",
      image: "Work project/Research report document_.png",
      desc: "A rigorous research report analyzing international diesel (AGO) and aviation jet fuel (Jet A-1) export protocols, ASTM/DEF specifications, price benchmarks, and trade logistics.",
      deliverables: [
        "Comparative specification matrix examining flash points, sulfur levels, and density grades",
        "Regulatory export compliance guidelines for West Africa to European & US maritime corridors",
        "Benchmark pricing data compilation supporting executive negotiation and forecasting",
        "Synthesized executive summary translating complex petrochemical metrics into strategic points"
      ],
      tools: ["Market Intelligence", "Petrochemical Specs", "Google Docs", "Data Analysis"]
    }
  ];

  /* ==========================================================================
     02. NAVIGATION & HEADER BEHAVIOR
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const closeDrawer = document.getElementById('closeDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const backToTopBtn = document.getElementById('backToTop');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
      } else {
        backToTopBtn.style.opacity = '0.7';
      }
    }
  }, { passive: true });

  // Mobile Drawer Toggle
  function openMobileMenu() {
    mobileDrawer.classList.add('open');
    mobileOverlay.classList.add('open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('open');
    mobileOverlay.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (closeDrawer) closeDrawer.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Back to top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Active navigation link observer
  const observedSections = document.querySelectorAll('section[id]');
  const navObserverOptions = {
    root: null,
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, navObserverOptions);

  observedSections.forEach(section => navObserver.observe(section));


  /* ==========================================================================
     03. HERO VIDEO AUDIO & PLAYBACK ENGINE
     ========================================================================== */
  const heroVideo = document.getElementById('heroVideo');
  const navSoundToggle = document.getElementById('navSoundToggle');
  const heroSoundPill = document.getElementById('heroSoundPill');
  const soundLabel = document.getElementById('soundLabel');
  const heroPillText = document.getElementById('heroPillText');

  function updateAudioState(isMuted) {
    if (!heroVideo) return;
    heroVideo.muted = isMuted;

    if (!isMuted) {
      if (navSoundToggle) {
        navSoundToggle.classList.add('playing');
        soundLabel.textContent = 'Sound On';
      }
      if (heroSoundPill) {
        heroSoundPill.classList.add('unmuted');
        heroPillText.textContent = 'Voice Audio Playing';
      }
      showToast('🔊 Introduction voice enabled');
    } else {
      if (navSoundToggle) {
        navSoundToggle.classList.remove('playing');
        soundLabel.textContent = 'Sound Off';
      }
      if (heroSoundPill) {
        heroSoundPill.classList.remove('unmuted');
        heroPillText.textContent = 'Click for Voice Audio';
      }
    }
  }

  function toggleAudio() {
    if (!heroVideo) return;
    const nextMutedState = !heroVideo.muted;
    updateAudioState(nextMutedState);
    if (!nextMutedState && heroVideo.paused) {
      heroVideo.play().catch(e => console.log('Audio autoplay prevented:', e));
    }
  }

  if (navSoundToggle) navSoundToggle.addEventListener('click', toggleAudio);
  if (heroSoundPill) heroSoundPill.addEventListener('click', toggleAudio);

  // Auto-pause video when scrolled out of view to save battery/resources
  const heroSection = document.getElementById('home');
  if (heroSection && heroVideo) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (heroVideo.paused) {
            heroVideo.play().catch(e => console.log('Play on intersect error:', e));
          }
        } else {
          if (!heroVideo.paused) {
            heroVideo.pause();
          }
        }
      });
    }, { threshold: 0.15 });

    videoObserver.observe(heroSection);
  }


  /* ==========================================================================
     04. ABOUT ME: 3D HANGING ID BADGE INTERACTION
     ========================================================================== */
  const idCard = document.getElementById('idCard');

  if (idCard) {
    // Click / Touch Toggle
    idCard.addEventListener('click', () => {
      const isFlipped = idCard.classList.toggle('flipped');
      idCard.setAttribute('aria-pressed', isFlipped ? 'true' : 'false');
    });

    // Keyboard Accessibility (Enter or Space)
    idCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const isFlipped = idCard.classList.toggle('flipped');
        idCard.setAttribute('aria-pressed', isFlipped ? 'true' : 'false');
      }
    });
  }


  /* ==========================================================================
     05. TOOLS I USE: INFINITE TICKER LOGO CLONING & FILTER
     ========================================================================== */
  const tickerRows = [
    document.getElementById('toolsRow1'),
    document.getElementById('toolsRow2'),
    document.getElementById('toolsRow3')
  ];

  // Clone badges in each row to create a mathematically seamless infinite loop (-50% translation)
  tickerRows.forEach(row => {
    if (!row) return;
    const badges = Array.from(row.children);
    badges.forEach(badge => {
      const clone = badge.cloneNode(true);
      row.appendChild(clone);
    });
  });

  // Categorized Tool Tabs (interactive highlight across moving strip)
  const toolCategories = {
    'Gmail': 'workspace comms',
    'Microsoft 365': 'comms',
    'Zoho Mail': 'comms',
    'Slack': 'comms pm',
    'Zoom': 'comms',
    'Skype': 'comms',
    'Google Meet': 'workspace comms',
    'RingCentral': 'comms',
    'Google Calendar': 'workspace pm',
    'Google Drive': 'workspace',
    'Google Docs': 'workspace',
    'Google Sheets': 'workspace',
    'Google Slides': 'workspace',
    'Google Forms': 'workspace',
    'Google Keep': 'workspace',
    'Trello': 'pm',
    'Notion': 'pm ai',
    'ClickUp': 'pm',
    'Asana': 'pm',
    'Calendly': 'pm comms',
    'HubSpot': 'crm',
    'Salesforce': 'crm',
    'Pipedrive': 'crm',
    'Zoho CRM': 'crm',
    'Freshsales': 'crm',
    'Monday CRM': 'crm pm',
    'Streak CRM': 'crm workspace',
    'Zendesk Sell': 'crm',
    'Canva': 'ai',
    'ChatGPT': 'ai',
    'Claude AI': 'ai',
    'Notion AI': 'ai pm',
    'Slack Workflows': 'comms pm',
    'Calendly Sync': 'pm comms',
    'HubSpot Sales': 'crm',
    'Asana Teams': 'pm',
    'Sheets Automation': 'workspace',
    'Zoom Scheduler': 'comms',
    'Workspace Admin': 'workspace'
  };

  const catTabs = document.querySelectorAll('.cat-tab');
  catTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      catTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-toolcat');

      const allToolBadges = document.querySelectorAll('.tools-ticker-track .tool-badge');
      allToolBadges.forEach(badge => {
        const nameEl = badge.querySelector('.tool-name');
        const toolName = nameEl ? nameEl.textContent.trim() : '';
        const mappedCats = toolCategories[toolName] || '';

        if (cat === 'all') {
          badge.style.opacity = '1';
          badge.style.borderColor = '';
        } else if (mappedCats.includes(cat)) {
          badge.style.opacity = '1';
          badge.style.borderColor = 'rgba(255, 255, 255, 0.6)';
        } else {
          badge.style.opacity = '0.28';
          badge.style.borderColor = '';
        }
      });

      showToast(`Filtered: ${tab.textContent}`);
    });
  });


  /* ==========================================================================
     06. SELECTED WORK: FILTERING, CAROUSEL & LIGHTBOX MODAL
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const viewCarouselBtn = document.getElementById('viewCarouselBtn');
  const viewGridBtn = document.getElementById('viewGridBtn');
  const projectsGrid = document.getElementById('projectsGrid');
  const carouselArrows = document.getElementById('carouselArrows');
  const carouselPrevBtn = document.getElementById('carouselPrevBtn');
  const carouselNextBtn = document.getElementById('carouselNextBtn');
  const carouselIndicatorText = document.getElementById('carouselIndicatorText');

  // View Toggle (Interactive Carousel vs Grid)
  if (viewCarouselBtn && viewGridBtn && projectsGrid) {
    viewCarouselBtn.addEventListener('click', () => {
      viewCarouselBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
      projectsGrid.classList.add('carousel-mode');
      if (carouselArrows) carouselArrows.style.display = 'flex';
      showToast('Horizontal Slider active');
    });

    viewGridBtn.addEventListener('click', () => {
      viewGridBtn.classList.add('active');
      viewCarouselBtn.classList.remove('active');
      projectsGrid.classList.remove('carousel-mode');
      if (carouselArrows) carouselArrows.style.display = 'none';
      showToast('Grid View active');
    });
  }

  // Carousel Arrow Navigation
  if (carouselPrevBtn && projectsGrid) {
    carouselPrevBtn.addEventListener('click', () => {
      projectsGrid.scrollBy({ left: -380, behavior: 'smooth' });
    });
  }

  if (carouselNextBtn && projectsGrid) {
    carouselNextBtn.addEventListener('click', () => {
      projectsGrid.scrollBy({ left: 380, behavior: 'smooth' });
    });
  }

  if (projectsGrid && carouselIndicatorText) {
    projectsGrid.addEventListener('scroll', () => {
      const maxScroll = projectsGrid.scrollWidth - projectsGrid.clientWidth;
      if (maxScroll <= 0) return;
      const progress = Math.round((projectsGrid.scrollLeft / maxScroll) * 100);
      carouselIndicatorText.textContent = `Progress: ${progress}%`;
    }, { passive: true });
  }

  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (filterVal === 'all' || cardCat === filterVal) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Project Lightbox Modal
  const projectModal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalImg = document.getElementById('modalImg');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalDeliverables = document.getElementById('modalDeliverables');
  const modalTools = document.getElementById('modalTools');
  const modalCounter = document.getElementById('modalCounter');
  const prevProjectBtn = document.getElementById('prevProjectBtn');
  const nextProjectBtn = document.getElementById('nextProjectBtn');

  let currentProjectIndex = 0;

  function openProjectModal(index) {
    currentProjectIndex = index;
    const project = projectsData[currentProjectIndex];
    if (!project) return;

    modalImg.src = project.image;
    modalImg.alt = project.title;
    modalCategory.textContent = project.category;
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.desc;

    // Populate deliverables
    modalDeliverables.innerHTML = '';
    project.deliverables.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      modalDeliverables.appendChild(li);
    });

    // Populate tools
    modalTools.innerHTML = '';
    project.tools.forEach(tool => {
      const span = document.createElement('span');
      span.textContent = tool;
      modalTools.appendChild(span);
    });

    modalCounter.textContent = `${currentProjectIndex + 1} / ${projectsData.length}`;

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Attach click to all project cards
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const pId = parseInt(card.getAttribute('data-project-id'), 10);
      const targetIndex = projectsData.findIndex(p => p.id === pId);
      if (targetIndex !== -1) {
        openProjectModal(targetIndex);
      }
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeProjectModal);

  if (prevProjectBtn) {
    prevProjectBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      let prevIndex = currentProjectIndex - 1;
      if (prevIndex < 0) prevIndex = projectsData.length - 1;
      openProjectModal(prevIndex);
    });
  }

  if (nextProjectBtn) {
    nextProjectBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      let nextIndex = currentProjectIndex + 1;
      if (nextIndex >= projectsData.length) nextIndex = 0;
      openProjectModal(nextIndex);
    });
  }

  // Close on backdrop click
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }


  /* ==========================================================================
     07. CERTIFICATIONS ACCORDION & CREDENTIAL VIEWER MODAL
     ========================================================================== */
  const certCards = document.querySelectorAll('.cert-card');
  const certModal = document.getElementById('certModal');
  const certModalClose = document.getElementById('certModalClose');
  const certModalImg = document.getElementById('certModalImg');
  const certModalTitle = document.getElementById('certModalTitle');
  const viewCertBtns = document.querySelectorAll('.view-cert-btn');

  // Accordion Expand/Collapse
  certCards.forEach(card => {
    const header = card.querySelector('.cert-card-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isAlreadyActive = card.classList.contains('active');
      certCards.forEach(c => c.classList.remove('active'));
      if (!isAlreadyActive) {
        card.classList.add('active');
      }
    });
  });

  // Certificate Lightbox Modal
  viewCertBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const certSrc = btn.getAttribute('data-cert-src');
      const certTitle = btn.getAttribute('data-cert-title');

      if (certModalImg) certModalImg.src = certSrc;
      if (certModalTitle) certModalTitle.textContent = certTitle;

      certModal.classList.add('open');
      certModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeCertModal() {
    certModal.classList.remove('open');
    certModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (certModalClose) certModalClose.addEventListener('click', closeCertModal);
  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) {
        closeCertModal();
      }
    });
  }

  // Global Keydown Listeners (ESC to close modals, Arrow keys for projects)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal && projectModal.classList.contains('open')) closeProjectModal();
      if (certModal && certModal.classList.contains('open')) closeCertModal();
      if (mobileDrawer && mobileDrawer.classList.contains('open')) closeMobileMenu();
    }
    if (projectModal && projectModal.classList.contains('open')) {
      if (e.key === 'ArrowLeft') {
        let prevIndex = currentProjectIndex - 1;
        if (prevIndex < 0) prevIndex = projectsData.length - 1;
        openProjectModal(prevIndex);
      } else if (e.key === 'ArrowRight') {
        let nextIndex = currentProjectIndex + 1;
        if (nextIndex >= projectsData.length) nextIndex = 0;
        openProjectModal(nextIndex);
      }
    }
  });


  /* ==========================================================================
     08. CONTACT FORM WITH REALTIME VALIDATION & SUCCESS FEEDBACK
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formSuccessAlert = document.getElementById('formSuccessAlert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const serviceSelect = document.getElementById('contactService');
      const messageInput = document.getElementById('contactMessage');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.parentElement.classList.add('has-error');
        isValid = false;
      } else {
        nameInput.parentElement.classList.remove('has-error');
      }

      // Validate Email with regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        emailInput.parentElement.classList.add('has-error');
        isValid = false;
      } else {
        emailInput.parentElement.classList.remove('has-error');
      }

      // Validate Service selection
      if (!serviceSelect.value) {
        serviceSelect.parentElement.classList.add('has-error');
        isValid = false;
      } else {
        serviceSelect.parentElement.classList.remove('has-error');
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 5) {
        messageInput.parentElement.classList.add('has-error');
        isValid = false;
      } else {
        messageInput.parentElement.classList.remove('has-error');
      }

      if (!isValid) return;

      // Simulating realistic asynchronous submission
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="btn-text">Submitting...</span>
        <svg class="btn-spinner" viewBox="0 0 24 24" style="width:16px;height:16px;animation:spin 1s linear infinite;"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="32" stroke-linecap="round"/></svg>
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
        contactForm.style.display = 'none';
        formSuccessAlert.style.display = 'flex';

        showToast('✓ Message sent! Christiana will reply promptly.');
      }, 900);
    });

    // Real-time error removal on input
    contactForm.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('input', () => {
        input.parentElement.classList.remove('has-error');
      });
    });
  }


  /* ==========================================================================
     09. TOAST NOTIFICATION UTILITY
     ========================================================================== */
  function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 300);
    }, 3200);
  }

});
