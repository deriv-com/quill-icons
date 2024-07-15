import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.625 17.781a.95.95 0 0 1-1.062.125A.97.97 0 0 1 0 17V7c0-.375.219-.719.563-.906.343-.157.75-.094 1.062.156L7 10.719v2.594zM8 15V7c0-.375.219-.719.563-.906.343-.157.75-.094 1.062.156l6 5c.219.188.375.469.375.75 0 .313-.156.594-.375.781l-6 5a.95.95 0 0 1-1.062.125A.97.97 0 0 1 8 17z' />
    </g>
    <defs>
      <clipPath id='7917996f5a15bb8dcb9108b41fb037c5__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardMdFillIcon);
export default ForwardRef;
