import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedUserCaptionBoldIcon = (
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
        d='M7.375 6.5c-.016-.703-.328-1.242-.937-1.617-.625-.344-1.25-.344-1.875 0-.61.375-.922.914-.938 1.617.016.703.328 1.242.938 1.617.625.344 1.25.344 1.875 0 .609-.375.921-.914.937-1.617M2.5 6.5c0-.547.133-1.047.398-1.5A3.1 3.1 0 0 1 4 3.898 2.995 2.995 0 0 1 5.5 3.5c.531 0 1.031.133 1.5.398A3.1 3.1 0 0 1 8.102 5c.265.453.398.953.398 1.5S8.367 7.547 8.102 8A3.1 3.1 0 0 1 7 9.102a2.995 2.995 0 0 1-1.5.398A2.995 2.995 0 0 1 4 9.102 3.1 3.1 0 0 1 2.898 8 2.912 2.912 0 0 1 2.5 6.5m-1.102 7.875h8.204c-.125-.766-.461-1.39-1.008-1.875-.563-.484-1.235-.734-2.016-.75H4.422c-.781.016-1.445.266-1.992.75-.563.484-.907 1.11-1.032 1.875m-1.148.422c.031-1.172.438-2.156 1.219-2.953.797-.781 1.781-1.188 2.953-1.219h2.156c1.172.031 2.156.438 2.953 1.219.781.797 1.188 1.781 1.219 2.953 0 .203-.07.367-.21.492a.627.627 0 0 1-.493.211H.953a.627.627 0 0 1-.492-.21.627.627 0 0 1-.211-.493'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserCaptionBoldIcon);
export default ForwardRef;
