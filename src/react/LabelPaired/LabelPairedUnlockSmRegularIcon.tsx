import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUnlockSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.875 7.25V9h6.563c1.203 0 2.187.984 2.187 2.188v4.374c0 1.231-.984 2.188-2.187 2.188H2.561a2.16 2.16 0 0 1-2.187-2.187v-4.376C.375 9.985 1.332 9 2.563 9H3V7.25c0-1.914 1.559-3.5 3.5-3.5a3.47 3.47 0 0 1 3.336 2.516c.082.218-.055.464-.3.547-.22.054-.466-.055-.52-.301A2.64 2.64 0 0 0 6.5 4.625 2.626 2.626 0 0 0 3.875 7.25M1.25 11.188v4.374c0 .739.574 1.313 1.313 1.313h7.874c.711 0 1.313-.574 1.313-1.312v-4.376a1.33 1.33 0 0 0-1.312-1.312H2.561c-.738 0-1.312.602-1.312 1.313' />
    </g>
    <defs>
      <clipPath id='911cd369bba768aa15e919a29b08260b__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockSmRegularIcon);
export default ForwardRef;
