import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.406 15.07 6.875-6.875a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899l-5.82 5.781h14.765c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H2.359l5.82 5.82a.66.66 0 0 1 0 .899.66.66 0 0 1-.898 0L.406 15.969a.66.66 0 0 1 0-.899' />
    </g>
    <defs>
      <clipPath id='eee9d73f6d799f9747bb9789872a1654__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftLgRegularIcon);
export default ForwardRef;
