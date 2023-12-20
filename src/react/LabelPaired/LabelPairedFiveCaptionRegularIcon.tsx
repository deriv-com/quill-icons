import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFiveCaptionRegularIcon = (
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
        d='M1.398 4.531c.047-.172.165-.265.352-.281h4.875c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-4.57l-.938 3.75H4.75c.844.016 1.555.305 2.133.867.562.578.851 1.29.867 2.133-.016.844-.305 1.555-.867 2.133-.578.562-1.29.851-2.133.867H2.242a2.05 2.05 0 0 1-1.101-.305 1.967 1.967 0 0 1-.75-.843l-.094-.188c-.094-.203-.04-.367.164-.492.219-.094.383-.04.492.164l.117.187c.25.47.64.711 1.172.727H4.75c.64-.016 1.172-.234 1.594-.656.422-.422.64-.953.656-1.594-.016-.64-.234-1.172-.656-1.594-.422-.422-.953-.64-1.594-.656H.625a.378.378 0 0 1-.305-.14.468.468 0 0 1-.07-.329z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveCaptionRegularIcon);
export default ForwardRef;
