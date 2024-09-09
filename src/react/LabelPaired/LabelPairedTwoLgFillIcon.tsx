import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.797 9.25c-.82 0-1.64.352-2.227.938l-1.21 1.21a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l1.21-1.211c1.055-1.055 2.5-1.68 3.985-1.68a5.685 5.685 0 0 1 5.703 5.703c0 1.485-.625 2.93-1.68 3.985L4.508 21.75H11.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-10c-.508 0-.977-.273-1.172-.742a1.26 1.26 0 0 1 .274-1.367l7.46-7.461A3.2 3.2 0 0 0 9 12.453 3.22 3.22 0 0 0 5.797 9.25' />
    </g>
    <defs>
      <clipPath id='910ce1c002a3e68cf678455af0674c09__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoLgFillIcon);
export default ForwardRef;
