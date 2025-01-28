import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.188 25.313 9 19.078l-6.234 6.235c-.282.28-.75.28-1.078 0-.282-.329-.282-.797 0-1.079L7.922 18l-6.234-6.187c-.282-.282-.282-.75 0-1.079.328-.28.796-.28 1.078 0L9 16.97l6.188-6.235c.28-.28.75-.28 1.078 0 .28.329.28.797 0 1.079L10.03 18l6.235 6.234c.28.282.28.75 0 1.078-.328.282-.797.282-1.078 0' />
    </g>
    <defs>
      <clipPath id='03125cc5b3efaa4b8afed771c9ed243a__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkXlRegularIcon);
export default ForwardRef;
