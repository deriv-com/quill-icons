import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMagnifyingGlassPlusCaptionBoldIcon = (
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
      <path d='M4.875 4.625A3.78 3.78 0 0 0 1.617 6.5a3.7 3.7 0 0 0 0 3.75 3.73 3.73 0 0 0 3.258 1.875 3.72 3.72 0 0 0 3.234-1.875 3.7 3.7 0 0 0 0-3.75c-.68-1.148-1.898-1.875-3.234-1.875m0 8.625A4.87 4.87 0 0 1 0 8.375C0 5.703 2.18 3.5 4.875 3.5c2.672 0 4.875 2.203 4.875 4.875a4.95 4.95 0 0 1-1.055 3.047l3.117 3.14a.513.513 0 0 1 0 .774.513.513 0 0 1-.773 0L7.9 12.219a4.9 4.9 0 0 1-3.024 1.031m-.562-2.812v-1.5h-1.5a.54.54 0 0 1-.563-.563c0-.305.234-.562.563-.562h1.5v-1.5c0-.305.234-.563.562-.563a.57.57 0 0 1 .563.563v1.5h1.5a.57.57 0 0 1 .562.562.555.555 0 0 1-.562.563h-1.5v1.5a.555.555 0 0 1-.563.562.54.54 0 0 1-.562-.562' />
    </g>
    <defs>
      <clipPath id='a49ba648669a5a98617cd8414a635c52__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMagnifyingGlassPlusCaptionBoldIcon);
export default ForwardRef;
