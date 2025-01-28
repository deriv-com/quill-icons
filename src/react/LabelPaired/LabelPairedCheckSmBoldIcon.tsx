import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCheckSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.434 6.566c.246.274.246.684 0 .93l-7.22 7.219c-.273.273-.683.273-.929 0L.566 10.996a.6.6 0 0 1 0-.902.6.6 0 0 1 .903 0l3.254 3.254 6.78-6.782a.644.644 0 0 1 .903 0z' />
    </g>
    <defs>
      <clipPath id='a6eb0d1857fe137a1f7a21e0d6bc3509__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckSmBoldIcon);
export default ForwardRef;
