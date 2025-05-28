import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGraduationCapCaptionBoldIcon = (
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
      <path d='M7.5 5.375c-.07 0-.117.023-.187.047L2.202 7.25l1.055.398c.117-.07.234-.117.351-.164l3.75-1.406a.38.38 0 0 1 .493.234.36.36 0 0 1-.235.47L4.313 8.022l3 1.079c.07.023.117.023.187.023.047 0 .117 0 .164-.023l5.11-1.852-5.11-1.828a.4.4 0 0 0-.164-.047M.352 7.789C.14 7.72 0 7.508 0 7.25c0-.234.14-.445.352-.516l6.586-2.367c.164-.07.351-.117.562-.117.188 0 .375.047.54.117l6.585 2.367a.557.557 0 0 1 0 1.055l-6.586 2.367c-.164.07-.351.117-.539.117-.21 0-.398-.046-.562-.117l-3.985-1.43a3.16 3.16 0 0 0-1.078 2.204c.14.328.234.656.305.984.14.633.257 1.547.047 2.555-.024.094-.07.187-.164.234a.4.4 0 0 1-.282.047l-1.5-.375A.36.36 0 0 1 0 14.141a.46.46 0 0 1 .07-.352c.188-.281.375-.586.516-.89.281-.54.539-1.22.539-1.899v-.023A3.86 3.86 0 0 1 2.18 8.445zm11.273 1.875L12 13.063c0 .843-2.016 1.687-4.5 1.687S3 13.906 3 13.063l.352-3.399 1.078.399-.282 2.812c.094.094.282.188.563.305.68.258 1.664.445 2.789.445s2.11-.187 2.766-.445c.28-.117.468-.211.562-.305l-.281-2.812zm-.68 3.117v.024zm-6.914 0v.024z' />
    </g>
    <defs>
      <clipPath id='3ae677a7d5dc66fe9922db993f81bf66__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGraduationCapCaptionBoldIcon);
export default ForwardRef;
