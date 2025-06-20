import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilePdfCaptionRegularIcon = (
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
      <path d='M1.5 14.75h1.125v.75H1.5A1.48 1.48 0 0 1 0 14V5c0-.82.656-1.5 1.5-1.5h3.656c.282 0 .586.14.797.352l2.695 2.695c.211.21.352.516.352.797v3.281h-.75V8H5.625A1.11 1.11 0 0 1 4.5 6.875V4.25h-3A.755.755 0 0 0 .75 5v9c0 .422.328.75.75.75m6.727-7.5c-.024-.047-.047-.117-.094-.164L5.414 4.367c-.047-.047-.117-.07-.164-.094v2.602c0 .21.164.375.375.375zm-4.102 4.5h.75c.703 0 1.313.61 1.313 1.313 0 .726-.61 1.312-1.313 1.312H4.5v.75c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-3c0-.187.164-.375.375-.375m.75 1.875a.555.555 0 0 0 .563-.562.57.57 0 0 0-.563-.563H4.5v1.125zm2.25-1.875h.75c.61 0 1.125.516 1.125 1.125v1.5c0 .633-.516 1.125-1.125 1.125h-.75a.37.37 0 0 1-.375-.375v-3c0-.187.164-.375.375-.375m.75 3a.385.385 0 0 0 .375-.375v-1.5a.4.4 0 0 0-.375-.375H7.5v2.25zm1.875-2.625c0-.187.164-.375.375-.375h1.125c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-.75v.75h.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-.75v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-3' />
    </g>
    <defs>
      <clipPath id='7023db1351484dbab938faa209e1e813__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilePdfCaptionRegularIcon);
export default ForwardRef;
