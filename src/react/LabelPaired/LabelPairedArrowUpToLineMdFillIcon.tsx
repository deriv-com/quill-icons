import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 5h10c.531 0 1 .469 1 1 0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1 0-.531.438-1 1-1m5.688 4.313 4 4a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.407 0L7 12.438V18c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-5.562l-2.312 2.28a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.405l4-4a.964.964 0 0 1 1.407 0' />
    </g>
    <defs>
      <clipPath id='5187f4202987bd03e90f947f09e8a959__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineMdFillIcon);
export default ForwardRef;
