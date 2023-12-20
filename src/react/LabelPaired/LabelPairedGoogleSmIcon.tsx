import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedGoogleSmIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13.672 10.914c-.037 1.969-.638 3.555-1.805 4.758-1.185 1.203-2.77 1.823-4.758 1.86-1.257-.019-2.397-.329-3.418-.93a6.77 6.77 0 0 1-2.433-2.434c-.602-1.02-.912-2.16-.93-3.418.018-1.258.328-2.397.93-3.418A6.77 6.77 0 0 1 3.69 4.898c1.021-.601 2.16-.911 3.418-.93 1.842.037 3.355.63 4.54 1.778L9.815 7.523c-.856-.765-1.813-1.112-2.87-1.039-1.058.055-1.988.456-2.79 1.204-.784.765-1.203 1.786-1.258 3.062.037 1.221.447 2.233 1.23 3.035.803.802 1.796 1.222 2.981 1.258.894-.018 1.614-.2 2.16-.547.547-.346.958-.738 1.231-1.176.255-.455.41-.857.465-1.203H7.109V9.766h6.454c.072.328.109.71.109 1.148'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGoogleSmIcon);
export default ForwardRef;
