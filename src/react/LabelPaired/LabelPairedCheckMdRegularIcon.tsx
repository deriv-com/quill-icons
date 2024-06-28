import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCheckMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.844 7.156a.53.53 0 0 1 0 .719l-8.5 8.5a.53.53 0 0 1-.719 0l-4.5-4.5a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0L5 15.312l8.125-8.156a.53.53 0 0 1 .719 0' />
    </g>
    <defs>
      <clipPath id='f214a992831af868fac7febb6c2aecb5__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckMdRegularIcon);
export default ForwardRef;
