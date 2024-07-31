import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.414 9.922A.56.56 0 0 1 .25 9.5c0-.14.047-.281.164-.398L4.54 5.164c.234-.21.586-.21.797.024a.56.56 0 0 1-.024.796L2.196 8.938h7.993a.57.57 0 0 1 .562.562.555.555 0 0 1-.562.563H2.194l3.118 2.976c.234.211.234.563.023.797s-.563.234-.797.023z' />
    </g>
    <defs>
      <clipPath id='a23762d6fe769ec56f33b93982ebb4b1__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftCaptionBoldIcon);
export default ForwardRef;
