// gaTracker.js

// ✅ Load Google Analytics script dynamically
export const initGA = (measurementId) => {
  if (!window.gtag) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId);
  }
};

// ✅ Track a page view (React Router support)
export const trackPageView = (url) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: url,
    });
  }
};

// ✅ Track a custom event
export const trackEvent = (action, category, label, value) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
