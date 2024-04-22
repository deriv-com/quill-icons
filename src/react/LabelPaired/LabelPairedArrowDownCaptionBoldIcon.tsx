import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.078 14.586.141 10.46c-.211-.234-.211-.586.023-.797.234-.21.586-.21.797.024l2.976 3.117V4.813c0-.305.235-.563.563-.563a.57.57 0 0 1 .563.563v7.992l2.953-3.117a.56.56 0 0 1 .797-.024c.234.211.234.563.023.797l-3.938 4.125a.55.55 0 0 1-.398.164.56.56 0 0 1-.422-.164' />
    </g>
    <defs>
      <clipPath id='1c3f046671607d0c720865e6a579bb1a__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownCaptionBoldIcon);
export default ForwardRef;
