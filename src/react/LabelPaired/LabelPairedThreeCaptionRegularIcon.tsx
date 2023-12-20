import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedThreeCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.25 4.625c.016-.234.14-.36.375-.375H7c.172 0 .29.078.352.234a.42.42 0 0 1-.094.422L3.086 8.75H4.75c.844.016 1.555.305 2.133.867.562.578.851 1.29.867 2.133-.016.844-.305 1.555-.867 2.133-.578.562-1.29.851-2.133.867H2.336c-.422 0-.813-.11-1.172-.328a2.118 2.118 0 0 1-.82-.914l-.047-.094c-.094-.219-.04-.383.164-.492.203-.094.367-.04.492.164L1 13.18c.297.53.742.804 1.336.82H4.75c.64-.016 1.172-.234 1.594-.656.422-.422.64-.953.656-1.594-.016-.64-.234-1.172-.656-1.594-.422-.422-.953-.64-1.594-.656H2.125c-.172 0-.29-.078-.352-.234a.42.42 0 0 1 .094-.422L6.04 5H.625c-.234-.016-.36-.14-.375-.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeCaptionRegularIcon);
export default ForwardRef;
