import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleQuestionSmBoldIcon = (
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
      <path d='M12.688 10.75c0-2.023-1.094-3.883-2.844-4.922a5.71 5.71 0 0 0-5.688 0 5.68 5.68 0 0 0-2.843 4.922c0 2.05 1.066 3.91 2.843 4.95a5.71 5.71 0 0 0 5.688 0c1.75-1.04 2.844-2.9 2.844-4.95M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m4.621-2.46a1.53 1.53 0 0 1 1.45-1.04h1.585c.957 0 1.75.793 1.75 1.75 0 .602-.355 1.176-.875 1.477l-.875.52c-.027.355-.3.628-.656.628a.63.63 0 0 1-.656-.656v-.356c0-.246.11-.465.328-.574l1.203-.684A.43.43 0 0 0 8.094 9c0-.246-.192-.41-.438-.41H6.07a.21.21 0 0 0-.191.137l-.027.027a.64.64 0 0 1-.82.41.683.683 0 0 1-.41-.848zm1.504 5.085c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875' />
    </g>
    <defs>
      <clipPath id='6bbbba851ab25685cf8ba190a36ad2eb__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleQuestionSmBoldIcon);
export default ForwardRef;
