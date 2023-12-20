import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedUserCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.75 6.5c0-.406-.102-.781-.305-1.125A2.255 2.255 0 0 0 5.5 4.25a2.255 2.255 0 0 0-1.945 1.125A2.172 2.172 0 0 0 3.25 6.5c0 .406.102.781.305 1.125s.476.617.82.82c.36.203.734.305 1.125.305a2.255 2.255 0 0 0 1.945-1.125c.203-.344.305-.719.305-1.125m-5.25 0c0-.547.133-1.047.398-1.5A3.1 3.1 0 0 1 4 3.898 2.995 2.995 0 0 1 5.5 3.5c.531 0 1.031.133 1.5.398A3.1 3.1 0 0 1 8.102 5c.265.453.398.953.398 1.5S8.367 7.547 8.102 8A3.1 3.1 0 0 1 7 9.102a2.995 2.995 0 0 1-1.5.398A2.995 2.995 0 0 1 4 9.102 3.1 3.1 0 0 1 2.898 8 2.912 2.912 0 0 1 2.5 6.5M1 14.75h9c-.031-.953-.375-1.75-1.031-2.39-.64-.626-1.438-.954-2.39-.985H4.421c-.953.031-1.75.36-2.39.984-.657.641-1 1.438-1.032 2.391m-.75.047c.031-1.172.438-2.156 1.219-2.953.797-.781 1.781-1.188 2.953-1.219h2.156c1.172.031 2.156.438 2.953 1.219.781.797 1.188 1.781 1.219 2.953 0 .203-.07.367-.21.492a.627.627 0 0 1-.493.211H.953a.627.627 0 0 1-.492-.21.627.627 0 0 1-.211-.493'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserCaptionRegularIcon);
export default ForwardRef;
