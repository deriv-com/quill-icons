import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMagnifyingGlassPlusCaptionFillIcon = (
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
      <path d='M9.75 8.375a4.87 4.87 0 0 1-.937 2.883l2.953 2.976a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.055 0l-2.977-2.976c-.796.609-1.804.937-2.859.937A4.87 4.87 0 0 1 0 8.375C0 5.703 2.18 3.5 4.875 3.5c2.672 0 4.875 2.203 4.875 4.875m-5.437 2.063c0 .328.234.562.562.562a.555.555 0 0 0 .563-.562v-1.5h1.5a.555.555 0 0 0 .562-.563.57.57 0 0 0-.562-.562h-1.5v-1.5a.57.57 0 0 0-.563-.563.555.555 0 0 0-.562.563v1.5h-1.5a.555.555 0 0 0-.563.562c0 .328.234.563.563.563h1.5z' />
    </g>
    <defs>
      <clipPath id='f8021a61189c6b251f997ab32a7464ad__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMagnifyingGlassPlusCaptionFillIcon);
export default ForwardRef;
