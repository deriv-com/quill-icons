import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6.602 23.898-6.25-6.25a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l4.141 4.101V8c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v11.992l4.102-4.101a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757l-6.25 6.25a1.205 1.205 0 0 1-1.757 0' />
    </g>
    <defs>
      <clipPath id='42cf79e4bff56a9b7c86e1ce6091f3cd__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLgFillIcon);
export default ForwardRef;
