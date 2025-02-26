import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilterCaptionRegularIcon = (
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
      <path d='M0 5.188a.92.92 0 0 1 .914-.938h10.149a.94.94 0 0 1 .937.938c0 .21-.094.421-.234.585L7.5 10.953v3.024a.82.82 0 0 1-.797.796.76.76 0 0 1-.492-.187l-1.43-1.102a.73.73 0 0 1-.304-.586v-1.945L.21 5.773A.9.9 0 0 1 0 5.188M.914 5C.82 5 .75 5.094.75 5.188c0 .046 0 .07.023.117l4.383 5.273c.047.07.094.164.094.235v2.085L6.68 14h.023c.024 0 .047 0 .047-.023v-3.165c0-.07.023-.164.07-.234l4.383-5.273c.024-.047.047-.07.047-.117A.2.2 0 0 0 11.063 5z' />
    </g>
    <defs>
      <clipPath id='d09e9b50f5f0dc07ad56903585284a05__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilterCaptionRegularIcon);
export default ForwardRef;
