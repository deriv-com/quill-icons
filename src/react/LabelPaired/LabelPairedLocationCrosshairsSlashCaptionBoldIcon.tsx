import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashCaptionBoldIcon = (
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
      <path d='m.89 3.64 3.423 2.673c.703-.68 1.593-1.149 2.625-1.266v-.984c0-.305.234-.563.562-.563a.57.57 0 0 1 .563.563v.984a4.525 4.525 0 0 1 3.89 3.89h.985a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.563h-.985a4.14 4.14 0 0 1-.61 1.757l3.423 2.696c.257.187.304.539.093.773a.518.518 0 0 1-.773.094L.21 4.508a.518.518 0 0 1-.094-.774.518.518 0 0 1 .774-.093m4.337 3.376.89.703A2.34 2.34 0 0 1 7.5 7.25 2.25 2.25 0 0 1 9.75 9.5c0 .328-.07.633-.187.914l.89.703a3.4 3.4 0 0 0 .422-1.617A3.39 3.39 0 0 0 7.5 6.125c-.89 0-1.687.352-2.273.89m3.375 2.648V9.5c0-.61-.493-1.125-1.125-1.125-.141 0-.282.047-.399.094zm.14 2.977.961.773a4 4 0 0 1-1.64.563v.96a.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.562v-.961c-2.04-.258-3.657-1.875-3.915-3.891h-.96a.555.555 0 0 1-.563-.563c0-.328.234-.562.563-.562h.96c.024-.258.07-.469.141-.703l.984.773c-.023.164-.023.328-.023.469 0 1.875 1.5 3.375 3.375 3.375.422 0 .844-.07 1.242-.234' />
    </g>
    <defs>
      <clipPath id='f38842171990a689ced9ddc485e26c48__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashCaptionBoldIcon);
export default ForwardRef;
