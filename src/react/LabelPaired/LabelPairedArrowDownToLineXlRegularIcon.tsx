import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.75 28.5q-.703-.046-.75-.75.047-.704.75-.75h16.5q.704.046.75.75-.046.704-.75.75zm8.766-4.734q-.516.468-1.032 0l-6-6q-.468-.516 0-1.032.516-.468 1.032 0l4.734 4.688V8.25q.047-.703.75-.75.703.046.75.75v13.172l4.734-4.688q.516-.468 1.032 0 .468.516 0 1.032z' />
    </g>
    <defs>
      <clipPath id='80af0974847e833ad6a6d688215b2297__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineXlRegularIcon);
export default ForwardRef;
