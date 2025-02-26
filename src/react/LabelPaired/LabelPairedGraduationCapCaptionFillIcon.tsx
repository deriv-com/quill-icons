import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGraduationCapCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.5 4.25c.188 0 .375.047.54.117l6.585 2.367a.557.557 0 0 1 0 1.055l-6.586 2.367c-.164.07-.351.094-.562.094-.188 0-.375-.023-.54-.094l-3.75-1.36c.211-.21.47-.374.75-.491l3.68-1.453c.211-.07.305-.282.211-.493a.364.364 0 0 0-.469-.21L3.68 7.601a2.85 2.85 0 0 0-1.171.843 3.2 3.2 0 0 0-.633 1.899v.586c.14.304.234.656.305.984.14.633.257 1.547.047 2.555-.024.094-.07.187-.164.234a.4.4 0 0 1-.282.047l-1.5-.375A.36.36 0 0 1 0 14.141a.46.46 0 0 1 .07-.352c.188-.281.375-.586.516-.89.281-.54.539-1.22.539-1.899v-.656c0-.75.21-1.453.586-2.063L.35 7.79C.142 7.72 0 7.508 0 7.25c0-.234.14-.445.352-.516l6.586-2.367c.164-.07.351-.117.562-.117M3 13.063l.352-3.399L6.68 10.86a2.4 2.4 0 0 0 1.617 0l3.328-1.195.375 3.399c0 .843-2.016 1.687-4.5 1.687S3 13.906 3 13.063' />
    </g>
    <defs>
      <clipPath id='a08a865e5ccb14cb5dc3ae6664420da4__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGraduationCapCaptionFillIcon);
export default ForwardRef;
