import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeCaptionFillIcon = (
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
      <path d='M.563 4.25h.375a.57.57 0 0 1 .562.563v9.375a.555.555 0 0 1-.562.562H.563A.54.54 0 0 1 0 14.188V4.813c0-.305.234-.563.563-.563m2.062 0c.188 0 .375.188.375.375v9.75c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-9.75c0-.187.164-.375.375-.375m1.688 0h.375a.57.57 0 0 1 .562.563v9.375a.555.555 0 0 1-.562.562h-.375a.54.54 0 0 1-.563-.562V4.813c0-.305.234-.563.563-.563m2.25 0h.375a.57.57 0 0 1 .562.563v9.375a.555.555 0 0 1-.562.562h-.375A.54.54 0 0 1 6 14.188V4.813c0-.305.234-.563.563-.563m3.937.563c0-.305.234-.563.563-.563h.374a.57.57 0 0 1 .563.563v9.375a.555.555 0 0 1-.562.562h-.376a.54.54 0 0 1-.562-.562zM9 4.625c0-.187.164-.375.375-.375.188 0 .375.188.375.375v9.75c0 .21-.187.375-.375.375A.37.37 0 0 1 9 14.375z' />
    </g>
    <defs>
      <clipPath id='260f228b72ebea013b69a3a20bece2fb__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeCaptionFillIcon);
export default ForwardRef;
