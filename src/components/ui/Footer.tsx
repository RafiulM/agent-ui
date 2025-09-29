import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-center">
          <p className="text-sm text-secondary">
            Created by{' '}
            <a
              href="https://github.com/RafiulM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors underline decoration-1 underline-offset-2"
            >
              RafiulM
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}