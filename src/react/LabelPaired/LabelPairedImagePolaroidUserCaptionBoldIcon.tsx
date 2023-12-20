import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedImagePolaroidUserCaptionBoldIcon = (
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
        d='M1.375 13.25c.016.234.14.36.375.375h7.5c.234-.016.36-.14.375-.375v-1.125h-8.25zM8.078 11h1.547V5.75c-.016-.234-.14-.36-.375-.375h-7.5c-.234.016-.36.14-.375.375V11h1.547c.094-.328.265-.594.515-.797a1.43 1.43 0 0 1 .938-.328h2.25c.36 0 .672.11.938.328.25.203.421.469.515.797m2.672-5.25v7.5a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-7.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 13.25v-7.5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h7.5c.422.016.773.164 1.055.445.28.282.43.633.445 1.055M4 7.625c.016-.562.266-.992.75-1.29.5-.28 1-.28 1.5 0 .484.298.734.728.75 1.29-.016.563-.266.992-.75 1.29-.5.28-1 .28-1.5 0-.484-.298-.734-.727-.75-1.29'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserCaptionBoldIcon);
export default ForwardRef;
