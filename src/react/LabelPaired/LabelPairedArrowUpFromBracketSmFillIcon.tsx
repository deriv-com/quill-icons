import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketSmFillIcon = (
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
      <path d='m7.102 4.023 3.5 3.5a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0L7.374 6.759V12.5c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875V6.758L3.602 8.754a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l3.5-3.5a.843.843 0 0 1 1.23 0m-4.977 9.352v1.75c0 .492.383.875.875.875h7a.88.88 0 0 0 .875-.875v-1.75c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v1.75A2.626 2.626 0 0 1 10 17.75H3a2.626 2.626 0 0 1-2.625-2.625v-1.75c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875' />
    </g>
    <defs>
      <clipPath id='6fe25a515665cfffd3e8af825e4f68fd__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketSmFillIcon);
export default ForwardRef;
