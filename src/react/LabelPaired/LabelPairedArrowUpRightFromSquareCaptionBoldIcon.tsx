import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareCaptionBoldIcon = (
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
      <path d='M7.125 4.063c0-.305.234-.563.563-.563h3.726c.328 0 .563.258.563.563v3.75a.54.54 0 0 1-.563.562.555.555 0 0 1-.562-.562V5.422l-5.227 5.226a.513.513 0 0 1-.773 0c-.235-.21-.235-.562 0-.796l5.226-5.227h-2.39a.54.54 0 0 1-.563-.562m-5.437.187h3a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562h-3a.555.555 0 0 0-.563.563v7.875c0 .328.234.562.563.562h7.875a.555.555 0 0 0 .562-.562v-3c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563v3c0 .937-.773 1.687-1.687 1.687H1.686A1.68 1.68 0 0 1 0 13.813V5.937C0 5.024.75 4.25 1.688 4.25' />
    </g>
    <defs>
      <clipPath id='add944d89c51b63abb7b85f359e879ad__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareCaptionBoldIcon);
export default ForwardRef;
