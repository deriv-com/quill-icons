import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.5 17.5 9-5.5-9-5.5zM.781 5.188q.75-.406 1.5.03l9 5.5q.688.438.719 1.282-.03.845-.719 1.281l-9 5.5q-.75.438-1.5.032Q.031 18.375 0 17.5v-11q.03-.874.781-1.312' />
    </g>
    <defs>
      <clipPath id='9ec662e21a58831e99a19c037799913f__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayMdBoldIcon);
export default ForwardRef;
