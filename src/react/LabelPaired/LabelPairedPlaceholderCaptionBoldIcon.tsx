import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderCaptionBoldIcon = (
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
      <path d='M2.313 4.25h.374q.516.047.563.563-.047.514-.562.562h-.376a.85.85 0 0 0-.656.281.85.85 0 0 0-.281.657v.375q-.047.514-.562.562-.516-.047-.563-.562v-.375q.024-.868.61-1.454.585-.585 1.453-.609M.813 8q.514.047.562.563v1.874q-.047.516-.562.563-.516-.047-.563-.562V8.562Q.297 8.049.813 8m9.375 0q.514.047.562.563v1.874q-.047.516-.562.563-.516-.047-.563-.562V8.562q.047-.514.563-.562m0-.75q-.516-.047-.563-.562v-.375a.85.85 0 0 0-.281-.657.85.85 0 0 0-.656-.281h-.376q-.514-.047-.562-.562.047-.516.563-.563h.374q.868.024 1.454.61.585.585.609 1.452v.375q-.047.516-.562.563m.562 5.063v.374q-.024.868-.61 1.454-.585.585-1.453.609h-.374q-.516-.047-.563-.562.047-.516.563-.563h.374a.85.85 0 0 0 .657-.281.85.85 0 0 0 .281-.656v-.376q.047-.514.563-.562.514.047.562.563m-9.375 0v.374q0 .399.281.657.257.28.657.281h.374q.516.047.563.563-.047.514-.562.562h-.376q-.867-.024-1.453-.61-.585-.585-.609-1.453v-.374q.047-.516.563-.563.514.047.562.563m3.188 2.437q-.516-.047-.563-.562.047-.516.563-.563h1.875q.514.047.562.563-.047.514-.562.562zM4 4.813q.047-.516.563-.563h1.875q.514.047.562.563-.047.514-.562.562H4.563Q4.047 5.328 4 4.813' />
    </g>
    <defs>
      <clipPath id='9b471df92ce7cd159b6c281e60ab422d__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderCaptionBoldIcon);
export default ForwardRef;
