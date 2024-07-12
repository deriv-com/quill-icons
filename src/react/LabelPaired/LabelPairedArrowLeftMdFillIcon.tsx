import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.281 11.313 5-5a.964.964 0 0 1 1.407 0 .964.964 0 0 1 0 1.406L3.406 11H13c.531 0 1 .469 1 1 0 .563-.469 1-1 1H3.406l3.282 3.313a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.407 0l-5-5a.964.964 0 0 1 0-1.406' />
    </g>
    <defs>
      <clipPath id='0b4977671dcc00b961ba38c8a67a557c__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftMdFillIcon);
export default ForwardRef;
