import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 27c0 .422.328.75.75.75h12c.375 0 .75-.328.75-.75V13.5H12a1.48 1.48 0 0 1-1.5-1.5V8.25H3c-.422 0-.75.375-.75.75zM3 6h7.734c.797 0 1.547.328 2.11.89l4.265 4.266c.563.563.891 1.313.891 2.11V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3m4.219 10.969L9 19.172l1.734-2.203c.375-.516 1.079-.61 1.547-.235.516.422.61 1.125.188 1.594L10.406 21l2.11 2.719c.375.468.28 1.172-.235 1.547-.469.375-1.172.328-1.547-.188L9 22.875l-1.734 2.203c-.422.516-1.125.61-1.594.188-.516-.375-.563-1.078-.188-1.547L7.547 21l-2.063-2.672c-.421-.469-.328-1.172.188-1.547.469-.422 1.172-.328 1.547.188' />
    </g>
    <defs>
      <clipPath id='5027ece930b194bd5565eec372064f59__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelXlBoldIcon);
export default ForwardRef;
