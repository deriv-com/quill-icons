import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenCircleMdRegularIcon = (
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
      <path d='M15 12c0-2.5-1.344-4.781-3.5-6.031-2.187-1.282-4.844-1.282-7 0A6.9 6.9 0 0 0 1 12c0 2.531 1.313 4.813 3.5 6.063 2.156 1.28 4.813 1.28 7 0A6.98 6.98 0 0 0 15 12M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m10.344-2.875c-.188-.187-.5-.187-.719 0l-.656.656 1.25 1.25.656-.656a.476.476 0 0 0 0-.719zm-4.656 3.938c-.063.062-.094.156-.125.25l-.375 1.53 1.53-.405c.063 0 .157-.063.22-.126L9.5 11.75 8.25 10.5zm3.25-4.657a1.49 1.49 0 0 1 2.124 0l.532.563a1.453 1.453 0 0 1 0 2.094L7.656 15.03a1.6 1.6 0 0 1-.718.375L4.594 16a.52.52 0 0 1-.469-.125.52.52 0 0 1-.125-.469l.594-2.344c.062-.28.187-.5.375-.718z' />
    </g>
    <defs>
      <clipPath id='73c6cb480c5052a315439210be699903__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCircleMdRegularIcon);
export default ForwardRef;
