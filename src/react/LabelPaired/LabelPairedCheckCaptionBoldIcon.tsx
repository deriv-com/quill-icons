import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCheckCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.586 5.914q.328.399 0 .797l-6.188 6.187q-.397.33-.796 0L.414 9.711q-.328-.399 0-.797.399-.328.797 0L4 11.704l5.79-5.79q.397-.328.796 0' />
    </g>
    <defs>
      <clipPath id='3ba52f55bd6a68dca964642bd9e1f847__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckCaptionBoldIcon);
export default ForwardRef;
