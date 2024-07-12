import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCheckLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.477 9.523c.351.391.351.977 0 1.329L7.164 21.164c-.39.39-.976.39-1.328 0L.523 15.852a.856.856 0 0 1 0-1.29.856.856 0 0 1 1.29 0l4.648 4.649 9.687-9.688a.92.92 0 0 1 1.29 0z' />
    </g>
    <defs>
      <clipPath id='6dbd7aa42233dbd2c06b84fbf55aca2b__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckLgBoldIcon);
export default ForwardRef;
