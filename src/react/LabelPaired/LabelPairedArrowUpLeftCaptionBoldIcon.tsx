import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftCaptionBoldIcon = (
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
      <path d='M1.313 5.75h5.625q.514.047.562.563-.047.514-.562.562H2.672l5.414 5.414q.328.399 0 .797-.399.328-.797 0L1.875 7.672v4.266q-.047.514-.562.562-.516-.047-.563-.562V6.312q.047-.514.563-.562' />
    </g>
    <defs>
      <clipPath id='9453b0384372c1db65276b1786eefb62__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftCaptionBoldIcon);
export default ForwardRef;
