import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.625 6c-.906 0-1.781.375-2.437 1l-.844.875a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l.875-.843A4.32 4.32 0 0 1 4.625 5C7 5 9 6.938 9 9.344c0 1.219-.5 2.344-1.375 3.187L1.75 18H9.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-9a.48.48 0 0 1-.469-.312.434.434 0 0 1 .125-.532l6.782-6.375A3.38 3.38 0 0 0 8 9.344C8 7.5 6.469 6 4.625 6' />
    </g>
    <defs>
      <clipPath id='7974dedd72f66f26e368a663607f47da__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoMdRegularIcon);
export default ForwardRef;
