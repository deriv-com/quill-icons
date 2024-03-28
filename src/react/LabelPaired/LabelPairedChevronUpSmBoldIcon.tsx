import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronUpSmBoldIcon = (
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
      <path d='M6.535 6.785a.644.644 0 0 1 .902 0l5.278 5.25c.246.274.246.684 0 .93-.274.273-.684.273-.93 0L7 8.18l-4.785 4.785c-.274.273-.684.273-.93 0a.6.6 0 0 1 0-.902z' />
    </g>
    <defs>
      <clipPath id='5bbf6d323178329442b0a74aefd40f05__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpSmBoldIcon);
export default ForwardRef;
