import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTwoSmRegularIcon = (
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
        d='M4.172 5.5a3.02 3.02 0 0 0-2.106.875l-.765.738c-.2.183-.401.183-.602 0-.182-.2-.182-.4 0-.601l.739-.766a3.933 3.933 0 0 1 2.734-1.121c1.075.018 1.978.392 2.707 1.121.71.711 1.085 1.604 1.121 2.68-.018 1.094-.42 2.014-1.203 2.762L1.684 16h6.754c.273.018.419.164.437.438-.018.273-.164.419-.437.437H.561c-.2 0-.337-.091-.41-.273a.49.49 0 0 1 .11-.493l5.933-5.55a2.953 2.953 0 0 0 .93-2.133c-.018-.82-.31-1.513-.875-2.078-.547-.547-1.24-.83-2.078-.848'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoSmRegularIcon);
export default ForwardRef;
