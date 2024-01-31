import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.563 6.375h6.125q.41.027.437.438-.027.41-.437.437h-5.06l7.11 7.137q.274.3 0 .601-.3.274-.601 0L2 7.878v5.06q-.027.41-.437.437-.411-.027-.438-.437V6.812q.027-.41.438-.437' />
    </g>
    <defs>
      <clipPath id='f7c5518bebbc5709__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftSmRegularIcon);
export default ForwardRef;
