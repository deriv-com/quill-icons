import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarCaptionBoldIcon = (
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
      <path d='M6 4.625c-1.758 0-3.352.938-4.242 2.438a4.89 4.89 0 0 0 0 4.875A4.88 4.88 0 0 0 6 14.375a4.87 4.87 0 0 0 4.219-2.437 4.89 4.89 0 0 0 0-4.876C9.329 5.563 7.734 4.626 6 4.626M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m0-9.164c.14 0 .258.094.328.21l.727 1.5 1.64.235c.14.024.258.117.305.258.047.14 0 .281-.094.375l-1.195 1.149.281 1.64a.39.39 0 0 1-.14.375c-.118.07-.282.094-.399.024L6 11.328l-1.477.774c-.117.07-.28.046-.398-.024a.39.39 0 0 1-.14-.375l.28-1.64L3.07 8.914a.37.37 0 0 1-.093-.375.38.38 0 0 1 .304-.258l1.64-.234.727-1.5A.4.4 0 0 1 6 6.336' />
    </g>
    <defs>
      <clipPath id='847e84b524c8862a43a1d74057d7b90a__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarCaptionBoldIcon);
export default ForwardRef;
