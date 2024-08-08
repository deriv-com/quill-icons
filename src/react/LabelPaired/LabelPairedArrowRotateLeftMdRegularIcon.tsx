import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateLeftMdRegularIcon = (
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
      <path d='M1.5 10a.494.494 0 0 1-.5-.5v-4c0-.25.219-.5.5-.5.25 0 .5.25.5.5v2.906A6.98 6.98 0 0 1 8 5c3.844 0 7 3.156 7 7 0 3.875-3.156 7-7 7a7 7 0 0 1-5.937-3.25c-.22-.344.03-.75.437-.75.188 0 .344.125.438.281A6.05 6.05 0 0 0 8 18c3.313 0 6-2.687 6-6 0-3.312-2.687-6-6-6a6.02 6.02 0 0 0-5.219 3H5.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5z' />
    </g>
    <defs>
      <clipPath id='c06c00ac6aef417c324908327e4ac5b5__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateLeftMdRegularIcon);
export default ForwardRef;
