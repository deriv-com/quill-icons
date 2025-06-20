import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveCaptionBoldIcon = (
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
      <path d='M1 4.719a.58.58 0 0 1 .563-.469h4.875A.57.57 0 0 1 7 4.813a.555.555 0 0 1-.562.562H2.03L1.47 8.563h3.187c1.688 0 3.094 1.406 3.094 3.093a3.106 3.106 0 0 1-3.094 3.094h-2.25c-.844 0-1.64-.469-2.015-1.242l-.094-.188a.555.555 0 0 1 .258-.75.555.555 0 0 1 .75.258l.093.188c.188.375.586.609 1.008.609h2.25a1.966 1.966 0 0 0 1.969-1.969 1.98 1.98 0 0 0-1.969-1.969H.813A.6.6 0 0 1 .367 9.5a.67.67 0 0 1-.117-.469z' />
    </g>
    <defs>
      <clipPath id='64db8126abe4b9e5fb2036e8f2be68b5__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveCaptionBoldIcon);
export default ForwardRef;
