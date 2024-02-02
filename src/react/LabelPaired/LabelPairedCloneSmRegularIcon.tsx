import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneSmRegularIcon = (
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
      <path d='M1.75 16.875h6.125a.85.85 0 0 0 .629-.246A.85.85 0 0 0 8.75 16v-1.75h.875V16q-.027.738-.52 1.23-.492.493-1.23.52H1.75q-.738-.027-1.23-.52Q.027 16.739 0 16V9.875q.027-.738.52-1.23.492-.493 1.23-.52H3.5V9H1.75a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629V16q0 .383.246.629a.85.85 0 0 0 .629.246M6.125 12.5h6.125a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629V5.5a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246H6.125a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v6.125q0 .383.246.629a.85.85 0 0 0 .629.246m-1.75-.875V5.5q.027-.738.52-1.23.492-.493 1.23-.52h6.125q.738.027 1.23.52.493.492.52 1.23v6.125q-.027.738-.52 1.23-.492.493-1.23.52H6.125q-.738-.027-1.23-.52-.493-.492-.52-1.23' />
    </g>
    <defs>
      <clipPath id='2e9b3a99e0f7c42a__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneSmRegularIcon);
export default ForwardRef;
