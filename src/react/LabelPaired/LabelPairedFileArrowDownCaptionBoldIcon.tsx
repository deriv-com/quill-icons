import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileArrowDownCaptionBoldIcon = (
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
      <path d='M1.125 14c0 .21.164.375.375.375h6A.385.385 0 0 0 7.875 14V7.25H6a.74.74 0 0 1-.75-.75V4.625H1.5A.385.385 0 0 0 1.125 5zM1.5 3.5h3.867c.399 0 .774.164 1.055.445l2.133 2.133c.28.281.445.656.445 1.055V14c0 .844-.68 1.5-1.5 1.5h-6A1.48 1.48 0 0 1 0 14V5c0-.82.656-1.5 1.5-1.5m3.563 5.438v2.414l.726-.727c.211-.234.563-.234.797 0 .21.21.21.563 0 .773l-1.688 1.688c-.234.234-.585.234-.796 0l-1.688-1.688a.513.513 0 0 1 0-.773c.211-.234.563-.234.797 0l.727.727V8.937c0-.304.234-.562.562-.562a.57.57 0 0 1 .563.563' />
    </g>
    <defs>
      <clipPath id='7aa268b80db8d4b1ac343872f16cffe9__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileArrowDownCaptionBoldIcon);
export default ForwardRef;
