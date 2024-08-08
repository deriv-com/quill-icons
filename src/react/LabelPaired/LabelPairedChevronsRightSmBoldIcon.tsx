import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.715 10.285c.246.274.246.684 0 .93l-5.25 5.25c-.274.273-.684.273-.93 0a.6.6 0 0 1 0-.902l4.785-4.786-4.785-4.812a.6.6 0 0 1 0-.902.6.6 0 0 1 .902 0zm-10.5-5.25 5.25 5.25c.246.274.246.684 0 .93l-5.25 5.25c-.274.273-.684.273-.93 0a.6.6 0 0 1 0-.902l4.785-4.786-4.785-4.812a.6.6 0 0 1 0-.902.6.6 0 0 1 .903 0z' />
    </g>
    <defs>
      <clipPath id='b49e62bb01dc3aa991d221060af6e73b__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightSmBoldIcon);
export default ForwardRef;
