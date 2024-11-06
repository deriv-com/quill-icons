import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMagnifyingGlassMinusCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.75 8.375a4.87 4.87 0 0 1-.937 2.883l2.953 2.976a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.055 0l-2.977-2.976c-.796.609-1.804.937-2.859.937A4.87 4.87 0 0 1 0 8.375C0 5.703 2.18 3.5 4.875 3.5c2.672 0 4.875 2.203 4.875 4.875m-6.562-.562a.555.555 0 0 0-.563.562c0 .328.234.563.563.563h3.375a.555.555 0 0 0 .562-.563.57.57 0 0 0-.562-.562z' />
    </g>
    <defs>
      <clipPath id='14556a96400aab51238a057ec07d47b8__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMagnifyingGlassMinusCaptionFillIcon);
export default ForwardRef;
