import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownMdRegularIcon = (
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
      <path d='M1.625 6.375a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0L8 11.313l5.625-5.657a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719l-6 6a.53.53 0 0 1-.719 0zm0 6a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0L8 17.312l5.625-5.656a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719l-6 6a.53.53 0 0 1-.719 0z' />
    </g>
    <defs>
      <clipPath id='a1ec222da12d8ac26f8c4a80540f5065__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownMdRegularIcon);
export default ForwardRef;
