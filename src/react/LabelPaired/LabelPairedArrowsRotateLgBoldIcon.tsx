import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M19.375 13.313q-.078.858-.937.937h-5.625q-.86-.079-.938-.937.078-.86.938-.938h3.359l-2.031-2.031Q12.422 8.664 10 8.625q-2.148.04-3.828 1.172a6.9 6.9 0 0 0-2.5 3.008q-.39.78-1.211.508-.78-.43-.508-1.25a8.57 8.57 0 0 1 3.164-3.829Q7.265 6.79 10 6.75q3.164.039 5.469 2.266l2.031 2.03V7.689q.078-.86.938-.938.858.078.937.938zM1.563 16.75h4.375q.859.078.937.938-.078.858-.937.937h-2.11l2.031 2.031q1.719 1.68 4.141 1.719 2.148-.04 3.828-1.172a6.9 6.9 0 0 0 2.5-3.008q.39-.741 1.211-.468.78.39.508 1.21-1.055 2.383-3.164 3.829Q12.735 24.21 10 24.25q-3.164-.039-5.469-2.266L2.5 19.954v2.108q-.079.86-.937.938-.86-.079-.938-.937v-4.375q.078-.86.938-.938' />
    </g>
    <defs>
      <clipPath id='28397752e8243560a264aff0f5388ed0__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateLgBoldIcon);
export default ForwardRef;
