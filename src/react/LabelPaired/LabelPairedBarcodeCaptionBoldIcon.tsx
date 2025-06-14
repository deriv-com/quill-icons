import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeCaptionBoldIcon = (
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
      <path d='M.563 4.25a.57.57 0 0 1 .562.563v9.375a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562V4.813c0-.305.234-.563.563-.563m2.062 0c.188 0 .375.188.375.375v9.75c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-9.75c0-.187.164-.375.375-.375m1.688 0a.57.57 0 0 1 .562.563v9.375a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562V4.813c0-.305.234-.563.563-.563m2.625 0a.57.57 0 0 1 .562.563v9.375a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562V4.813c0-.305.234-.563.563-.563m3.937.563c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563v9.375a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562zm-1.5-.188c0-.187.164-.375.375-.375.188 0 .375.188.375.375v9.75c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375z' />
    </g>
    <defs>
      <clipPath id='e683008f3117416ebc6f77c1130a8546__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeCaptionBoldIcon);
export default ForwardRef;
