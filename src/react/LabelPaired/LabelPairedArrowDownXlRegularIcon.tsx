import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownXlRegularIcon = (
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
      <path d='m8.484 28.266-8.25-8.25q-.468-.516 0-1.032.516-.468 1.032 0l6.984 6.938V8.25q.047-.703.75-.75.703.046.75.75v17.672l6.984-6.938q.516-.468 1.032 0 .468.516 0 1.032l-8.25 8.25q-.516.468-1.032 0' />
    </g>
    <defs>
      <clipPath id='3fb7206f5426cc07__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownXlRegularIcon);
export default ForwardRef;
