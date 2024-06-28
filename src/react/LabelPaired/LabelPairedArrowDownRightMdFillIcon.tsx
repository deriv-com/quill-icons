import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 17H3c-.562 0-1-.437-1-1 0-.531.438-1 1-1h4.563L1.28 8.719a.964.964 0 0 1 0-1.406.964.964 0 0 1 1.407 0L9 13.593V9c0-.531.438-1 1-1 .531 0 1 .469 1 1v7c0 .563-.469 1-1 1' />
    </g>
    <defs>
      <clipPath id='d632ba797e466ed89c61ccbccb221d8b__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightMdFillIcon);
export default ForwardRef;
