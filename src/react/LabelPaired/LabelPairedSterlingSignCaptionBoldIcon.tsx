import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignCaptionBoldIcon = (
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
      <path d='M2.5 7.227V8.75h3.188q.514.047.562.563-.047.514-.562.562H2.5v1.477q0 .914-.445 1.71l-.305.563h5.438q.514.047.562.563-.047.514-.562.562H.813q-.306 0-.493-.281a.55.55 0 0 1 0-.54l.75-1.406q.305-.539.305-1.171V9.875H.813Q.297 9.828.25 9.313q.047-.516.563-.563h.562V7.227q.024-1.266.867-2.11.844-.843 2.11-.867.492 0 .96.164l1.875.61q.47.21.352.726-.21.47-.726.352l-1.875-.633a1.8 1.8 0 0 0-.586-.094 1.92 1.92 0 0 0-1.313.54q-.515.538-.539 1.312' />
    </g>
    <defs>
      <clipPath id='6886d3a4b546c6c7d918d898072c52be__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignCaptionBoldIcon);
export default ForwardRef;
