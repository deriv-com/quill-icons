import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftXlRegularIcon = (
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
      <path d='m20.766 12.516-4.5 4.5q-.516.468-1.032 0-.468-.516 0-1.032l3.188-3.234H.75Q.047 12.703 0 12q.047-.703.75-.75h17.672l-3.188-3.234q-.468-.516 0-1.032.516-.468 1.032 0l4.5 4.5q.468.516 0 1.032m-16.032 16.5-4.5-4.5q-.468-.516 0-1.032l4.5-4.5q.516-.468 1.032 0 .468.516 0 1.032L2.578 23.25H20.25q.704.046.75.75-.046.704-.75.75H2.578l3.188 3.234q.468.516 0 1.032-.516.468-1.032 0' />
    </g>
    <defs>
      <clipPath id='4d2c3e605a2d60184d444d66d7e75692__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftXlRegularIcon);
export default ForwardRef;
