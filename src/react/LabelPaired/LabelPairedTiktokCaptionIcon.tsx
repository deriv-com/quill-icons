import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTiktokCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.75 8.422a4.7 4.7 0 0 1-2.883-.914v4.195c0 1.594-.984 3-2.484 3.563a3.78 3.78 0 0 1-4.195-1.055 3.84 3.84 0 0 1-.493-4.336c.75-1.383 2.297-2.156 3.89-1.945v2.11a1.77 1.77 0 0 0-1.968.632 1.8 1.8 0 0 0 .024 2.062c.445.61 1.242.868 1.945.633a1.76 1.76 0 0 0 1.219-1.664V3.5h2.062c0 .188 0 .352.047.54.14.773.586 1.452 1.266 1.874a2.8 2.8 0 0 0 1.57.469z' />
    </g>
    <defs>
      <clipPath id='3ff265f9596cfb91263b0b198cd9f2b5__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTiktokCaptionIcon);
export default ForwardRef;
