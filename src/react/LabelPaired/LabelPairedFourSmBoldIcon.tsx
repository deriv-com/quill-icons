import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFourSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.418 5.582 2 12.062h5.688V7.907c.036-.4.255-.62.656-.656.4.036.62.255.656.656v4.157h1.094c.4.036.62.255.656.656-.037.4-.255.62-.656.656H9v2.844c-.036.4-.255.62-.656.656-.401-.037-.62-.255-.656-.656v-2.844H.906c-.237 0-.428-.11-.574-.328a.643.643 0 0 1 0-.629L4.27 4.98c.218-.346.51-.437.875-.273.346.219.437.51.273.875'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourSmBoldIcon);
export default ForwardRef;
