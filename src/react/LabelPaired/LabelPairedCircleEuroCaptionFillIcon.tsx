import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroCaptionFillIcon = (
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
      <path d='M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3M3 9.875a.385.385 0 0 0-.375.375c0 .21.164.375.375.375h.563a2.985 2.985 0 0 0 2.789 1.922h.984a.57.57 0 0 0 .562-.563.57.57 0 0 0-.562-.562h-.984a1.85 1.85 0 0 1-1.524-.797H6.75a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375H4.5c-.023-.094-.023-.234-.023-.352 0-.14 0-.257.023-.398h2.25a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375H4.852c.351-.445.89-.75 1.5-.75h.984a.555.555 0 0 0 .562-.562.57.57 0 0 0-.562-.563h-.984c-1.243 0-2.344.797-2.79 1.875H3a.385.385 0 0 0-.375.375c0 .21.164.375.375.375h.375c-.023.14-.023.281-.023.398 0 .118 0 .235.023.352z' />
    </g>
    <defs>
      <clipPath id='62351fc4f16eefb8deed16a03cded7ed__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroCaptionFillIcon);
export default ForwardRef;
