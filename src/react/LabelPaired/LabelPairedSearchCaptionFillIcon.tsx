import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchCaptionFillIcon = (
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
      <path d='M9.75 8.375a4.87 4.87 0 0 1-.937 2.883l2.953 2.976a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.055 0l-2.977-2.976c-.796.609-1.804.937-2.859.937A4.87 4.87 0 0 1 0 8.375C0 5.703 2.18 3.5 4.875 3.5c2.672 0 4.875 2.203 4.875 4.875M4.875 11.75a3.35 3.35 0 0 0 2.906-1.687c.61-1.032.61-2.32 0-3.376C7.171 5.658 6.071 5 4.875 5c-1.219 0-2.32.656-2.93 1.688a3.34 3.34 0 0 0 0 3.375 3.36 3.36 0 0 0 2.93 1.687' />
    </g>
    <defs>
      <clipPath id='690f267a2b7755aba1f66eec2719c7fb__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchCaptionFillIcon);
export default ForwardRef;
