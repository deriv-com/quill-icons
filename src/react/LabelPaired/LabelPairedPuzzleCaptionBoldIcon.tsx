import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzleCaptionBoldIcon = (
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
      <path d='M10.5 3.5c.82 0 1.5.68 1.5 1.5v3c0 .21-.187.375-.375.375h-1.219a.285.285 0 0 0-.281.281v.094c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-.094c0-.14-.14-.281-.281-.281H7.5A.37.37 0 0 1 7.125 8v-.75c0-.187.164-.375.375-.375h.375c.398 0 .75-.328.75-.75a.77.77 0 0 0-.75-.75H7.5A.37.37 0 0 1 7.125 5V3.875c0-.187.164-.375.375-.375zM0 9.125V6.5C0 5.68.656 5 1.5 5h3.375c.188 0 .375.188.375.375v1.219a.27.27 0 0 0 .281.281h.094c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-.094a.285.285 0 0 0-.281.281v1.219c0 .21-.187.375-.375.375h-.75a.37.37 0 0 1-.375-.375V9.5A.77.77 0 0 0 3 8.75a.755.755 0 0 0-.75.75v.375c0 .21-.187.375-.375.375h-.75v3.563c0 .328.234.562.563.562H5.25v-.844c0-.14-.14-.281-.281-.281h-.094a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h.094c.14 0 .281-.117.281-.281v-.844c0-.187.164-.375.375-.375H6.75c.188 0 .375.188.375.375V11c0 .422.328.75.75.75.398 0 .75-.328.75-.75v-.375c0-.187.164-.375.375-.375h1.125c.188 0 .375.188.375.375V14c0 .844-.68 1.5-1.5 1.5H1.688A1.68 1.68 0 0 1 0 13.813V9.125' />
    </g>
    <defs>
      <clipPath id='7e6ab9f13250566831f64c243c608cf5__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzleCaptionBoldIcon);
export default ForwardRef;
