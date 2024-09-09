import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMapSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.625 16.793-5.25-1.504V4.734l5.25 1.504zm.875-.055V6.184l3.473-1.395c.41-.164.902.137.902.602v9.16c0 .273-.164.52-.437.601zM.535 6.375 4.5 4.789v10.555L1 16.738a.64.64 0 0 1-.875-.601v-9.16c0-.274.164-.52.41-.602' />
    </g>
    <defs>
      <clipPath id='d640bd23ba399edbfa46a93fc1f4bd20__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMapSmFillIcon);
export default ForwardRef;
