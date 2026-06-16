const timelineSelector = '[data-scroll-timeline]';
const progressProperty = '--timeline-progress';

function clampProgress(value: number): number {
  return Math.min(100, Math.max(0, value));
}

function calculateProgress(timeline: HTMLElement): number {
  const rect = timeline.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const startOffset = viewportHeight * 0.45;
  const endOffset = viewportHeight * 0.55;
  const totalDistance = rect.height - startOffset + endOffset;

  if (totalDistance <= 0) {
    return rect.top <= startOffset ? 100 : 0;
  }

  const scrolledDistance = startOffset - rect.top;
  return clampProgress((scrolledDistance / totalDistance) * 100);
}

function initialiseTimelineProgress(): void {
  const timelines = Array.from(document.querySelectorAll<HTMLElement>(timelineSelector));

  if (timelines.length === 0) {
    return;
  }

  let frameId: number | null = null;

  const update = () => {
    frameId = null;

    const progressUpdates = timelines.map((timeline) => ({
      timeline,
      progress: calculateProgress(timeline)
    }));

    progressUpdates.forEach(({ timeline, progress }) => {
      timeline.style.setProperty(progressProperty, `${progress.toFixed(2)}%`);
    });
  };

  const requestUpdate = () => {
    if (frameId !== null) {
      return;
    }

    frameId = window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialiseTimelineProgress, { once: true });
} else {
  initialiseTimelineProgress();
}
