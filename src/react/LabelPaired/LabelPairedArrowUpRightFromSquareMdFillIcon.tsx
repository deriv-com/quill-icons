import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareMdFillIcon = (
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
      <path d='M10 4h5c.531 0 1 .469 1 1v5c0 .563-.469 1-1 1-.562 0-1-.437-1-1V7.438l-6.312 6.28a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.405L12.563 6H10c-.562 0-1-.437-1-1 0-.531.438-1 1-1M2.5 5H6c.531 0 1 .469 1 1 0 .563-.469 1-1 1H2.5c-.281 0-.5.25-.5.5v10c0 .281.219.5.5.5h10c.25 0 .5-.219.5-.5V14c0-.531.438-1 1-1 .531 0 1 .469 1 1v3.5c0 1.406-1.125 2.5-2.5 2.5h-10A2.47 2.47 0 0 1 0 17.5v-10C0 6.125 1.094 5 2.5 5' />
    </g>
    <defs>
      <clipPath id='b9f5bd9984c6c60c5b2b857e5d6e2323__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareMdFillIcon);
export default ForwardRef;
