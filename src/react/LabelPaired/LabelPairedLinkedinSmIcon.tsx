import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkedinSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.75 4.625c.465 0 .875.41.875.902V16c0 .492-.41.875-.875.875H1.223A.86.86 0 0 1 .375 16V5.527c0-.492.383-.902.848-.902zm-7.684 10.5V9.301H2.262v5.824zM3.164 8.48c.574 0 1.04-.464 1.04-1.039 0-.574-.466-1.066-1.04-1.066-.602 0-1.066.492-1.066 1.066s.465 1.04 1.066 1.04m7.711 6.645v-3.2c0-1.558-.355-2.788-2.187-2.788-.876 0-1.477.492-1.723.957h-.027V9.3H5.215v5.824H7.02v-2.871c0-.766.136-1.504 1.093-1.504.93 0 .93.875.93 1.531v2.844z' />
    </g>
    <defs>
      <clipPath id='e3dbaea84e14ab81938890d7211bbd3b__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkedinSmIcon);
export default ForwardRef;
