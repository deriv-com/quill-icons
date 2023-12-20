import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTwoCaptionBoldIcon = (
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
        d='M3.719 5.375c-.656.016-1.211.242-1.664.68l-.844.843c-.266.22-.531.22-.797 0-.219-.265-.219-.53 0-.796l.844-.82c.672-.673 1.492-1.016 2.46-1.032h.165c.937.031 1.719.352 2.344.96.609.626.93 1.407.96 2.345a3.287 3.287 0 0 1-1.054 2.414l-3.89 3.656h4.945c.343.031.53.219.562.563-.031.343-.219.53-.562.562H.813c-.25-.016-.422-.133-.516-.352a.554.554 0 0 1 .14-.609l4.946-4.64c.437-.438.664-.97.68-1.594a2.233 2.233 0 0 0-.633-1.547 2.233 2.233 0 0 0-1.547-.633z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoCaptionBoldIcon);
export default ForwardRef;
