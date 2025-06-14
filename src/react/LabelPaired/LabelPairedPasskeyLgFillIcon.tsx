import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasskeyLgFillIcon = (
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
      <path d='M4.258 23.234v-3.086c0-.585.156-1.132.508-1.64.312-.508.703-.899 1.25-1.172.898-.43 1.797-.781 2.773-1.016a14 14 0 0 1 2.852-.312h.898l.938.117a4.9 4.9 0 0 0 .468 2.578c.43.781 1.016 1.445 1.758 1.914v2.617zm14.531 1.993-1.406-1.368v-4.257a3.2 3.2 0 0 1-1.64-1.133c-.43-.586-.626-1.211-.626-1.953 0-.899.313-1.641.938-2.266a3.07 3.07 0 0 1 2.265-.937c.899 0 1.64.312 2.266.937.625.625.937 1.406.937 2.266 0 .703-.195 1.289-.546 1.836-.391.507-.86.898-1.485 1.132l1.133 1.172-1.406 1.367 1.406 1.368zm-7.148-10.079c-1.094 0-2.07-.39-2.852-1.171-.781-.782-1.172-1.758-1.172-2.852 0-1.133.39-2.07 1.172-2.852.781-.78 1.758-1.171 2.852-1.171 1.132 0 2.07.39 2.851 1.171.82.782 1.211 1.758 1.211 2.852s-.39 2.07-1.21 2.852c-.782.78-1.72 1.171-2.852 1.171m6.68 1.836c.35 0 .663-.156.859-.43a1.08 1.08 0 0 0 0-.976c-.196-.273-.508-.469-.86-.43-.351-.039-.664.157-.86.43a1.08 1.08 0 0 0 0 .977c.196.273.509.43.86.43' />
    </g>
    <defs>
      <clipPath id='7df4a2731cfe5f3f976c5f9859cf1b9a__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasskeyLgFillIcon);
export default ForwardRef;
