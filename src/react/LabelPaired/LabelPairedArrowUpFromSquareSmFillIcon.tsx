import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareSmFillIcon = (
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
      <path d='m7.602 4.023 2.625 2.625a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0l-1.122-1.12V12.5c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875V6.758l-1.148 1.12a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23L6.37 4.023a.843.843 0 0 1 1.23 0M1.75 6.813v8.75c0 .246.191.437.438.437h9.625a.45.45 0 0 0 .437-.437v-8.75a.47.47 0 0 0-.437-.438h-.22a.864.864 0 0 1-.874-.875c0-.465.383-.875.875-.875h.219c1.203 0 2.187.984 2.187 2.188v8.75c0 1.23-.984 2.187-2.187 2.187H2.188A2.16 2.16 0 0 1 0 15.563v-8.75c0-1.204.957-2.188 2.188-2.188h.218a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-.219a.45.45 0 0 0-.437.438' />
    </g>
    <defs>
      <clipPath id='252ac480f039fe85cbc075289e3f1e8d__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareSmFillIcon);
export default ForwardRef;
