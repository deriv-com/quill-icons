import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.426 15.809-5.25-4.375-.301-.274v3.965c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-8.75C.125 5.91.508 5.5 1 5.5a.9.9 0 0 1 .875.875v3.965l.3-.246 5.25-4.375a.89.89 0 0 1 .93-.137c.301.164.52.465.52.793v8.75a.88.88 0 0 1-.52.793c-.3.164-.656.11-.93-.11' />
    </g>
    <defs>
      <clipPath id='d32cc07b73765127909fd447dba5e990__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepSmFillIcon);
export default ForwardRef;
