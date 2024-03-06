import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFaceViewfinderCaptionFillIcon = (
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
      <path d='M1.313 3.5h1.875q.514.047.562.563-.047.514-.562.562H1.312q-.163.024-.187.188v1.875q-.047.514-.562.562Q.046 7.203 0 6.688V4.813q.023-.563.375-.938.375-.352.938-.375m7.5 0h1.874q.563.023.938.375.352.375.375.938v1.875q-.047.514-.562.562-.516-.047-.563-.562V4.813q-.024-.165-.187-.188H8.812q-.514-.047-.562-.562.047-.516.563-.563m-7.688 8.813v1.874q.024.165.188.188h1.875q.514.047.562.563-.047.514-.562.562H1.312a1.4 1.4 0 0 1-.937-.375A1.4 1.4 0 0 1 0 14.188v-1.876q.047-.514.563-.562.514.047.562.563m10.875 0v1.874q-.023.563-.375.938-.375.352-.937.375H8.812q-.514-.047-.562-.562.047-.516.563-.563h1.874q.165-.024.188-.187v-1.876q.047-.514.563-.562.514.047.562.563M2.25 9.5q0-1.008.492-1.875a3.9 3.9 0 0 1 1.383-1.383 3.82 3.82 0 0 1 3.75 0q.868.516 1.383 1.383.492.867.492 1.875t-.492 1.875a3.9 3.9 0 0 1-1.383 1.383 3.82 3.82 0 0 1-3.75 0 3.9 3.9 0 0 1-1.383-1.383A3.74 3.74 0 0 1 2.25 9.5m3-.937Q5.203 8.047 4.688 8q-.516.047-.563.563.047.514.563.562.514-.047.562-.562m2.063.562q.514-.047.562-.562-.047-.516-.562-.563-.516.047-.563.563.047.514.563.562m-3.329 1.242q-.234.258-.023.516.82.843 2.039.867 1.219-.024 2.04-.867.21-.258-.024-.516-.258-.234-.516 0-.585.609-1.5.633-.89-.024-1.477-.633-.28-.234-.539-.023z' />
    </g>
    <defs>
      <clipPath id='6ad5669d8ae368b77a57bfe43705bf55__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderCaptionFillIcon);
export default ForwardRef;