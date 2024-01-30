import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightLgRegularIcon = (
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
      <path d='M18.75 15.5q-.04-2.383-1.172-4.375a9 9 0 0 0-3.203-3.203Q12.305 6.75 10 6.75q-2.304 0-4.375 1.172a9 9 0 0 0-3.203 3.203Q1.289 13.117 1.25 15.5q.04 2.383 1.172 4.375a9 9 0 0 0 3.203 3.203Q7.695 24.25 10 24.25t4.375-1.172a9 9 0 0 0 3.203-3.203q1.133-1.992 1.172-4.375M0 15.5q.04-2.735 1.328-5Q2.657 8.235 5 6.828 7.383 5.5 10 5.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q2.657 22.765 1.328 20.5.038 18.235 0 15.5m10.469-5q1.133.04 1.875.781.742.742.781 1.875-.039 1.211-.898 1.992 1.171.86 1.21 2.383-.038 1.25-.859 2.11-.86.82-2.11.859h-.937q-1.25-.039-2.11-.86-.819-.858-.859-2.109.04-1.523 1.211-2.383-.859-.78-.898-1.992.039-1.133.781-1.875t1.875-.781zm-.938 4.063h.938q.585 0 .976-.43.43-.39.43-.977 0-.585-.43-.976a1.26 1.26 0 0 0-.976-.43H9.53q-.585 0-.976.43-.43.39-.43.976 0 .585.43.977.39.43.976.43m.938 1.25H9.53q-.742 0-1.21.507-.509.469-.508 1.211 0 .743.507 1.211.469.508 1.211.508h.938q.742 0 1.21-.508.509-.469.508-1.21 0-.743-.507-1.212-.469-.508-1.211-.508' />
    </g>
    <defs>
      <clipPath id='1f3c44082d1f3fc24142c4d321f4fe81__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightLgRegularIcon);
export default ForwardRef;
