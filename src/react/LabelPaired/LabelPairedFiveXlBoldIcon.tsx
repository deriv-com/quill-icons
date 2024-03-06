import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 8.438q.234-.891 1.125-.938h9.75q1.032.095 1.125 1.125-.093 1.032-1.125 1.125H3.563l-1.079 6.375h6.329q2.625.046 4.359 1.828 1.781 1.734 1.828 4.36-.046 2.625-1.828 4.359-1.735 1.781-4.36 1.828H4.36a4.5 4.5 0 0 1-2.39-.656 4.23 4.23 0 0 1-1.64-1.828l-.235-.375q-.328-.985.515-1.547.986-.328 1.5.515l.235.375Q3 26.204 4.359 26.25h4.454q1.686-.047 2.765-1.172Q12.703 24 12.75 22.313q-.047-1.687-1.172-2.766-1.078-1.125-2.765-1.172H1.125q-.516 0-.844-.422a1.14 1.14 0 0 1-.281-.89z' />
    </g>
    <defs>
      <clipPath id='f91f4ef3432c59ccab908c4e94b9cfba__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveXlBoldIcon);
export default ForwardRef;
