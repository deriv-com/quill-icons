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
      <path d='M5.813 5.492 1.172 13.11c-.047.07-.047.118-.047.188 0 .187.14.328.328.328h9.07c.188 0 .352-.14.352-.328 0-.07-.023-.117-.07-.188l-4.64-7.617A.18.18 0 0 0 6 5.375c-.094 0-.14.047-.187.117m-.961-.586c.234-.398.68-.656 1.148-.656.445 0 .89.258 1.125.656l4.64 7.617c.141.235.235.493.235.774 0 .797-.656 1.453-1.477 1.453h-9.07A1.46 1.46 0 0 1 0 13.297q0-.422.21-.774zm1.898 7.219c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75m-.187-4.312v2.25a.555.555 0 0 1-.563.562.54.54 0 0 1-.562-.562v-2.25c0-.305.234-.563.562-.563a.57.57 0 0 1 .563.563' />
    </g>
    <defs>
      <clipPath id='c3326203919b31eccc5b91021e84d7a0__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationCaptionBoldIcon);
export default ForwardRef;
