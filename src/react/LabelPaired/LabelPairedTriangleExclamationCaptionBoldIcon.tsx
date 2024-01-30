import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationCaptionBoldIcon = (
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
      <path d='m5.813 5.469-4.641 7.64a.33.33 0 0 0-.047.188q.024.304.352.328h9.07q.304-.024.328-.328a.4.4 0 0 0-.047-.188l-4.64-7.64A.22.22 0 0 0 6 5.375a.22.22 0 0 0-.187.094m-.961-.586Q5.273 4.274 6 4.25q.75.024 1.148.633l4.641 7.64q.21.352.211.774-.024.61-.422 1.031a1.54 1.54 0 0 1-1.031.422h-9.07q-.633-.024-1.055-.422A1.54 1.54 0 0 1 0 13.297q0-.422.21-.774zm1.898 7.242a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21.73.73 0 0 1 .54.21q.21.212.21.54m-.187-4.312v2.25q-.048.514-.563.562-.516-.047-.562-.562v-2.25q.045-.516.562-.563.516.047.563.563' />
    </g>
    <defs>
      <clipPath id='559f44ab44b842c698ada3c5d65d480d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationCaptionBoldIcon);
export default ForwardRef;
