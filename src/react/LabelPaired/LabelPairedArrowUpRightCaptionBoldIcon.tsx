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
      <path d='M7.688 5.75q.514.047.562.563v5.625q-.047.514-.562.562-.516-.047-.563-.562V7.672l-5.414 5.414q-.399.328-.797 0-.328-.399 0-.797l5.414-5.414H2.063q-.516-.047-.563-.562.047-.516.563-.563z' />
    </g>
    <defs>
      <clipPath id='21119f0e4f8c024a7ab9c72d093d51eb__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightCaptionBoldIcon);
export default ForwardRef;
