import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayMdFillIcon = (
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
      <path d='m2.281 5.219 9 5.5q.688.469.719 1.281-.03.845-.719 1.281l-9 5.5q-.75.438-1.5.032Q.031 18.375 0 17.5v-11q.03-.874.781-1.312.75-.406 1.5.03' />
    </g>
    <defs>
      <clipPath id='082ebe57f9b9a4985a9cb6c254250b66__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayMdFillIcon);
export default ForwardRef;
