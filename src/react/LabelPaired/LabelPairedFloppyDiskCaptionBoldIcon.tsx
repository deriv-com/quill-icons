import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFloppyDiskCaptionBoldIcon = (
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
        d='M1.375 5.75v7.5c.016.234.14.36.375.375h7.5c.234-.016.36-.14.375-.375V7.508c0-.11-.04-.203-.117-.281l.797-.797c.297.297.445.656.445 1.078v5.742a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-7.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 13.25v-7.5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h5.766c.406 0 .757.148 1.054.445l1.735 1.735-.797.797-1.735-1.735-.023-.023v2.343c-.031.344-.219.532-.562.563h-4.5c-.344-.031-.532-.219-.563-.562V5.374H1.75c-.234.016-.36.14-.375.375m1.875-.375V7.25h3.375V5.375zM4 11c.016-.562.266-.992.75-1.29.5-.28 1-.28 1.5 0 .484.298.734.727.75 1.29-.016.563-.266.992-.75 1.29-.5.28-1 .28-1.5 0-.484-.298-.734-.727-.75-1.29'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskCaptionBoldIcon);
export default ForwardRef;
