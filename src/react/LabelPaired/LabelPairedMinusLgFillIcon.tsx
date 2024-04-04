import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMinusLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.125 15.5c0 .703-.586 1.25-1.25 1.25H2.125c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h13.75c.664 0 1.25.586 1.25 1.25' />
    </g>
    <defs>
      <clipPath id='bf9af7c4c514352f2d812cd8d6dde780__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMinusLgFillIcon);
export default ForwardRef;
