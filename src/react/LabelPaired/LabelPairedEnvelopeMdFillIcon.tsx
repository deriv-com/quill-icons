import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 6h13c.813 0 1.5.688 1.5 1.5 0 .5-.25.938-.625 1.219l-6.781 5.094a.986.986 0 0 1-1.219 0L.594 8.718A1.5 1.5 0 0 1 0 7.5 1.5 1.5 0 0 1 1.5 6M0 9.5l6.781 5.125a2.02 2.02 0 0 0 2.407 0L16 9.5V16c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2z' />
    </g>
    <defs>
      <clipPath id='cf7c09b944e422c472f500c1a53ea732__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeMdFillIcon);
export default ForwardRef;
