import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveMdFillIcon = (
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
      <path d='M1 5.844C1.094 5.375 1.5 5 2 5h6c.531 0 1 .469 1 1 0 .563-.469 1-1 1H2.813l-.626 3.5H5.75A4.254 4.254 0 0 1 10 14.75 4.235 4.235 0 0 1 5.75 19H3.125a3.28 3.28 0 0 1-2.906-1.781l-.125-.25a.99.99 0 0 1 .437-1.344.99.99 0 0 1 1.344.438l.125.25c.219.437.656.687 1.125.687H5.75C6.969 17 8 16 8 14.75c0-1.219-1.031-2.25-2.25-2.25H1c-.312 0-.594-.125-.781-.344A.96.96 0 0 1 0 11.344z' />
    </g>
    <defs>
      <clipPath id='aaa79a7c3df60f0d1decd04a51e8426c__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveMdFillIcon);
export default ForwardRef;
