import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpMdRegularIcon = (
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
      <path d='m8.344 5.656 6 6a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L8 6.719l-5.656 5.656a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l6-6a.53.53 0 0 1 .719 0m6 12a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L8 12.719l-5.656 5.656a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l6-6a.53.53 0 0 1 .719 0z' />
    </g>
    <defs>
      <clipPath id='0510451ee09a12272ad77c44c994d340__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpMdRegularIcon);
export default ForwardRef;
