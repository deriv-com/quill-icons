import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopySmRegularIcon = (
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
      <path d='M10.875 13.375a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629V6.922a.36.36 0 0 0-.137-.3l-1.86-1.86a.36.36 0 0 0-.3-.137H6.5a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v7q0 .383.246.629a.85.85 0 0 0 .629.246zm1.367-7.383q.383.383.383.93V12.5q-.027.738-.52 1.23-.492.493-1.23.52H6.5q-.738-.027-1.23-.52-.493-.492-.52-1.23v-7q.027-.738.52-1.23.492-.493 1.23-.52h2.953q.548 0 .93.383zM2.125 7.25h1.75v.875h-1.75a.85.85 0 0 0-.629.246A.85.85 0 0 0 1.25 9v7q0 .383.246.629a.85.85 0 0 0 .629.246H6.5a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629v-.875h.875V16q-.027.738-.52 1.23-.492.493-1.23.52H2.125q-.738-.027-1.23-.52-.493-.492-.52-1.23V9q.027-.738.52-1.23.492-.493 1.23-.52' />
    </g>
    <defs>
      <clipPath id='e7d77664519dd0499361550ff5538752__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopySmRegularIcon);
export default ForwardRef;
