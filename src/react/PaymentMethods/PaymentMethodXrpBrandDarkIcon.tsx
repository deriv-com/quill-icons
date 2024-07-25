import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodXrpBrandDarkIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#fff'
      d='M53.2 40c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24'
    />
    <path
      fill='#171C21'
      d='M41.155 30.07h-3.471l-5.486 5.43a4.27 4.27 0 0 1-5.996 0l-5.487-5.43h-3.47l7.221 7.147c2.614 2.587 6.853 2.587 9.467 0zM17.2 49.945h3.471l5.531-5.474a4.27 4.27 0 0 1 5.996 0l5.53 5.474H41.2l-7.267-7.191c-2.614-2.588-6.852-2.588-9.466 0z'
    />
    <path
      fill='#fff'
      d='M77.598 31.211h3.004l-6.253 6.321a5.747 5.747 0 0 1-8.194 0l-6.25-6.32h3.004l4.75 4.802a3.643 3.643 0 0 0 5.149.04l.04-.04zM62.87 48.79h-3.004l6.29-6.361a5.747 5.747 0 0 1 8.195 0l6.288 6.36h-3.005l-4.787-4.84a3.643 3.643 0 0 0-5.15-.04l-.04.04zM117.202 31.211a5.7 5.7 0 0 1 2.158.454q1.025.405 1.793 1.123.774.721 1.209 1.697.438.96.438 2.032c0 .73-.154 1.426-.463 2.08a5.3 5.3 0 0 1-1.232 1.695 6 6 0 0 1-1.818 1.146h-.002a6 6 0 0 1-2.211.408h-6.558v6.882h-2.307V31.211zm-.128 8.512q.694 0 1.317-.25.63-.249 1.098-.687c.312-.29.561-.634.737-1.022q.268-.579.267-1.247 0-.645-.267-1.224a3.3 3.3 0 0 0-.737-1.022 3.5 3.5 0 0 0-1.098-.687 3.5 3.5 0 0 0-1.317-.25h-6.558v6.389zM91.45 41.884c1.156 0 2.252.488 2.977 1.33l4.764 5.517h2.967l-6.517-7.648c-.726-.851-1.826-1.347-2.992-1.347h-4.515v-6.374h6.557q.695 0 1.317.25.63.252 1.098.687l.005.005q.465.41.733.994.268.578.267 1.25 0 .667-.267 1.246a3.3 3.3 0 0 1-.395.63l1.5 1.674.056-.06a5.2 5.2 0 0 0 1.025-1.6 4.7 4.7 0 0 0 .385-1.893 4.85 4.85 0 0 0-.438-2.035 5.2 5.2 0 0 0-1.209-1.7 6 6 0 0 0-1.79-1.145 5.7 5.7 0 0 0-2.163-.454h-7.84c-.317 0-.594.119-.82.333a.99.99 0 0 0-.333.743v16.441h2.307v-6.844z'
    />
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodXrpBrandDarkIcon);
export default ForwardRef;