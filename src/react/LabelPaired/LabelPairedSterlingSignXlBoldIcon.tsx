import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSterlingSignXlBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.5 13.453V16.5h6.375c.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125H4.5v2.953c0 1.219-.297 2.36-.89 3.422L3 26.25h10.875c.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125H1.125c-.406 0-.734-.188-.984-.563-.188-.343-.188-.703 0-1.078l1.5-2.812c.406-.719.609-1.5.609-2.344V18.75H1.125C.437 18.687.062 18.312 0 17.625c.063-.688.438-1.063 1.125-1.125H2.25v-3.047c.031-1.687.61-3.094 1.734-4.219C5.11 8.11 6.516 7.531 8.204 7.5c.655 0 1.296.11 1.921.328l3.75 1.219c.625.281.86.765.703 1.453-.281.625-.765.86-1.453.703l-3.75-1.265a3.681 3.681 0 0 0-1.172-.188c-1.031.031-1.906.39-2.625 1.078-.687.719-1.047 1.594-1.078 2.625Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignXlBoldIcon);
export default ForwardRef;
