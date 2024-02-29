import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCheckXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M20.766 10.734q.468.516 0 1.032l-12.75 12.75q-.516.468-1.032 0l-6.75-6.75q-.468-.516 0-1.032.516-.468 1.032 0L7.5 22.922l12.234-12.188q.516-.468 1.032 0' />
    </g>
    <defs>
      <clipPath id='1df9f45cccb8e792cba03a713c4a9518__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckXlRegularIcon);
export default ForwardRef;
