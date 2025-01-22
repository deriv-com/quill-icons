import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQuestionCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 7.25a.555.555 0 0 1-.562.563.54.54 0 0 1-.563-.563c0-1.64 1.336-3 2.977-2.977h.75c1.664 0 3 1.336 3 3v.094c0 .938-.47 1.828-1.243 2.344l-1.218.82a.74.74 0 0 0-.328.61v.046A.555.555 0 0 1 4 11.75a.54.54 0 0 1-.562-.562v-.047c0-.61.304-1.196.82-1.547l1.219-.82a1.65 1.65 0 0 0 .773-1.407V7.25a1.88 1.88 0 0 0-1.875-1.875h-.75A1.866 1.866 0 0 0 1.75 7.25M4 14.75a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75' />
    </g>
    <defs>
      <clipPath id='16dab4abd2885d2ea1ebaf6f3533078d__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQuestionCaptionBoldIcon);
export default ForwardRef;
