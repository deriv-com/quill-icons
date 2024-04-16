import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFieldPasswordLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.75 9.875c-1.055 0-1.875.86-1.875 1.875v7.5c0 1.055.82 1.875 1.875 1.875h17.5c1.016 0 1.875-.82 1.875-1.875v-7.5c0-1.016-.86-1.875-1.875-1.875zM.625 11.75A3.11 3.11 0 0 1 3.75 8.625h17.5a3.134 3.134 0 0 1 3.125 3.125v7.5a3.11 3.11 0 0 1-3.125 3.125H3.75c-1.758 0-3.125-1.367-3.125-3.125zm16.25 7.5a.617.617 0 0 1-.625-.625v-6.25c0-.312.273-.625.625-.625.313 0 .625.313.625.625v6.25a.64.64 0 0 1-.625.625M5 15.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25m3.75 0c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25m3.75 0c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25' />
    </g>
    <defs>
      <clipPath id='d7569b5284172ade35aa1bd2994d2fac__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFieldPasswordLgRegularIcon);
export default ForwardRef;
