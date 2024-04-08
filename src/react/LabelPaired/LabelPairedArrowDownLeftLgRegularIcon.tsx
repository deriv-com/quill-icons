import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 21.75a.617.617 0 0 1-.625-.625v-8.75c0-.312.273-.625.625-.625.313 0 .625.313.625.625v7.266L12.656 9.445a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899L3.359 20.5h7.266c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625z' />
    </g>
    <defs>
      <clipPath id='3aea55bdd261c88e9f2333cffe346c16__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftLgRegularIcon);
export default ForwardRef;
