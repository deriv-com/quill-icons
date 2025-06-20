import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleThreeCaptionRegularIcon = (
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
      <path d='M6 4.25a5.24 5.24 0 0 0-4.547 2.625 5.14 5.14 0 0 0 0 5.25A5.19 5.19 0 0 0 6 14.75a5.18 5.18 0 0 0 4.523-2.625 5.14 5.14 0 0 0 0-5.25A5.23 5.23 0 0 0 6 4.25M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m-1.875-9v.023h3.352a.36.36 0 0 1 .351.235c.07.14.024.305-.094.422L5.883 8.75h.469a1.88 1.88 0 0 1 1.875 1.875c0 1.055-.82 1.898-1.875 1.898h-.844a2.09 2.09 0 0 1-1.64-.82l-.048-.094a.35.35 0 0 1 .07-.515.35.35 0 0 1 .516.07l.07.07a1.3 1.3 0 0 0 1.032.54h.844a1.13 1.13 0 0 0 1.125-1.149c0-.61-.493-1.125-1.125-1.125H4.875a.42.42 0 0 1-.375-.234.42.42 0 0 1 .117-.422L6.47 7.25H4.125a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375' />
    </g>
    <defs>
      <clipPath id='6344ed8a2152f49adcd85dc8ba98ebd3__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeCaptionRegularIcon);
export default ForwardRef;
