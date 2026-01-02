'use client';

import { memo } from 'react';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import styles from './MarkdownRenderer.module.css';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('bash', bash);

interface MarkdownRendererProps {
  markdown: string;
}

const MarkdownRenderer = ({ markdown }: MarkdownRendererProps) => {
  return (
    <article className={styles.markdownRenderer}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h2: (props) => <h2 className={styles.heading2} {...props} />,
          h3: (props) => <h3 className={styles.heading3} {...props} />,
          strong: (props) => <strong className={styles.strong} {...props} />,
          img: ({ src, alt }) => {
            const imageSrc = typeof src === 'string' ? src : '';
            return (
              <Image
                src={imageSrc}
                alt={alt || ''}
                width={800}
                height={600}
                className={styles.image}
                loading="lazy"
              />
            );
          },
          ul: (props) => <ul className={styles.unorderedList} {...props} />,
          ol: (props) => <ol className={styles.orderedList} {...props} />,
          li: (props) => <li className={styles.list} {...props} />,
          details: (props) => (
            <details className={styles.codeBlock} {...props} />
          ),
          summary: (props) => (
            <summary className={styles.codeBlockTitle} {...props} />
          ),
          a: (props) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                className={styles.codeContainer}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={styles.inlineCode} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
};

export default memo(MarkdownRenderer);
