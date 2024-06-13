import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateCaptionBoldIcon = (
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
      <path d='M2.203 7.906c-.14.282-.469.399-.75.282a.56.56 0 0 1-.305-.727A5.28 5.28 0 0 1 6 4.25c1.219 0 2.39.492 3.258 1.36L10.5 6.851v-1.29c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563v2.625a.555.555 0 0 1-.562.562H8.437a.54.54 0 0 1-.562-.562c0-.305.234-.563.563-.563h1.265L8.461 6.406A3.5 3.5 0 0 0 6 5.375a4.12 4.12 0 0 0-3.797 2.531m8.625 3.68C10.008 13.437 8.156 14.75 6 14.75c-1.242 0-2.414-.469-3.281-1.36L1.5 12.173v1.265A.555.555 0 0 1 .938 14a.54.54 0 0 1-.563-.562v-2.626c0-.304.234-.562.563-.562h2.625a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562h-1.29l1.243 1.242A3.5 3.5 0 0 0 6 13.625c1.688 0 3.164-1.008 3.773-2.484a.575.575 0 0 1 .75-.305.58.58 0 0 1 .305.75' />
    </g>
    <defs>
      <clipPath id='3683bd07aee6488d4306be833ef88540__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateCaptionBoldIcon);
export default ForwardRef;
