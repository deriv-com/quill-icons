import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronRightSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.465 10.285c.246.274.246.684 0 .93l-5.25 5.25c-.274.273-.684.273-.93 0a.6.6 0 0 1 0-.902l4.785-4.786-4.785-4.812a.6.6 0 0 1 0-.902.6.6 0 0 1 .902 0z' />
    </g>
    <defs>
      <clipPath id='2c2ae460ebf55f2631e88a915630bb32__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightSmBoldIcon);
export default ForwardRef;
