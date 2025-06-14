import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilePdfCaptionFillIcon = (
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
      <path d='M0 5c0-.82.656-1.5 1.5-1.5h3.75v3c0 .422.328.75.75.75h3v3.375H4.125c-.844 0-1.5.68-1.5 1.5V15.5H1.5A1.48 1.48 0 0 1 0 14zm9 1.5H6v-3zm-4.875 5.25h.75c.703 0 1.313.61 1.313 1.313 0 .726-.61 1.312-1.313 1.312H4.5v.75c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-3c0-.187.164-.375.375-.375m.75 1.875a.555.555 0 0 0 .563-.562.57.57 0 0 0-.563-.563H4.5v1.125zm2.25-1.875h.75c.61 0 1.125.516 1.125 1.125v1.5c0 .633-.516 1.125-1.125 1.125h-.75a.37.37 0 0 1-.375-.375v-3c0-.187.164-.375.375-.375m.75 3a.385.385 0 0 0 .375-.375v-1.5a.4.4 0 0 0-.375-.375H7.5v2.25zm1.875-2.625c0-.187.164-.375.375-.375h1.125c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-.75v.75h.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-.75v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-3' />
    </g>
    <defs>
      <clipPath id='7c1b1cdfdaf2bb02e7e4dfdeeca2f585__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilePdfCaptionFillIcon);
export default ForwardRef;
