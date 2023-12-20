import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSterlingSignSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.75 8.098v1.777h3.719c.4.036.62.255.656.656-.036.401-.255.62-.656.656H2.75v1.723c0 .711-.173 1.377-.52 1.996l-.355.656h6.344c.4.037.62.256.656.657-.036.4-.255.62-.656.656H.78c-.237 0-.428-.11-.574-.328a.643.643 0 0 1 0-.629l.875-1.64c.237-.42.355-.876.355-1.368v-1.723H.782c-.4-.036-.62-.255-.656-.656.036-.4.255-.62.656-.656h.657V8.098c.018-.985.355-1.805 1.011-2.461.656-.657 1.477-.994 2.461-1.012.383 0 .757.064 1.121.191l2.188.711c.364.164.501.447.41.848-.164.365-.447.501-.848.41l-2.187-.738a2.147 2.147 0 0 0-.684-.11 2.237 2.237 0 0 0-1.531.63c-.401.419-.61.93-.629 1.53'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignSmBoldIcon);
export default ForwardRef;
