import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkLgBoldIcon = (
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
      <path d='M13.477 10.852 8.828 15.5l4.649 4.648q.546.665 0 1.329-.664.546-1.329 0L7.5 16.828l-4.648 4.649q-.665.546-1.329 0-.546-.665 0-1.329L6.172 15.5l-4.649-4.648q-.546-.664 0-1.329.665-.546 1.329 0L7.5 14.172l4.648-4.649q.664-.546 1.329 0 .546.665 0 1.329' />
    </g>
    <defs>
      <clipPath id='03fd893eaea78a7eba4669a7761d5a66__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkLgBoldIcon);
export default ForwardRef;
