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
      <path d='M1.313 3.5h1.875a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H1.312a.185.185 0 0 0-.187.188v1.875a.555.555 0 0 1-.562.562A.54.54 0 0 1 0 6.688V4.813C0 4.109.586 3.5 1.313 3.5m7.5 0h1.874c.704 0 1.313.61 1.313 1.313v1.875a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562V4.813a.2.2 0 0 0-.187-.188H8.812a.54.54 0 0 1-.562-.562c0-.305.234-.563.563-.563m-7.688 8.813v1.874c0 .118.07.188.188.188h1.875a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H1.312A1.31 1.31 0 0 1 0 14.188v-1.876c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563m10.875 0v1.874c0 .727-.61 1.313-1.312 1.313H8.812a.54.54 0 0 1-.562-.562c0-.305.234-.563.563-.563h1.874c.094 0 .188-.07.188-.187v-1.876c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563M2.25 9.5a3.72 3.72 0 0 1 1.875-3.234 3.7 3.7 0 0 1 3.75 0C9.023 6.946 9.75 8.164 9.75 9.5a3.78 3.78 0 0 1-1.875 3.258 3.7 3.7 0 0 1-3.75 0A3.73 3.73 0 0 1 2.25 9.5m3-.937A.57.57 0 0 0 4.688 8a.555.555 0 0 0-.563.563c0 .328.234.562.563.562a.555.555 0 0 0 .562-.562m2.063.562a.555.555 0 0 0 .562-.562A.57.57 0 0 0 7.313 8a.555.555 0 0 0-.563.563c0 .328.234.562.563.562M3.96 10.367c-.14.14-.14.375 0 .54A2.9 2.9 0 0 0 6 11.75c.797 0 1.5-.328 2.016-.844.14-.164.14-.398 0-.539-.164-.14-.399-.14-.54 0-.374.399-.89.633-1.476.633a2.05 2.05 0 0 1-1.5-.633c-.14-.14-.375-.14-.54 0' />
    </g>
    <defs>
      <clipPath id='60246f91ffb91cd9a922bf9dc1b5f27d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderCaptionFillIcon);
export default ForwardRef;
