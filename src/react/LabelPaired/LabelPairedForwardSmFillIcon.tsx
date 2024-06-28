import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.422 15.809a.83.83 0 0 1-.93.109.85.85 0 0 1-.492-.793v-8.75c0-.328.191-.629.492-.793a.89.89 0 0 1 .93.137l4.703 3.91v2.269zM7 13.375v-7c0-.328.191-.629.492-.793a.89.89 0 0 1 .93.137l5.25 4.375c.191.164.328.41.328.656 0 .273-.137.52-.328.684l-5.25 4.375a.83.83 0 0 1-.93.109.85.85 0 0 1-.492-.793z' />
    </g>
    <defs>
      <clipPath id='97c85ac12112a97f799322aec5ac7f82__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardSmFillIcon);
export default ForwardRef;
