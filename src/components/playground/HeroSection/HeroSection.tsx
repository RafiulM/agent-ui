'use client'

import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import Icon from '@/components/ui/icon'
import { IconType } from '@/components/ui/icon/types'
import React, { useState } from 'react'

const EXTERNAL_LINKS = {
  documentation: 'https://agno.link/agent-ui',
  playground: 'https://app.agno.com/playground/agents',
  agno: 'https://agno.com'
}

const TECH_ICONS = [
  {
    type: 'nextjs' as IconType,
    position: 'left-0',
    link: 'https://nextjs.org',
    name: 'Next.js',
    zIndex: 10
  },
  {
    type: 'shadcn' as IconType,
    position: 'left-[15px]',
    link: 'https://ui.shadcn.com',
    name: 'shadcn/ui',
    zIndex: 20
  },
  {
    type: 'tailwind' as IconType,
    position: 'left-[30px]',
    link: 'https://tailwindcss.com',
    name: 'Tailwind CSS',
    zIndex: 30
  }
]

interface ActionButtonProps {
  href: string
  variant?: 'primary' | 'secondary'
  text: string
  onClick?: () => void
}

const ActionButton = ({ href, variant, text, onClick }: ActionButtonProps) => {
  const baseStyles =
    'px-6 py-3 text-sm transition-colors font-dmmono tracking-tight inline-flex items-center justify-center'
  const variantStyles = {
    primary: 'border border-border hover:bg-neutral-800 rounded-xl text-primary',
    secondary: 'bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl'
  }

  const buttonContent = (
    <span className={`${baseStyles} ${variant ? variantStyles[variant] : variantStyles.secondary} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}>
      {text}
    </span>
  )

  if (onClick) {
    return (
      <button 
        onClick={onClick} 
        className="cursor-pointer focus:outline-none"
        aria-label={text}
      >
        {buttonContent}
      </button>
    )
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
      aria-label={`${text} (opens in new tab)`}
    >
      {buttonContent}
    </Link>
  )
}

export interface HeroSectionProps {
  onStartChatting?: () => void
  variant?: 'full' | 'compact'
}

const HeroSection = ({ onStartChatting, variant = 'full' }: HeroSectionProps) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  // Animation variants for the icon
  const iconVariants: Variants = {
    initial: { y: 0 },
    hover: {
      y: -8,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 10,
        mass: 0.5
      }
    },
    exit: {
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        mass: 0.6
      }
    },
    focus: {
      y: -8,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 10,
        mass: 0.5
      }
    }
  }

  // Animation variants for the tooltip
  const tooltipVariants: Variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.15,
        ease: 'easeInOut'
      }
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.15,
        ease: 'easeInOut'
      }
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  }

  const isCompact = variant === 'compact'

  return (
    <motion.section
      className={`flex flex-col items-center text-center font-geist ${
        isCompact ? 'py-8' : 'py-12 md:py-16'
      }`}
      aria-label="Welcome to Agent UI"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="banner"
    >
      <div className={`flex flex-col ${isCompact ? 'gap-y-6' : 'gap-y-8'} ${
        isCompact ? 'max-w-2xl' : 'max-w-3xl'
      }`}>
        <motion.div variants={itemVariants}>
          <motion.h1
            className={`font-[600] tracking-tight ${
              isCompact ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl md:text-5xl'
            }`}
          >
            <div className={`flex items-center justify-center gap-x-2 whitespace-nowrap font-medium ${
              isCompact ? 'flex-wrap' : ''
            }`}>
              <span className="flex items-center font-[600]">
                This is an open-source
              </span>
              <span className="inline-flex translate-y-[10px] scale-125 items-center transition-transform duration-200 hover:rotate-6">
                <Link
                  href={EXTERNAL_LINKS.agno}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  aria-label="Agno - AI Agent Platform (opens in new tab)"
                >
                  <Icon type="agno-tag" size="default" />
                </Link>
              </span>
              <span className="flex items-center font-[600]">
                Agent UI, built with
              </span>
              <span className="inline-flex translate-y-[5px] scale-125 items-center">
                <div className="relative ml-2 h-[40px] w-[90px]">
                  {TECH_ICONS.map((icon) => (
                    <motion.div
                      key={icon.type}
                      className={`absolute ${icon.position} top-0`}
                      style={{ zIndex: icon.zIndex }}
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      animate={hoveredIcon === icon.type ? 'hover' : 'exit'}
                      onHoverStart={() => setHoveredIcon(icon.type)}
                      onHoverEnd={() => setHoveredIcon(null)}
                    >
                      <Link
                        href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                        aria-label={`${icon.name} (opens in new tab)`}
                      >
                        <div>
                          <Icon type={icon.type} size="default" />
                        </div>
                        <motion.div
                          className="pointer-events-none absolute bottom-full left-1/2 mb-1 -translate-x-1/2 transform whitespace-nowrap rounded bg-neutral-800 px-2 py-1 text-xs text-primary"
                          variants={tooltipVariants}
                          initial="hidden"
                          animate={
                            hoveredIcon === icon.type ? 'visible' : 'hidden'
                          }
                        >
                          {icon.name}
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </span>
            </div>
            <p className={`mt-2 ${isCompact ? 'text-lg' : ''}`}>
              For the full experience, visit the Agent Playground.
            </p>
          </motion.h1>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className={`flex justify-center gap-4 ${isCompact ? 'flex-col sm:flex-row' : 'flex-wrap'}`}
          role="group"
          aria-label="Action buttons"
        >
          {onStartChatting && (
            <ActionButton
              href="#"
              variant="secondary"
              text="START CHATTING"
              onClick={(e) => {
                e.preventDefault()
                onStartChatting()
              }}
            />
          )}
          <ActionButton
            href={EXTERNAL_LINKS.documentation}
            variant="primary"
            text="GO TO DOCS"
          />
          <ActionButton
            href={EXTERNAL_LINKS.playground}
            text="VISIT AGENT PLAYGROUND"
          />
        </motion.div>

        {!isCompact && (
          <motion.div 
            variants={itemVariants}
            className="mt-4 text-sm text-muted-foreground"
          >
            <p>Built with modern web technologies for seamless AI agent interactions</p>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

export default HeroSection