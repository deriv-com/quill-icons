import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTwoSmBoldIcon = (
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
        d='M4.172 5.938c-.766.018-1.413.282-1.942.792l-.984.985c-.31.255-.62.255-.93 0-.255-.31-.255-.62 0-.93l.985-.957c.784-.784 1.74-1.185 2.87-1.203h.192c1.094.036 2.005.41 2.735 1.121.71.73 1.084 1.64 1.12 2.734-.017 1.112-.428 2.051-1.23 2.817L2.45 15.562h5.77c.4.037.62.256.656.657-.036.4-.255.62-.656.656H.78c-.291-.018-.492-.155-.601-.41a.647.647 0 0 1 .164-.711l5.77-5.414c.51-.51.774-1.13.792-1.86-.018-.71-.264-1.312-.738-1.804-.492-.474-1.094-.72-1.805-.739z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoSmBoldIcon);
export default ForwardRef;
