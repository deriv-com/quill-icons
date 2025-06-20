import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelCaptionBoldIcon = (
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
      <path d='M1.125 14c0 .21.164.375.375.375h6A.385.385 0 0 0 7.875 14V7.25H6a.74.74 0 0 1-.75-.75V4.625H1.5A.385.385 0 0 0 1.125 5zM1.5 3.5h3.867c.399 0 .774.164 1.055.445l2.133 2.133c.28.281.445.656.445 1.055V14c0 .844-.68 1.5-1.5 1.5h-6A1.48 1.48 0 0 1 0 14V5c0-.82.656-1.5 1.5-1.5m2.11 5.484.89 1.102.867-1.102a.54.54 0 0 1 .774-.117c.257.211.304.563.093.797L5.204 11l1.054 1.36a.54.54 0 0 1-.117.773.536.536 0 0 1-.774-.094L4.5 11.938l-.867 1.101c-.211.258-.563.305-.797.094a.536.536 0 0 1-.094-.774L3.773 11l-1.03-1.336a.518.518 0 0 1 .093-.773.518.518 0 0 1 .773.093' />
    </g>
    <defs>
      <clipPath id='969c73c33d43b92fd7bc440abb6958cf__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelCaptionBoldIcon);
export default ForwardRef;
