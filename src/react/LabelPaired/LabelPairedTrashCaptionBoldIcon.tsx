import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashCaptionBoldIcon = (
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
      <path d='M4.398 4.625q-.093 0-.14.094l-.445.656H7.21l-.445-.656q-.07-.094-.164-.094zm4.149.75h1.641q.514.047.562.563-.047.514-.562.562h-.282l-.562 7.617a1.47 1.47 0 0 1-.469.985q-.422.375-1.008.398H3.133a1.56 1.56 0 0 1-1.008-.398 1.47 1.47 0 0 1-.469-.985L1.094 6.5H.812Q.299 6.453.25 5.938q.047-.516.563-.563h1.64l.867-1.29q.399-.562 1.078-.585h2.204q.68.023 1.101.586zM8.78 6.5H2.22l.539 7.523q.07.329.375.352h4.734q.305-.024.375-.352z' />
    </g>
    <defs>
      <clipPath id='c0294a3ca34878a23d3489779cb8ee65__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashCaptionBoldIcon);
export default ForwardRef;
