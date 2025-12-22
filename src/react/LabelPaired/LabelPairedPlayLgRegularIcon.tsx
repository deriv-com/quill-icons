import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayLgRegularIcon = (
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
      <path d='M2.188 8.117a.7.7 0 0 0-.626-.039c-.195.117-.351.352-.351.547v13.75c0 .234.156.469.351.547a.6.6 0 0 0 .626 0l11.25-6.875a.62.62 0 0 0 .312-.547.61.61 0 0 0-.312-.508zM.938 7.023a1.87 1.87 0 0 1 1.914 0l11.25 6.875c.546.352.898.977.898 1.602 0 .664-.352 1.29-.898 1.602l-11.25 6.875c-.586.39-1.329.39-1.914.039C.352 23.703 0 23.078 0 22.375V8.625c0-.664.352-1.29.938-1.602' />
    </g>
    <defs>
      <clipPath id='9b259263297fbb9433059d5745254d20__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayLgRegularIcon);
export default ForwardRef;
