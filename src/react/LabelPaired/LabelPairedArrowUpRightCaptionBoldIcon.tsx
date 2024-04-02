import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightCaptionBoldIcon = (
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
      <path d='M7.688 5.75a.57.57 0 0 1 .562.563v5.625a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562V7.672l-5.414 5.414c-.234.234-.586.234-.797 0a.513.513 0 0 1 0-.774l5.414-5.414H2.063a.555.555 0 0 1-.563-.562c0-.328.234-.563.563-.563h5.624z' />
    </g>
    <defs>
      <clipPath id='d9a20741b4782ca1015e5289756959d1__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightCaptionBoldIcon);
export default ForwardRef;
