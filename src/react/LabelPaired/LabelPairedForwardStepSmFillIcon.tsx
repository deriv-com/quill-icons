import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepSmFillIcon = (
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
      <path d='M1.547 15.809a.83.83 0 0 1-.93.109.85.85 0 0 1-.492-.793v-8.75c0-.328.191-.629.492-.793a.89.89 0 0 1 .93.137l5.25 4.375.328.246V6.375c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v8.75c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875V11.16l-.328.274z' />
    </g>
    <defs>
      <clipPath id='a632e8d5e6e4f7ead53ae0602f8451a9__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepSmFillIcon);
export default ForwardRef;
